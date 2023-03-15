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
  const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);

  // add controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;

  camera.position.z = 3;

  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();

  // --- load 3d async
  const assets = load();
  assets.then((data) => {
    console.log(data, data.robot);

    data.robot.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial();
        child.material.map = data.texture;
      }
    });

    data.robot.position.y = -1;
    scene.add(data.robot);
  });
}

/* Loader Functions */
async function load() {
  const robot = await loadModel(
    'https://uploads-ssl.webflow.com/64102f194260e3387db26189/64108688b73a86e15101dad4_robot.glb.txt'
  );

  const texture = await loadTexture(
    'https://uploads-ssl.webflow.com/64102f194260e3387db26189/6410867a42a4acda86412cc4_robot-texture.png'
  );

  return { robot, texture };
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
      const result = gltf.scene;
      resolve(result);
    });
  });
}
