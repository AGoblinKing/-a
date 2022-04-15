import { VRM, VRMUtils } from "@pixiv/three-vrm"
import { avatar_current, avatar_doer, camera, open_loading, toggle_selfie, toggle_visible } from "src/timing";
import { Value } from 'src/value';

export const currentVRM = new Value<VRM>()
export const mirrorVRM = new Value<VRM>()

currentVRM.on(($vrm) => {
  if (!$vrm || !open_loading.$) return

  currentVRM.$.scene.visible = toggle_visible.$
  open_loading.set(false)
})

toggle_visible.on(() => {
  if (!currentVRM.$) return

  currentVRM.$.scene.visible = toggle_visible.$
})


function Load(url: string): any {
  return new Promise((resolve, reject) => {

    // @ts-ignore def does exist
    const loader = new AFRAME.THREE.GLTFLoader();
    loader.crossOrigin = "anonymous";

    // Import model from URL, add your own model here
    loader.load(
      url,

      gltf => {
        VRM.from(gltf).then((vrm) => {
          resolve(vrm)
        })
      },
      progress => {

      },
      reject,

    );

  });
}

AFRAME.registerComponent('vrm', {
  schema: {
    src: { type: 'string', default: "" },
    fps: { type: 'bool', default: false },
    current: { type: 'bool', default: false },
    mirror: { type: 'bool', default: false }
  },
  load() {
    Load(this.data.src).then(vrm => {
      VRMUtils.removeUnnecessaryVertices(vrm.scene);
      VRMUtils.removeUnnecessaryJoints(vrm.scene);
      this.el.setObject3D('mesh', vrm.scene);
      this.data.vrm = vrm;

      if (this.data.current) {
        vrm.firstPerson.setup();

        currentVRM.set(vrm)
      }

      if (this.data.mirror) {

        mirrorVRM.set(vrm)
      }
    });
  },
  init() {
    this.cancel()
    this.load()

    if (this.data.src !== "") {
      if (this.data.current) {
        this.cancels.push(avatar_current.on(($av) => {
          if ($av !== this.data.src) {

            this.el.removeObject3D('mesh');
            currentVRM.$?.dispose()
            this.data.src = $av
            open_loading.set(true)
            this.load()
          }
        }))
      }

      if (this.data.doer) {
        this.cancels.push(avatar_doer.on(($av) => {
          if ($av !== this.data.src) {

            this.el.removeObject3D('mesh');
            mirrorVRM.$?.dispose()
            this.data.src = $av
            open_loading.set(true)
            this.load()
          }
        }))
      }

    }
  },
  cancel() {
    if (!this.cancels) {
      this.cancels = []
      return
    }

    this.cancels.forEach((c) => c())
    this.cancels = []
  },
  remove() {
    this.cancel()
    this.el.removeObject3D('mesh');
  }
})