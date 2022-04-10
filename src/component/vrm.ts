import { VRM } from "@pixiv/three-vrm"
import { Value } from 'src/value';

export const currentVRM = new Value<VRM>()
export const mirrorVRM = new Value<VRM>()

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
            if(this.data.mirror) {
              mirrorVRM.set(vrm)
            }
        });
      } else {
        this.el.removeObject3D('mesh');
      }
      
      
    },
    remove() {
      this.el.removeObject3D('mesh');
    }
  })