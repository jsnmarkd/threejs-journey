import * as THREE from 'three';
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";

export default class Experience {
  constructor(canvas) {
    // Global access
    window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene()

    // Sizes resize Event
    this.sizes.on("resize", () => {
      this.resize();
    });

    // Time tick Event
    this.time.on("tick", () => {
      this.update();
    });
  }
  resize() {}
  update() {}
}
