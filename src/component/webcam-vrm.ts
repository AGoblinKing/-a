import * as Kalidokit from 'kalidokit'
import { Holistic} from '@mediapipe/holistic/holistic';
import { Camera } from '@mediapipe/camera_utils/camera_utils';

let holistic = new Holistic({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic@0.4.1633559476/${file}`;
}});

holistic.onResults(results=> {
    // do something with prediction results
    // landmark names may change depending on TFJS/Mediapipe model version
    let facelm = results.faceLandmarks;
    let poselm = results.poseLandmarks;
    let poselm3D = results.ea;
    let rightHandlm = results.rightHandLandmarks;
    let leftHandlm = results.leftHandLandmarks;

    let faceRig = Kalidokit.Face.solve(facelm,{runtime:'mediapipe',video:HTMLVideoElement})
    let poseRig = Kalidokit.Pose.solve(poselm3D,poselm,{runtime:'mediapipe',video:HTMLVideoElement})
    let rightHandRig = Kalidokit.Hand.solve(rightHandlm,"Right")
    let leftHandRig = Kalidokit.Hand.solve(leftHandlm,"Left")
});

// use Mediapipe's webcam utils to send video to holistic every frame
const camera = new Camera(HTMLVideoElement, {
  onFrame: async () => {
    await holistic.send({image: HTMLVideoElement});
  },
  width: 640,
  height: 480
});

camera.start();