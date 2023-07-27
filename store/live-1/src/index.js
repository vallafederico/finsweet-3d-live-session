import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TextureLoader } from 'three';

window.Webflow ||= [];
window.Webflow.push(() => {
  // console.log('hello');
  init3D();
});

// Init Function
function init3D() {
  const viewport = document.querySelector('[data-3d="c"]');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  viewport.appendChild(renderer.domElement);

  camera.position.z = 1.5;

  // add controls
  // const controls = new OrbitControls(camera, renderer.domElement);
  const controls = new OrbitControls(camera, renderer.domElement);

  const mouse = {
    x: 0,
    y: 0,
  };

  // --- event listeners
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  function addLight() {
    const ambLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(1, 1, 0.5);
    scene.add(dirLight);

    return {
      ambLight,
      dirLight,
    };
  }

  const { dirLight } = addLight();

  function animate() {
    requestAnimationFrame(animate);
    controls.update();

    // dirLight.position.x = mouse.x * 1;
    // dirLight.position.y = mouse.y * 1;

    scene.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();

  // --- load 3d async
  const ob = {
    // cap: null,
    // mug: null,
    // shirt: null,
  };

  const assets = load();
  assets.then((data) => {
    const objects = data.objects.scene;

    objects.traverse((child) => {
      if (child.isMesh) {
        // console.log(child.name);

        if (child.name === 'tshirt') {
          ob.shirt = child;
        }
        if (child.name === 'cap') {
          ob.cap = child;
          ob.cap.visible = false;
        }
        if (child.name === 'mug') {
          ob.mug = child;
          ob.mug.visible = false;
        }
      }
    });

    // scene.add(objects);
    setUpObjects(data.texture);
    initStore();
  });

  //  ----------------- Store Functionality
  function setUpObjects(texture) {
    // shirt
    console.log(ob.shirt);
    const shirtGroup = new THREE.Group();
    shirtGroup.add(ob.shirt.clone(), ob.shirt);
    ob.shirt = shirtGroup;

    ob.shirt.children[0].scale.set(0.999, 0.999, 0.999);
    ob.shirt.children[0].material = new THREE.MeshStandardMaterial({
      color: 0xffff00,
    });
    ob.shirt.children[1].material = new THREE.MeshStandardMaterial({
      map: texture,
      transparent: false,
    });

    scene.add(ob.shirt);
  }

  function initStore() {
    // console.log(ob);
    const navItems = document.querySelectorAll('[data-3d-nav]');
    const shirts = document.querySelectorAll('[data-3d-shirt]');
    // console.log(shirts);

    function onPrintClicked() {}

    shirts.forEach((shirt, i) => {
      const trigger = shirt.parentElement;
      const image = shirt.src;
      const color = shirt.getAttribute('data-3d-shirt');
      // console.log({ trigger, image, color });

      trigger.onclick = () => changeShirt(image, color);
    });
  }

  async function changeShirt(image, color) {
    // console.log(color);

    if (!image) return;
    // console.log(image);
    const texture = await loadTexture(image);
    ob.shirt.children[0].material.color = new THREE.Color(`rgba(${color}, 1)`);
    ob.shirt.children[1].material.map = texture;

    console.log('clicked', image, color);
  }
}

/* ------------------------ Loader Functions */
async function load() {
  const objects = await loadModel(
    'https://uploads-ssl.webflow.com/64c22eaf819bcb8bbe43c9bb/64c26976f77ac73a277ce3c4_store-3d-full.glb.txt'
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

/* DOM

0. Modification to existing files
  new tshirt model
  better UVs
  show figma for texture


1. How is the Dom setup?
data-3d-nav
cap | tshirt | mug

data-3d-shirt
COLOR 
src

2. Import new model with all 3 items
    fix the remaining UVs (other model)
    zero the origin of all the models
    import as .txt
    talk about hiding and showing
    store them in a variable
    hide all but the shirt

3. setup javascript system
  use the DOM setup


*/
