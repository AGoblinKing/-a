import AFRAME from 'aframe';
import {VRM} from "@pixiv/three-vrm"

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
        camera: { type: 'bool' },
    },
    
    update() {
      if(this.data.src !== "") {
        Load(this.data.src).then(vrm => {
            this.el.setObject3D('mesh', vrm.scene);
            this.data.vrm = vrm;
        });
      } else {
        this.el.removeObject3D('mesh');
      }

      if(this.data.camera) {
        this.data.hascam = true
      } else if(this.data.hascam){
        // make sure camera is removed
        delete this.data.hascam 
      }

      if(this.data.vrm) {
        this.data.vrm.fps(this.data.fps);
      }
    },
    remove() {
      this.el.removeObject3D('mesh');
    }
})