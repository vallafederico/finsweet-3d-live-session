# Session 1 Notes

## Canvas Setup in Webflow

- 3d happens inside of a `<canvas>`
  - Threejs adds that automatically, you only need to select a div that will have the canvas appended to it. we’re using `data-3d="c"`

```html
<style>
  [data-3d="c"] {
    // border: 5px solid red;

    width: 100vw;
    height: 100vh;
    padding: 0px;
    margin: 0px;
    position: fixed;
    box-sizing: border-box;
  }
</style>

<div data-3d="c"></div>
```

## Renderer, Scene and Camera

```jsx
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

## Creating a 3d Object (mesh)

```jsx
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

## Rendering in a loop

```jsx
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
```

## Adding Controls
