import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TextureLoader } from 'three';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('hello');
  init3D();
});

// Init Function
function init3D() {
  // select container
  const viewport = document.querySelector('[data-3d="c"]');
  // console.log(viewport);

  // create scened and renderer and camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  viewport.appendChild(renderer.domElement);

  // add an object
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshNormalMaterial();
  // const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);

  // add controls
  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.autoRotate = true;
  // controls.enableDamping = true;
  // controls.dampingFactor = 0.05;

  camera.position.z = 3;

  let clock = new THREE.Clock();
  let mixer = false;
  let neck = false;

  // --- load 3d async
  const assets = load();
  assets.then((data) => {
    console.log(data.animations);

    // traversing the model and applying the textures
    data.robot.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial();
        child.material.map = data.texture;
      }

      if (child.isBone) {
        // console.log(child.name === 'bb_neck');
        if (child.name === 'bb_neck') neck = child;
      }
    });

    data.robot.position.y = -1;
    scene.add(data.robot);

    // ------------------ add mixer
    mixer = new THREE.AnimationMixer(data.robot);
    const action = mixer.clipAction(data.animations[1]);
    action.play();

    // setTimeout(() => {
    //   action.fadeOut(1);
    // }, 1000);
  });

  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    // ------------------ animate
    if (mixer) {
      mixer.update(clock.getDelta() * 0.5);
    }

    // ------------------ bone animation
    // if (neck) {
    //   neck.rotation.z = Math.sin(Date.now() * 0.001) * 0.5;
    // }

    renderer.render(scene, camera);
  }

  animate();
}

/* Loader Functions */
async function load() {
  const { robot, animations } = await loadModel(
    'https://uploads-ssl.webflow.com/64102f194260e3387db26189/6447ad40be53baeeff9b8cb8_robot.v4.glb.txt'
  );

  const texture = await loadTexture(
    'https://uploads-ssl.webflow.com/64102f194260e3387db26189/6410867a42a4acda86412cc4_robot-texture.png'
  );

  return { robot, animations, texture };
}

const textureLoader = new TextureLoader();
const modelLoader = new GLTFLoader();

function loadTexture(url) {
  return new Promise((resolve) => {
    textureLoader.load(url, (data) => {
      data.needsUpdate = true;
      data.flipY = false;

      resolve(data);
    });
  });
}

function loadModel(url, id) {
  return new Promise((resolve, reject) => {
    modelLoader.load(url, (gltf) => {
      const robot = gltf.scene;
      const animations = gltf.animations;

      resolve({ robot, animations });
    });
  });
}
