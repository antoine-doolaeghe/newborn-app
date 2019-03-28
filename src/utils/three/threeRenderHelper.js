import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

const threeRenderHelper = {
  
  renderNewBornModel: (id, color, positions) => {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(3, window.innerWidth / window.innerHeight, 1, 5000);
    let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);

    // ENVIRONMENT
    threeRenderHelper.createNewBornEnvironment(scene, camera, hemiLight);

    // MESH
    threeRenderHelper.createNewBornCellModel(scene, positions, color);

    // SKYDOME
    let renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(280, 200);
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.shadowMap.enabled = true;
    let controls = new OrbitControls(camera, document.getElementById(`cardContentTest${id}`));
    controls.update();

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    document.getElementById(`cardContentTest${id}`).appendChild(renderer.domElement)
  }, 

  createNewBornCellModel: (scene, positions, color) => {
    // MESH
    let initPosition = {
      x: parseInt(positions[0].L[0].S, 10),
      y: parseInt(positions[0].L[1].S, 10),
      z: parseInt(positions[0].L[2].S, 10)
    };

    positions.forEach(element => {
      var geometry = new THREE.SphereGeometry(0.5, 34, 34);

      var material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        roughness: 0.5,
        metalness: 0,
        flatShading: true
      });
      let mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        parseInt(element.L[0].S, 10) - initPosition.x,
        parseInt(element.L[1].S, 10) - initPosition.y,
        parseInt(element.L[2].S - initPosition.z, 10)
      );

      scene.add(mesh);
    });
  },

  createNewBornEnvironment: (scene, camera, hemiLight) => {
    // CAMERA
    camera.position.set(0, 0, 250);
    scene.userData.camera = camera;
    // LIGHTS
    hemiLight.color.setHSL(0.6, 1, 0.6);
    hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);
    scene.background = new THREE.Color('white');
    // DIRECTION LIGHT
    let dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(- 1, 1.75, 1);
    dirLight.position.multiplyScalar(30);
    scene.add(dirLight);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    let d = 50;
    dirLight.shadow.camera.left = - d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = - d;
    dirLight.shadow.camera.far = 3500;
    dirLight.shadow.bias = - 0.0001;
  }
}

export default threeRenderHelper;