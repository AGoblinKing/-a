import AFRAME from 'aframe';
import { VRM } from "@pixiv/three-vrm"
import { Value } from 'src/value';

export const currentVRM = new Value<VRM>()

function Load(url: string): any {
    return new Promise((resolve, reject) => {

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
        src: { type: 'string', default: ""},
        fps: { type: 'bool', default: false},
        current: { type: 'bool' },
        mirror: { type: 'bool' }
    },
    
    update() {
      if(this.data.src !== "") {
        Load(this.data.src).then(vrm => {
            this.el.setObject3D('mesh', vrm.scene);
            this.data.vrm = vrm;
            if(this.data.current) {
              currentVRM.set(vrm)
            }
        });
      } else {
        this.el.removeObject3D('mesh');
      }
      

    },
    remove() {
      this.el.removeObject3D('mesh');
    },
    tick() {
      if(currentVRM.$ && this.data.mirror && this.data.vrm) {
        const bones = this.data.vrm.humanoid.humanBones
        for(let i = 0; i < bones.length; i++) {
          bones[i].copy(currentVRM.$.humanoid.humanBones[i])
        }
        this.data.vrm.update(0.01)
      }
    }
})