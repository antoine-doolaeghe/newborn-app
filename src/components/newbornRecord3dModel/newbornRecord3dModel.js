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
      this.camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);

      this.controls = new OrbitControls(this.camera);
      // ADD RENDERER
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setClearColor("#000000");
      this.renderer.setSize(width, height);
      this.mount.appendChild(this.renderer.domElement);
      // ADD CUBE
      this.props.newbornModelInfo.cellPositions.forEach(position => {
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({
          color: "#433F81"
        });
        const child = new THREE.Mesh(geometry, material);
        this.scene.add(child);
        child.position.set(position[0] * 2, position[1] * 2, position[2] * 2);
      });
      this.camera.position.set(
        this.props.newbornModelInfo.cellPositions[0][0],
        this.props.newbornModelInfo.cellPositions[0][1],
        this.props.newbornModelInfo.cellPositions[0][2]
      );
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
    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;
    this.renderScene();
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
