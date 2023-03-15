import * as THREE from 'three';
import Tween from 'gsap';

export class Slide extends THREE.Group {
  constructor(item) {
    super();
    this.item = item;

    this.init();
  }

  animateIn() {}

  init() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.add(mesh);
  }

  render(t) {
    const scale = 1 + Math.sin(t) * 0.2;
    this.scale.set(scale, scale, scale);
  }
}

/** Slide 1 — 3D in Webflow AKA INTRO*/
class Slide1 extends Slide {
  constructor() {
    super();
  }

  render(t) {
    const scale = 1 + Math.sin(t) * 0.2;
    this.rotation.y = scale;
    this.rotation.x = t * 0.5;
    this.rotation.z = t * 0.25;
    this.scale.set(scale, scale, scale);
  }
}

/** Slide 2 — What is 3D?  (in general) */
class Slide2 extends Slide {
  constructor() {
    super();
  }

  init() {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshNormalMaterial();
    material.wireframe = true;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(2, 2, 2);
    this.add(mesh);
  }

  render(t) {
    const scale = 1 + Math.sin(t) * 0.2;
    this.rotation.y = t;
  }
}

/** Slide 3 — What is 3D? (in browser)*/
class Slide3 extends Slide {
  constructor() {
    super();
  }

  init() {
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshNormalMaterial();
    // const mesh = new THREE.Mesh(geometry, material);

    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.meshes = num.map((item) => {
      const ms = this.createCube();
      ms.scale.set(0.2, 0.2, 0.2);
      ms.position.x = Math.random() * 2 - 1;
      ms.position.y = Math.random() * 2 - 1;
      ms.position.z = Math.random() * 2 - 1;
      this.add(ms);
      return ms;
    });
  }

  createCube() {
    return new THREE.Mesh(new THREE.IcosahedronGeometry(), new THREE.MeshNormalMaterial());
  }

  render(t) {
    // const scale = 1 + Math.sin(t) * 0.2;
    this.rotation.y = -t;
    this.meshes.forEach((element) => {
      element.rotation.x = t;
      element.rotation.z = -t;
    });
  }
}

/** Slide 4 — How Does it Work*/
class Slide4 extends Slide {
  constructor(item) {
    super();
    this.item = item;
    this.item.onclick = () => {
      let target;
      if (this.scale.z > 0.5) {
        target = 0.001;
      } else {
        target = 1;
      }
      Tween.to(this.scale, {
        z: target,
        duration: 1,
        ease: 'bounce.out',
      });
    };
  }

  init() {
    const geometry = new THREE.IcosahedronGeometry();
    const material = new THREE.MeshNormalMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    this.add(mesh);

    const axesHelper = new THREE.AxesHelper(2);
    this.add(axesHelper);
  }

  render(t) {
    // this.rotation.y = t;
    // const scale = Math.abs(Math.sin(t));
    // this.scale.z = scale;
  }
}

/** Slide 5 — Yeah, but how (world, objects)*/
class Slide5 extends Slide {
  constructor(item) {
    super();
    this.item = item;

    this.item.onclick = () => {
      Tween.to(this.cube.rotation, {
        y: this.cube.rotation.y + Math.PI * 2,
        duration: 2,
        ease: 'expo.out',
      });
    };

    // console.log(window.presentation);
  }

  init() {
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    const material = new THREE.MeshNormalMaterial();
    material.side = THREE.BackSide;
    this.room = new THREE.Mesh(geometry, material);

    this.add(this.room);

    const geometry2 = new THREE.BoxGeometry(1, 1, 1);
    const material2 = new THREE.MeshNormalMaterial();
    this.cube = new THREE.Mesh(geometry2, material2);
    this.cube.scale.set(0, 0, 0);
    this.add(this.cube);

    this.scale.set(0, 0, 0);
  }

  render(t) {
    // const scale = 1 + Math.sin(t) * 0.2;
    // this.rotation.y = t;
    // this.rotation.x = t * 0.5;
    // this.rotation.z = t * 0.25;
    // this.scale.set(scale, scale, scale);
  }

  animateIn() {
    console.log('hello');

    window.ctrl.orbit.reset();

    Tween.to(this.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 1.2,
      ease: 'expo.out',
      onComplete: () => {
        this.cube.scale.set(1, 1, 1);
      },
    });

    Tween.to(this.rotation, {
      y: Math.PI * 2,
      duration: 1.2,
      ease: 'expo.out',
    });
  }
}

/** Slide 6 — The World*/
class Slide6 extends Slide {
  constructor() {
    super();

    // console.log(window.presentation);
  }

  init() {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshNormalMaterial();
    material.side = THREE.BackSide;
    this.room = new THREE.Mesh(geometry, material);
    this.add(this.room);

    const axesHelper = new THREE.AxesHelper(2);
    // axesHelper.position.set(-1, -1, 0);
    this.add(axesHelper);
  }

  render(t) {
    // const scale = 1 + Math.sin(t) * 0.2;
    this.rotation.y = t * 0.3;
    // this.room.rotation.z = t * 0.6;
    // this.rotation.x = t * 0.5;
    // this.rotation.z = t * 0.25;
    // this.scale.set(scale, scale, scale);
  }

  animateIn() {
    // window.ctrl.orbit.reset();
  }
}
/** Slide 7 — The Objects*/
class Slide7 extends Slide {
  constructor() {
    super();

    // console.log(window.presentation);
  }

  init() {
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshNormalMaterial();
    material.flatShading = true;
    const torusKnot = new THREE.Mesh(geometry, material);
    torusKnot.scale.set(0.1, 0.1, 0.1);
    this.add(torusKnot);
  }

  render(t) {
    // const scale = 1 + Math.sin(t) * 0.2;
    this.rotation.y = t * 0.3;
    // this.room.rotation.z = t * 0.6;
    // this.rotation.x = t * 0.5;
    // this.rotation.z = t * 0.25;
    // this.scale.set(scale, scale, scale);
  }

  animateIn() {
    // window.ctrl.orbit.reset();
  }
}
/** Slide 9 — Whyn is important*/
/** Slide 10 — We'll need*/
/** Slide 11 — We'll need - renderer + camera: scene*/
/** Slide 12 — We'll need - geometry*/
/** Slide 13 — We'll need - material = mesh*/
/** Slide 14 — Now we actually do it*/

/** -- Export */
export const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

/*

const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );
*/
