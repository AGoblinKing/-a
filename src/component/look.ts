import { doControl, talk } from "src/chat";
import { toggle_pointerlock } from "src/timing";

/* global DeviceOrientationEvent  */
var registerComponent = AFRAME.registerComponent;
var THREE = AFRAME.THREE
var utils = AFRAME.utils

// To avoid recalculation at every mouse movement tick
var PI_2 = Math.PI / 2;

/**
 * look-controls. Update entity pose, factoring mouse, touch, and WebVR API data.
 */
registerComponent('look', {
    dependencies: ['position', 'rotation'],

    schema: {
        enabled: { default: true },
        pointerLockEnabled: { default: false },
        reverseMouseDrag: { default: false },
        reverseTouchDrag: { default: false },
        touchEnabled: { default: true },
        mouseEnabled: { default: true }
    },

    init: function () {
        this.deltaYaw = 0;
        this.previousHMDPosition = new THREE.Vector3();
        this.hmdQuaternion = new THREE.Quaternion();

        this.position = new THREE.Vector3();

        this.rotation = {};
        this.deltaRotation = {};
        this.savedPose = null;
        this.pointerLocked = false;
        this.setupMouseControls();
        this.bindMethods();
        this.previousMouseEvent = {};


        // To save / restore camera pose
        this.savedPose = {
            position: new THREE.Vector3(),
            rotation: new THREE.Euler()
        };


        // Call enter VR handler if the scene has entered VR before the event listeners attached.
        if (this.el.sceneEl.is('vr-mode') || this.el.sceneEl.is('ar-mode')) { this.onEnterVR(); }
    },



    update: function (oldData) {
        var data = this.data;


        if (oldData && !data.pointerLockEnabled !== oldData.pointerLockEnabled) {
            this.removeEventListeners();
            this.addEventListeners();
            if (this.pointerLocked) { this.exitPointerLock(); }
        }
    },

    tick: function (t) {
        var data = this.data;
        if (!data.enabled) { return; }
        this.updateOrientation();
    },

    play: function () {
        this.addEventListeners();
    },

    pause: function () {
        this.removeEventListeners();
        if (this.pointerLocked) { this.exitPointerLock(); }
    },

    remove: function () {
        this.removeEventListeners();
        if (this.pointerLocked) { this.exitPointerLock(); }
    },

    bindMethods: function () {
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onEnterVR = this.onEnterVR.bind(this);
        this.onExitVR = this.onExitVR.bind(this);
        this.onPointerLockChange = this.onPointerLockChange.bind(this);
        this.onPointerLockError = this.onPointerLockError.bind(this);
    },

    /**
     * Set up states and Object3Ds needed to store rotation data.
     */
    setupMouseControls: function () {
        this.mouseDown = false;
        this.pitchObject = new THREE.Object3D();
        this.yawObject = new THREE.Object3D();
        this.yawObject.position.y = 10;
        this.yawObject.add(this.pitchObject);
    },

    /**
     * Add mouse and touch event listeners to canvas.
     */
    addEventListeners: function () {
        var sceneEl = this.el.sceneEl;
        var canvasEl = sceneEl.canvas;

        // Wait for canvas to load.
        if (!canvasEl) {
            sceneEl.addEventListener('render-target-loaded', this.addEventListeners.bind(this));
            return;
        }
        this.cancel = toggle_pointerlock.on(($t) => {

            if (!this.pointerLocked) return

            if ($t) {
                canvasEl.requestPointerLock();
            } else {

                document.exitPointerLock()
            }
        })
        // Mouse events.
        canvasEl.addEventListener('mousedown', this.onMouseDown, false);
        window.addEventListener('mousemove', this.onMouseMove, false);

        // remove all other mousemove listeners
        window.removeEventListener('mousemove', this.onMouseMove, true);
        window.addEventListener('mouseup', this.onMouseUp, false);

        // Touch events.
        canvasEl.addEventListener('touchstart', this.onTouchStart);
        window.addEventListener('touchmove', this.onTouchMove);
        window.addEventListener('touchend', this.onTouchEnd);

        // sceneEl events.
        sceneEl.addEventListener('enter-vr', this.onEnterVR);
        sceneEl.addEventListener('exit-vr', this.onExitVR);

        // Pointer Lock events.
        if (this.data.pointerLockEnabled) {
            document.addEventListener('pointerlockchange', this.onPointerLockChange, false);
            document.addEventListener('mozpointerlockchange', this.onPointerLockChange, false);
            document.addEventListener('pointerlockerror', this.onPointerLockError, false);
        }
    },

    /**
     * Remove mouse and touch event listeners from canvas.
     */
    removeEventListeners: function () {
        var sceneEl = this.el.sceneEl;
        var canvasEl = sceneEl && sceneEl.canvas;

        if (!canvasEl) { return; }

        // Mouse events.
        canvasEl.removeEventListener('mousedown', this.onMouseDown);
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.onMouseUp);

        // Touch events.
        canvasEl.removeEventListener('touchstart', this.onTouchStart);
        window.removeEventListener('touchmove', this.onTouchMove);
        window.removeEventListener('touchend', this.onTouchEnd);

        // sceneEl events.
        sceneEl.removeEventListener('enter-vr', this.onEnterVR);
        sceneEl.removeEventListener('exit-vr', this.onExitVR);

        // Pointer Lock events.
        document.removeEventListener('pointerlockchange', this.onPointerLockChange, false);
        document.removeEventListener('mozpointerlockchange', this.onPointerLockChange, false);
        document.removeEventListener('pointerlockerror', this.onPointerLockError, false);
    },

    /**
     * Update orientation for mobile, mouse drag, and headset.
     * Mouse-drag only enabled if HMD is not active.
     */
    updateOrientation: function () {
        var object3D = this.el.object3D;
        var pitchObject = this.pitchObject;
        var yawObject = this.yawObject;
        var sceneEl = this.el.sceneEl;

        // In VR or AR mode, THREE is in charge of updating the camera pose.
        if ((sceneEl.is('vr-mode') || sceneEl.is('ar-mode')) && sceneEl.checkHeadsetConnected()) {
            // With WebXR THREE applies headset pose to the object3D internally.
            return;
        }


        // On mobile, do camera rotation with touch events and sensors.
        object3D.rotation.x = pitchObject.rotation.x;
        object3D.rotation.y = yawObject.rotation.y;

    },


    /**
     * Translate mouse drag into rotation.
     *
     * Dragging up and down rotates the camera around the X-axis (yaw).
     * Dragging left and right rotates the camera around the Y-axis (pitch).
     */
    onMouseMove: function (evt) {

        var direction;
        var movementX;
        var movementY;
        var pitchObject = this.pitchObject;
        var previousMouseEvent = this.previousMouseEvent;
        var yawObject = this.yawObject;

        // Not dragging or not enabled.
        if (!this.data.enabled || (!this.mouseDown && !this.pointerLocked)) { return; }

        // Calculate delta.
        if (this.pointerLocked) {
            movementX = evt.movementX || evt.mozMovementX || 0;
            movementY = evt.movementY || evt.mozMovementY || 0;

        } else {
            movementX = evt.screenX - previousMouseEvent.screenX;
            movementY = evt.screenY - previousMouseEvent.screenY;
        }
        this.previousMouseEvent.screenX = evt.screenX;
        this.previousMouseEvent.screenY = evt.screenY;

        // Calculate rotation.
        direction = this.data.reverseMouseDrag ? 1 : -1;
        yawObject.rotation.y += movementX * 0.002 * direction;
        // yawObject.rotation.y = Math.max(-PI_2 / 2, Math.min(PI_2 / 2, pitchObject.rotation.y));
        pitchObject.rotation.x += movementY * 0.002 * direction;
        pitchObject.rotation.x = Math.max(-PI_2 / 3, Math.min(PI_2 / 3, pitchObject.rotation.x));


    },

    /**
     * Register mouse down to detect mouse drag.
     */
    onMouseDown: function (evt) {
        var sceneEl = this.el.sceneEl;
        if (!this.data.enabled || !this.data.mouseEnabled || ((sceneEl.is('vr-mode') || sceneEl.is('ar-mode')) && sceneEl.checkHeadsetConnected())) { return; }
        // Handle only primary button.

        if (evt.button !== 0 && evt.button !== 2) { return; }

        var canvasEl = sceneEl && sceneEl.canvas;

        this.mouseDown = true;
        this.previousMouseEvent.screenX = evt.screenX;
        this.previousMouseEvent.screenY = evt.screenY;

        // do the use left/right commanads

        if (this.data.pointerLockEnabled && !this.pointerLocked) {
            if (canvasEl.requestPointerLock) {
                canvasEl.requestPointerLock();
            } else if (canvasEl.mozRequestPointerLock) {
                canvasEl.mozRequestPointerLock();
            }
        } else {
            doControl("control use " + (evt.button === 0 ? "hand_left" : "hand_right"));
        }
    },

    /**
     * Register mouse up to detect release of mouse drag.
     */
    onMouseUp: function (evt) {
        if (this.pointerLocked) {
            doControl("control not use " + (evt.button === 0 ? "left" : "right"));
        }
        this.mouseDown = false;

    },

    /**
     * Register touch down to detect touch drag.
     */
    onTouchStart: function (evt) {
        if (evt.touches.length !== 1 ||
            !this.data.touchEnabled ||
            this.el.sceneEl.is('vr-mode') ||
            this.el.sceneEl.is('ar-mode')) { return; }
        this.touchStart = {
            x: evt.touches[0].pageX,
            y: evt.touches[0].pageY
        };
        this.touchStarted = true;
    },

    /**
     * Translate touch move to Y-axis rotation.
     */
    onTouchMove: function (evt) {
        var direction;
        var canvas = this.el.sceneEl.canvas;
        var deltaY;
        var yawObject = this.yawObject;

        if (!this.touchStarted || !this.data.touchEnabled) { return; }

        deltaY = 2 * Math.PI * (evt.touches[0].pageX - this.touchStart.x) / canvas.clientWidth;

        direction = this.data.reverseTouchDrag ? 1 : -1;
        // Limit touch orientaion to to yaw (y axis).
        yawObject.rotation.y -= deltaY * 0.5 * direction;
        this.touchStart = {
            x: evt.touches[0].pageX,
            y: evt.touches[0].pageY
        };
    },

    /**
     * Register touch end to detect release of touch drag.
     */
    onTouchEnd: function () {
        this.touchStarted = false;
    },

    /**
     * Save pose.
     */
    onEnterVR: function () {
        var sceneEl = this.el.sceneEl;
        if (!sceneEl.checkHeadsetConnected()) { return; }
        this.saveCameraPose();

        this.el.object3D.rotation.set(0, 0, 0);
        if (sceneEl.hasWebXR) {
            this.el.object3D.matrixAutoUpdate = false;
            this.el.object3D.updateMatrix();
        }
    },

    /**
     * Restore the pose.
     */
    onExitVR: function () {
        if (!this.el.sceneEl.checkHeadsetConnected()) { return; }
        this.restoreCameraPose();

        this.el.object3D.matrixAutoUpdate = true;
    },

    /**
     * Update Pointer Lock state.
     */
    onPointerLockChange: function () {
        this.pointerLocked = !!(document.pointerLockElement || document.mozPointerLockElement);
    },

    /**
     * Recover from Pointer Lock error.
     */
    onPointerLockError: function () {
        this.pointerLocked = false;
    },

    // Exits pointer-locked mode.
    exitPointerLock: function () {
        document.exitPointerLock();
        this.pointerLocked = false;
    },

    /**
     * Save camera pose before entering VR to restore later if exiting.
     */
    saveCameraPose: function () {
        var el = this.el;

        this.savedPose.position.copy(el.object3D.position);
        this.savedPose.rotation.copy(el.object3D.rotation);
        this.hasSavedPose = true;
    },

    /**
     * Reset camera pose to before entering VR.
     */
    restoreCameraPose: function () {
        var el = this.el;
        var savedPose = this.savedPose;

        if (!this.hasSavedPose) { return; }

        // Reset camera orientation.
        el.object3D.position.copy(savedPose.position);
        el.object3D.rotation.copy(savedPose.rotation);
        this.hasSavedPose = false;
    }
})
