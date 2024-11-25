import * as THREE from "three"//Imports the core Three.js library to handle 3D graphics.
import './styles/index.css' //stylesheet used for custom styles for canvas and body
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls" //A Three.js helper for adding mouse-based controls (rotate, zoom, pan) for 3D scenes.
import gsap from "gsap"; //animation library for moving object
import { Scene } from "three"; //A scene is like a container for all the 3D objects

// Scene
const scene = new THREE.Scene();

// Create a sphere

const geometry = new THREE.SphereGeometry(7, 50, 50);//radius,horizontal and verticle segments
const material = new THREE.MeshStandardMaterial({ color:0x00ff00F});//Defines the material fot the 3d object,physically-based material that reacts to light.
const mesh = new THREE.Mesh(geometry, material);//Combines the geometry and material to create a 3D object.
scene.add(mesh);//Adds the 3D object to the scene.

// canvas and Size set up
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight//Stores the current window dimensions 
}

// Light
const light = new THREE.PointLight(0x00ff00F, 1, 100);//is a light that gets emitted from a single point in all directions.
light.position.set(0, 9, 10);//Sets the light position in 3D space (x, y, z coordinates)
light.intensity = 100;
scene.add(light);//Adds the light to the scene

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
camera.position.z = 20;
scene.add(camera);

// Scene Rendering
const canvas = document.getElementById('canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
//renderer.setAnimationLoop( animate );
renderer.setPixelRatio(2);
renderer.render(scene, camera);
renderer.setClearColor("#331d5d");

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 3;

// Resize
window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);

})
//Animation Loop
const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
}
loop();


/*function animate() {

	cube.rotation.x += 0.04;
	cube.rotation.y += 0.04;

	renderer.render( scene, camera );

}*/
//Gsap Animation
// Timeline

const tl = gsap.timeline({ defaults: { duration: 2 } });
tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });

// Animating texts

gsap.from(".heroSection", { bottom: -400, opacity: 0, duration: 1.5 });





