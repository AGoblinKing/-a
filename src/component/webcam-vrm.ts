import { Holistic } from '@mediapipe/holistic/holistic';
import { Camera } from '@mediapipe/camera_utils/camera_utils';
import { open_live, tick } from 'src/timing';

import { Value } from 'src/value';
import { currentVRM, mirrorVRM } from './vrm';
import { talk } from 'src/chat';
const { VRMSchema } = THREE_VRM

const clamp = Kalidokit.Utils.clamp;
const lerp = Kalidokit.Vector.lerp;

const euler = new AFRAME.THREE.Euler()
const quat = new AFRAME.THREE.Quaternion()
// Animate Rotation Helper function
const rigRotation = (
  vrm,
  name,
  rotation = { x: 0, y: 0, z: 0 },
  dampener = 1,
  lerpAmount = 0.3
) => {

  const Part = vrm.humanoid.getBoneNode(
    VRMSchema.HumanoidBoneName[name]
  );
  if (!Part) { return }

  euler.set(
    rotation.x * dampener,
    rotation.y * dampener,
    rotation.z * dampener
  );
  let quaternion = quat.setFromEuler(euler);
  Part.quaternion.slerp(quaternion, lerpAmount); // interpolate
};

const v3 = new AFRAME.THREE.Vector3();
// Animate Position Helper Function
const rigPosition = (
  vrm,
  name,
  position = { x: 0, y: 0, z: 0 },
  dampener = 1,
  lerpAmount = 0.3
) => {

  const Part = vrm.humanoid.getBoneNode(
    VRMSchema.HumanoidBoneName[name]
  );
  if (!Part) { return }
  let vector = v3.set(
    position.x * dampener,
    position.y * dampener,
    position.z * dampener
  );
  Part.position.lerp(vector, lerpAmount); // interpolate
};

let oldLookTarget = new AFRAME.THREE.Euler()
const rigFace = (vrm, riggedFace) => {

  rigRotation(vrm, "Neck", riggedFace.head, 0.7);

  // Blendshapes and Preset Name Schema
  const Blendshape = vrm.blendShapeProxy;
  const PresetName = VRMSchema.BlendShapePresetName;

  // Simple example without winking. Interpolate based on old blendshape, then stabilize blink with `Kalidokit` helper function.
  // for VRM, 1 is closed, 0 is open.
  riggedFace.eye.l = lerp(clamp(1 - riggedFace.eye.l, 0, 1), Blendshape.getValue(PresetName.Blink), .5)
  riggedFace.eye.r = lerp(clamp(1 - riggedFace.eye.r, 0, 1), Blendshape.getValue(PresetName.Blink), .5)
  riggedFace.eye = Kalidokit.Face.stabilizeBlink(riggedFace.eye, riggedFace.head.y)
  Blendshape.setValue(PresetName.Blink, riggedFace.eye.l);


  // Interpolate and set mouth blendshapes
  Blendshape.setValue(PresetName.I, lerp(riggedFace.mouth.shape.I, Blendshape.getValue(PresetName.I), .5));
  Blendshape.setValue(PresetName.A, lerp(riggedFace.mouth.shape.A, Blendshape.getValue(PresetName.A), .5));
  Blendshape.setValue(PresetName.E, lerp(riggedFace.mouth.shape.E, Blendshape.getValue(PresetName.E), .5));
  Blendshape.setValue(PresetName.O, lerp(riggedFace.mouth.shape.O, Blendshape.getValue(PresetName.O), .5));
  Blendshape.setValue(PresetName.U, lerp(riggedFace.mouth.shape.U, Blendshape.getValue(PresetName.U), .5));

  //PUPILS
  //interpolate pupil and keep a copy of the value
  let lookTarget =
    euler.set(
      lerp(oldLookTarget.x, riggedFace.pupil.y, .4),
      lerp(oldLookTarget.y, riggedFace.pupil.x, .4),
      0,
      "XYZ"
    )
  oldLookTarget.copy(lookTarget)
  vrm.lookAt.applyer.lookAt(lookTarget);
}

/* VRM Character Animator */
const animateVRM = (vrm, results, riggedPose, riggedLeftHand, riggedRightHand) => {
  if (!vrm || !videoElement.$) {
    return;
  }
  let riggedFace
  // Take the results from `Holistic` and animate character based on its Face, Pose, and Hand Keypoints.
  const faceLandmarks = results.faceLandmarks;
  // Pose 3D Landmarks are with respect to Hip distance in meters
  const pose3DLandmarks = results.ea;
  // Pose 2D landmarks are with respect to videoWidth and videoHeight
  const pose2DLandmarks = results.poseLandmarks;
  // Be careful, hand landmarks may be reversed
  const leftHandLandmarks = results.rightHandLandmarks;
  const rightHandLandmarks = results.leftHandLandmarks;

  // Animate Face
  if (faceLandmarks) {
    riggedFace = Kalidokit.Face.solve(faceLandmarks, {
      runtime: "mediapipe",
      video: videoElement.$
    });
    rigFace(vrm, riggedFace)
  }

  // Animate Pose
  if (pose2DLandmarks && pose3DLandmarks) {

    rigRotation(vrm, "Hips", riggedPose.Hips.rotation, 0.7);
    rigPosition(vrm,
      "Hips",
      {
        x: -riggedPose.Hips.position.x, // Reverse direction
        y: riggedPose.Hips.position.y + 1, // Add a bit of height
        z: -riggedPose.Hips.position.z // Reverse direction
      },
      1,
      0.07
    );

    rigRotation(vrm, "Chest", riggedPose.Spine, 0.25, .3);
    rigRotation(vrm, "Spine", riggedPose.Spine, 0.45, .3);

    rigRotation(vrm, "RightUpperArm", riggedPose.RightUpperArm, 1, .3);
    rigRotation(vrm, "RightLowerArm", riggedPose.RightLowerArm, 1, .3);
    rigRotation(vrm, "LeftUpperArm", riggedPose.LeftUpperArm, 1, .3);
    rigRotation(vrm, "LeftLowerArm", riggedPose.LeftLowerArm, 1, .3);

    rigRotation(vrm, "LeftUpperLeg", riggedPose.LeftUpperLeg, 1, .3);
    rigRotation(vrm, "LeftLowerLeg", riggedPose.LeftLowerLeg, 1, .3);
    rigRotation(vrm, "RightUpperLeg", riggedPose.RightUpperLeg, 1, .3);
    rigRotation(vrm, "RightLowerLeg", riggedPose.RightLowerLeg, 1, .3);
  }

  // Animate Hands
  if (leftHandLandmarks) {

    rigRotation(vrm, "LeftHand", {
      // Combine pose rotation Z and hand rotation X Y
      z: riggedPose.LeftHand.z,
      y: riggedLeftHand.LeftWrist.y,
      x: riggedLeftHand.LeftWrist.x
    });
    rigRotation(vrm, "LeftRingProximal", riggedLeftHand.LeftRingProximal);
    rigRotation(vrm, "LeftRingIntermediate", riggedLeftHand.LeftRingIntermediate);
    rigRotation(vrm, "LeftRingDistal", riggedLeftHand.LeftRingDistal);
    rigRotation(vrm, "LeftIndexProximal", riggedLeftHand.LeftIndexProximal);
    rigRotation(vrm, "LeftIndexIntermediate", riggedLeftHand.LeftIndexIntermediate);
    rigRotation(vrm, "LeftIndexDistal", riggedLeftHand.LeftIndexDistal);
    rigRotation(vrm, "LeftMiddleProximal", riggedLeftHand.LeftMiddleProximal);
    rigRotation(vrm, "LeftMiddleIntermediate", riggedLeftHand.LeftMiddleIntermediate);
    rigRotation(vrm, "LeftMiddleDistal", riggedLeftHand.LeftMiddleDistal);
    rigRotation(vrm, "LeftThumbProximal", riggedLeftHand.LeftThumbProximal);
    rigRotation(vrm, "LeftThumbIntermediate", riggedLeftHand.LeftThumbIntermediate);
    rigRotation(vrm, "LeftThumbDistal", riggedLeftHand.LeftThumbDistal);
    rigRotation(vrm, "LeftLittleProximal", riggedLeftHand.LeftLittleProximal);
    rigRotation(vrm, "LeftLittleIntermediate", riggedLeftHand.LeftLittleIntermediate);
    rigRotation(vrm, "LeftLittleDistal", riggedLeftHand.LeftLittleDistal);
  }
  if (rightHandLandmarks) {

    rigRotation(vrm, "RightHand", {
      // Combine Z axis from pose hand and X/Y axis from hand wrist rotation
      z: riggedPose.RightHand.z,
      y: riggedRightHand.RightWrist.y,
      x: riggedRightHand.RightWrist.x
    });
    rigRotation(vrm, "RightRingProximal", riggedRightHand.RightRingProximal);
    rigRotation(vrm, "RightRingIntermediate", riggedRightHand.RightRingIntermediate);
    rigRotation(vrm, "RightRingDistal", riggedRightHand.RightRingDistal);
    rigRotation(vrm, "RightIndexProximal", riggedRightHand.RightIndexProximal);
    rigRotation(vrm, "RightIndexIntermediate", riggedRightHand.RightIndexIntermediate);
    rigRotation(vrm, "RightIndexDistal", riggedRightHand.RightIndexDistal);
    rigRotation(vrm, "RightMiddleProximal", riggedRightHand.RightMiddleProximal);
    rigRotation(vrm, "RightMiddleIntermediate", riggedRightHand.RightMiddleIntermediate);
    rigRotation(vrm, "RightMiddleDistal", riggedRightHand.RightMiddleDistal);
    rigRotation(vrm, "RightThumbProximal", riggedRightHand.RightThumbProximal);
    rigRotation(vrm, "RightThumbIntermediate", riggedRightHand.RightThumbIntermediate);
    rigRotation(vrm, "RightThumbDistal", riggedRightHand.RightThumbDistal);
    rigRotation(vrm, "RightLittleProximal", riggedRightHand.RightLittleProximal);
    rigRotation(vrm, "RightLittleIntermediate", riggedRightHand.RightLittleIntermediate);
    rigRotation(vrm, "RightLittleDistal", riggedRightHand.RightLittleDistal);
  }
};

const bones = Object.keys(VRMSchema.HumanoidBoneName)
function mirror(source: VRM, target: VRM) {
  for (let name of bones) {
    const s = source.humanoid.getBoneNode(
      VRMSchema.HumanoidBoneName[name]
    );
    const t = target.humanoid.getBoneNode(
      VRMSchema.HumanoidBoneName[name]
    )

    if (t && s) t.copy(s)
  }

}
/* SETUP MEDIAPIPE HOLISTIC INSTANCE */
export const videoElement = new Value<HTMLVideoElement>()
export const canvasElement = new Value<HTMLCanvasElement>()
const onResults = (results) => {

  if (!open_live.$) return

  const faceLandmarks = results.faceLandmarks;
  // Pose 3D Landmarks are with respect to Hip distance in meters
  const pose3DLandmarks = results.ea;
  // Pose 2D landmarks are with respect to videoWidth and videoHeight
  const pose2DLandmarks = results.poseLandmarks;
  // Be careful, hand landmarks may be reversed
  const leftHandLandmarks = results.rightHandLandmarks;
  const rightHandLandmarks = results.leftHandLandmarks;

  let riggedFace, riggedPose, riggedLeftHand, riggedRightHand

  // Animate Pose
  if (pose2DLandmarks && pose3DLandmarks) {
    riggedPose = Kalidokit.Pose.solve(pose3DLandmarks, pose2DLandmarks, {
      runtime: "mediapipe",
      video: videoElement.$,
    });

  }

  // Animate Hands
  if (leftHandLandmarks) {
    riggedLeftHand = Kalidokit.Hand.solve(leftHandLandmarks, "Left");

  }
  if (rightHandLandmarks) {
    riggedRightHand = Kalidokit.Hand.solve(rightHandLandmarks, "Right");

  }
  // Animate model
  animateVRM(currentVRM.$, results, riggedPose, riggedLeftHand, riggedRightHand)

  //if (currentVRM.$ && mirrorVRM.$) mirror(currentVRM.$, mirrorVRM.$)
  animateVRM(mirrorVRM.$, results, riggedPose, riggedLeftHand, riggedRightHand)
}

const holistic = new Holistic({
  locateFile: file => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.5.1635989137/${file}`;
  }
});

holistic.setOptions({
  modelComplexity: 0.5,
  smoothLandmarks: true,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7,
  refineFaceLandmarks: true,
});
// Pass holistic a callback function
holistic.onResults(onResults);


const width = 320
const height = 240

videoElement.on(($ve) => {
  if (!$ve) return

  canvasElement.$.width = width
  canvasElement.$.height = height

  const ctx = canvasElement.$.getContext("2d")
  ctx.translate(width, 0)
  ctx.scale(-1, 1)
  // Use `Mediapipe` utils to get camera - lower resolution = higher fps


  let camera
  open_live.on(($l) => {
    if (!camera && $l) {
      camera = new Camera($ve, {
        onFrame: async () => {
          // if (!ready) return

          ctx.drawImage($ve, 0, 0, width, height)
          await holistic.send({ image: canvasElement.$ });

        },
        width,
        height
      });
    }


    if ($l) camera.start();

    if (!$l && camera) camera.stop();

  })

})


// TODO: maybe use AFRAME timing instead
tick.on(() => {
  // Update VRM
  if (currentVRM.$) {
    currentVRM.$.update(0.01);
  }
  if (mirrorVRM.$) {
    mirrorVRM.$.update(0.01);
  }
})

function Random(items: string) {
  return items[Math.floor(Math.random() * items.length)]
}

talk.on(async ($talk) => {
  if (!$talk) return

  const s = Math.sin(Math.PI * tick.$);


  const spl = $talk.split(" ")
  spl.push("pop")
  const intv = setInterval(() => {
    const item = spl.pop()
    if (!item) {
      clearInterval(intv)
      return
    }

    mirrorVRM.$?.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName[Random("OEIAU")], 0.5 + 2 * s)

  }, 1 / 3.5 * 1000)
})