import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TextureLoader } from 'three';
import gsap from 'gsap';

// live: https://sweet-merch-b19b823dbb1e4ce5f33d6fba13d.webflow.io/backup
// project: https://webflow.com/design/sweet-merch-b19b823dbb1e4ce5f33d6fba13d?pageId=64c29097f97d5b1fd37394c0

window.Webflow ||= [];
window.Webflow.push(() => {
  // console.log('hello');
  init3D();
});

// Init Function
function init3D() {
  const viewport = document.querySelector('[data-3d="c"]');

  // create scened and renderer and camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  viewport.appendChild(renderer.domElement);

  // add controls
  const controls = new OrbitControls(camera, renderer.domElement);
  // const controls = new OrbitControls(camera, document.body);

  camera.position.z = 1.5;

  // declaring the bone ouside the load
  let neckBone = null;

  let clock = new THREE.Clock();
  let mixer = null;

  const mouse = {
    x: 0,
    y: 0,
  };

  // --- event listeners
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    // console.log(mouse.x);
  });

  // adding lights but declaring them outside the function so we can access them everywhere
  let dirLight;

  function addLight() {
    const ambLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambLight);

    dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(1, 1, 0.5);
    scene.add(dirLight);
  }

  addLight();

  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    dirLight.position.x = mouse.x * 1;
    dirLight.position.y = mouse.y * 1;

    if (ob.tshirt) ob.tshirt.rotation.y += 0.01;
    if (ob.mug) ob.mug.rotation.y += 0.01;
    if (ob.cap) ob.cap.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  const ob = {
    tshirt: null,
    cap: null,
    mug: null,
  };
  animate();

  // --- load 3d async
  const assets = load();
  assets.then((data) => {
    const objects = data.objects.scene;
    // const animations = data.objects.animations;

    // console.log(objects);
    // tshirt cap mug

    objects.traverse((child) => {
      if (child.isMesh) {
        if (child.name === 'tshirt') {
          ob.tshirt = child;
          ob.tshirt.visible = false;
        } else if (child.name === 'cap') {
          ob.cap = child;
          ob.cap.visible = false;
          // ob.cap.position.x = 2;
        } else if (child.name === 'mug') {
          ob.mug = child;
          ob.mug.visible = false;
          // ob.mug.position.x = -2;
        }

        child.material = new THREE.MeshStandardMaterial({
          // color: 0x000000,
          transparent: true,
        });

        child.material.map = data.texture;
      }
    });

    initStore();

    scene.add(objects);
  });

  // ----------- Store Setup

  async function initStore() {
    const shirts = [...document.querySelectorAll('[data-3d-shirt]')];
    const caps = [...document.querySelectorAll('[data-3d-cap]')];
    const mugs = [...document.querySelectorAll('[data-3d-mug]')];
    // console.log('caps', caps);

    mugs.forEach((mug, i) => {
      const image = mug.src;
      const color = mug.getAttribute('data-3d-shirt');
      const trigger = mug.parentElement;
      // console.log(image, color, trigger);
      if (i === 0) changeMug(image, color);

      trigger.onclick = () => changeMug(image, color);
    });

    shirts.forEach((shirt, i) => {
      const image = shirt.src;
      const color = shirt.getAttribute('data-3d-shirt');
      const trigger = shirt.parentElement;
      // console.log(image, color, trigger);
      if (i === 0) changeShirt(image, color);

      trigger.onclick = () => changeShirt(image, color);
    });

    caps.forEach((cap, i) => {
      const image = cap.src;
      const color = cap.getAttribute('data-3d-shirt');
      const trigger = cap.parentElement;
      // console.log(image, color, trigger);
      if (i === 0) changeShirt(image, color);

      trigger.onclick = () => changeCap(image, color);
    });

    // ------- Listen to the different NAV items
    const navItems = [...document.querySelectorAll('[data-3d-nav]')];
    // console.log(navItems);

    navItems.forEach((item) => {
      item.onclick = () => {
        const name = item.getAttribute('data-3d-nav');
        console.log(name);

        if (name === 'tshirt') {
          ob.tshirt.visible = true;
          ob.cap.visible = false;
          ob.mug.visible = false;
        } else if (name === 'cap') {
          ob.tshirt.visible = false;
          ob.cap.visible = true;
          ob.mug.visible = false;
        } else if (name === 'mug') {
          ob.tshirt.visible = false;
          ob.cap.visible = false;
          ob.mug.visible = true;
        }
      };
    });
  }

  async function changeMug(image, color) {
    const texture = await loadTexture(image);
    ob.mug.material.map = texture;

    ob.mug.visible = true;
    // console.log(texture);
  }

  async function changeShirt(image, color) {
    const texture = await loadTexture(image);
    ob.tshirt.material.map = texture;

    ob.tshirt.visible = true;
    // console.log(texture);
  }

  async function changeCap(image, color) {
    const texture = await loadTexture(image);
    ob.cap.material.map = texture;

    ob.cap.visible = true;
    // console.log(texture);
  }
}

/* Loader Functions */
async function load() {
  const objects = await loadModel(
    'https://uploads-ssl.webflow.com/64c29097f97d5b1fd37394c9/64d274f937bae7fd9535eac0_store-3d-tabs.glb.txt'
  );

  const texture = await loadTexture(
    'https://uploads-ssl.webflow.com/649ad5f046bf36eb25e083b0/649add778dc72c708696417a_print1.png'
  );

  return { objects, texture };
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
      // console.log(gltf);
      const scene = gltf.scene;
      const animations = gltf.animations;
      resolve({ scene, animations });
    });
  });
}
