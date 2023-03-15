import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Slide } from './slide';
import { Slider } from './slider';

window.Webflow ||= [];
window.Webflow.push(() => {
  init3D();
});

function init3D() {
  let time = 0;
  // get what we need from the DOM
  const viewport = document.querySelector('[data-3d="c"]');
  console.log(viewport);

  window.ctrl = {};
  // create a renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(viewport.clientWidth, viewport.clientHeight);
  renderer.setClearColor(0x000000, 1);
  viewport.appendChild(renderer.domElement);

  // create camera
  const camera = new THREE.PerspectiveCamera(
    75,
    viewport.clientWidth / viewport.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 3;
  window.ctrl.camera = camera;

  // create scene
  const scene = new Slider();

  // create contols
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  window.ctrl.orbit = controls;
  // loop for animation
  const animate = function () {
    requestAnimationFrame(animate);

    controls.update();

    time += 0.02;
    scene.render(time);

    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {
    camera.aspect = viewport.clientWidth / viewport.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(viewport.clientWidth, viewport.clientHeight);
  }
}
