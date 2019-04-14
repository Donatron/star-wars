import React, { Component } from "react";
import * as PIXI from "pixi.js";
import star from "../../assets/img/star.png";

import "../Loader/loader.css";

class Loader extends Component {
  constructor(props) {
    super(props);

    this.app = PIXI.Application;
    this.gameCanvas = document.querySelector("#loader");
  }

  componentDidMount() {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x000000,
      autoResize: true,
      resolution: devicePixelRatio
    });
    this.gameCanvas.appendChild(this.app.view);
    this.app.start();

    const starTexture = PIXI.Texture.from(star);

    const starAmount = 10000;
    let cameraZ = 0;
    const fov = 20;
    const baseSpeed = 0.025;
    let speed = 0;
    let warpSpeed = 1;
    const starStretch = 5;
    const starBaseSize = 0.05;

    const stars = [];
    for (let i = 0; i < starAmount; i++) {
      const star = {
        sprite: new PIXI.Sprite(starTexture),
        z: 0,
        x: 0,
        y: 0
      };
      star.sprite.anchor.x = 0.5;
      star.sprite.anchor.y = 0.7;
      this.randomizeStar(star, true);
      this.app.stage.addChild(star.sprite);
      stars.push(star);
    }

    this.app.ticker.add(delta => {
      speed += (warpSpeed - speed) / 10;
      cameraZ += delta * 5 * (speed + baseSpeed);

      for (let i = 0; i < starAmount; i++) {
        const star = stars[i];
        if (star.z < cameraZ) this.randomizeStar(star);

        const z = star.z - cameraZ;
        star.sprite.x =
          star.x * (fov / z) * this.app.renderer.screen.width +
          this.app.renderer.screen.width / 2;
        star.sprite.y =
          star.y * (fov / z) * this.app.renderer.screen.width +
          this.app.renderer.screen.width / 2;

        const dxCenter = star.sprite.x - this.app.renderer.screen.width / 2;
        const dyCenter = star.sprite.y - this.app.renderer.screen.width / 2;
        const distanceCenter = Math.sqrt(
          dxCenter * dxCenter + dyCenter + dyCenter
        );
        const distanceScale = Math.max(0, (2000 - z) / 2000);
        star.sprite.scale.x = distanceScale * starBaseSize;
        star.sprite.scale.y =
          distanceScale * starBaseSize +
          (distanceScale * speed * starStretch * distanceCenter) /
            this.app.renderer.screen.width;
        star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
      }
    });

    window.addEventListener("resize", this.resize);
  }

  resize = () => {
    this.app.renderer.resize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  randomizeStar = (star, initial) => {
    star.z = initial
      ? Math.random() * 2000
      : this.cameraZ + Math.random() * 1000 + 2000;

    const deg = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 1;
    star.x = Math.cos(deg) * distance;
    star.y = Math.sin(deg) * distance;
  };

  componentWillUnmount() {
    const loader = document.querySelector("#loader canvas");
    loader.parentNode.removeChild(loader);
    this.app.stop();
  }

  render() {
    return <div />;
  }
}

export default Loader;
