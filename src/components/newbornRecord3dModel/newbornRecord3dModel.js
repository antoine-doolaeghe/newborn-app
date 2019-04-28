import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";
import { NewbornRecord3dModelContainer } from "./newbornRecord3dModel.style";

class NewBornRecord3dModel extends Component {
  componentDidUpdate() {
    if (this.props.newbornModelInfo) {
      const width = this.mount.clientWidth;
      const height = this.mount.clientHeight;
      // ADD SCENE
      this.scene = new THREE.Scene();
      // ADD CAMERA
      this.camera = new THREE.PerspectiveCamera(15, width / height, 1, 10000);
      this.controls = new OrbitControls(this.camera);
      // ADD RENDERER

      // ADD CUBE
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: 0x6c6c6c
      });
      this.props.newbornModelInfo.cellPositions.forEach(position => {
        const child = new THREE.Mesh(geometry, material);
        child.position.set(position[0], position[1], position[2]);
        child.receiveShadow = true;
        this.controls.target = child.position;
        this.scene.add(child);
      });
      this.controls.autoRotate = true;
      this.controls.autoZoom = true;
      this.controls.update();
      const light = new THREE.DirectionalLight(0xdfebff, 1.75);
      light.position.set(300, 400, 50);
      light.position.multiplyScalar(1.3);

      light.castShadow = true;
      light.shadowCameraVisible = true;

      light.shadowMapWidth = 512;
      light.shadowMapHeight = 512;

      const d = 200;

      light.shadowCameraLeft = -d;
      light.shadowCameraRight = d;
      light.shadowCameraTop = d;
      light.shadowCameraBottom = -d;

      light.shadowCameraFar = 1000;
      light.shadowDarkness = 0.2;

      this.scene.add(light);

      this.scene.background = new THREE.Color(0xaaaaaa);

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.shadowMap.enabled = true;
      this.renderer.gammaInput = true;
      this.renderer.gammaOutput = true;
      this.mount.appendChild(this.renderer.domElement);
      this.start();
    }
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    this.renderScene();
    this.controls.update();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <NewbornRecord3dModelContainer
        data-testid="newbornRecord3dModel"
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default NewBornRecord3dModel;
