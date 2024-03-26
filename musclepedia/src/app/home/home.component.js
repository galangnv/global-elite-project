// Import 3JS
// Allows camera to move
// To allows import of .gltf files
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

export function display3DModel() {
    const scene = new THREE.Scene();
    //create a new camera with positions and angles
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    //Keep track of the mouse position
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let object;
    let controls;
    let objToRender = 'body';

    const loader = new GLTFLoader();

    loader.load(
        '/body_model/scene.gltf',
    function (gltf) {
        object = gltf.scene;
        scene.add(object);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.error(error);
    }
    );

    //Alpha: true allows for the transparent background
    const renderer = new THREE.WebGLRenderer({ alpha: true }); 
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById("container3D").appendChild(renderer.domElement);

    //Set how far the camera will be from the 3D model
    camera.position.z = objToRender === "body" ? 25 : 500;

    //Add lights to the scene, so we can actually see the 3D model
    const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
    topLight.position.set(500, 500, 500) //top-left-ish
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "body" ? 5 : 1);
    scene.add(ambientLight);

    //This adds controls to the camera, so we can rotate / zoom it with the mouse
    if (objToRender === "body") {
    controls = new OrbitControls(camera, renderer.domElement);
    }

    //Render the scene
    function animate() {
    requestAnimationFrame(animate);

    //Make the body move
    if (object && objToRender === "body") {
        object.rotation.y = -3 + mouseX / window.innerWidth * 3;
        object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
    }
    renderer.render(scene, camera);
    }

    //Add a listener to the window, so we can resize the window and the camera
    window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    });

    //add mouse position listener
    document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    }

    console.log('Displaying 3D model...');
    animate();
}