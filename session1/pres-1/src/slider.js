import * as THREE from 'three';
import { Slide } from './slide';
import { slides } from './slide';
import Tween from 'gsap';

export class Slider extends THREE.Scene {
  constructor() {
    super();
    this.wrap = document.querySelector('[data-slide="wrap"]');
    this.current = 0;
    // console.log(this.slides, this.slides.length);

    this.factor = 10;
    this.slides = [...this.wrap.children].map((item, index) => {
      //   console.log(slides[index]);
      const slide = slides[index] !== undefined ? new slides[index](item) : new Slide(item);
      //   const slide = new Slide();
      slide.index = index;
      this.add(slide);
      slide.position.x = index * this.factor;
      return slide;
    });

    const arrows = [...document.querySelectorAll('[data-arrow]')];
    arrows[0].addEventListener('click', () => this.prev());
    arrows[1].addEventListener('click', () => this.next());
  }

  next() {
    console.log('+');
    this.current++;
    if (this.current > this.slides.length - 1) {
      this.current = 0;
    }
    this.animate();
  }

  prev() {
    console.log('-');
    this.current--;
    if (this.current < 0) {
      this.current = this.slides.length - 1;
    }
    this.animate();
  }

  animate() {
    if (this.animation) this.animation.kill();
    console.log(this.current);
    this.animation = Tween.to(this.position, {
      x: -this.current * this.factor,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => this.slides[this.current].animateIn(),
    });
  }

  render(t) {
    this.slides.forEach((slide) => {
      slide.render(t);
    });
  }
}
