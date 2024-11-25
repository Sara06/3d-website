
//Create a rotating cube
import * as THREE from 'three';//importing 3js library to create to 3D scenes, objects, lighting, cameras, and rendering.

const scene = new THREE.Scene();//Scene is a container for all the 3D objects
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );// field of view,aspect ratio of window,near clipping plane and far clipping plane


//Renderer is used to render the scene using WebGL
const renderer = new THREE.WebGLRenderer();//WebGL responsible for rendering the 3D scene to the screen
renderer.setSize( window.innerWidth, window.innerHeight );//rendering canvas to the dimensions of the browser window.
renderer.setAnimationLoop( animate );//This continuously calls the animate() function to update the scene and render it every frame.
document.body.appendChild( renderer.domElement );//rendering in html


//Creating a cube
const geometry = new THREE.BoxGeometry( 3, 3, 3 );//cube dimension
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );//defines the material of the cube and cube color
const cube = new THREE.Mesh( geometry, material );//Mesh is a combination of geometry and material(cube and green color)
scene.add( cube );//adds the cube to the scene, so it will be rendered.


//Positioning the camera
camera.position.z = 5;

//Animation Function
function animate() {

	cube.rotation.x += 0.02; //rotates the cube x-axis
	cube.rotation.y += 0.02; //rotates the cube y-axis

	renderer.render( scene, camera );

}