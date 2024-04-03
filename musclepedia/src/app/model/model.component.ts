import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [],
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent implements AfterViewInit {
  storage = getStorage();
  gsRef = ref(this.storage, 'gs://musclepedia-daa3a.appspot.com/myology.glb');
  blob = null;

  constructor() {

  }

  ngAfterViewInit(): void {
    // Initialize Renderer
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#can");
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true }); 
    
    // Initialize Camera
    const fov = 60;
    const aspect = 1;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(1, 0, 0);

    // Initialize Controls
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 1.83, 0);
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minDistance = 1.6;
    controls.maxDistance = 1.6;
    controls.update();

    // Initialize Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#9fc696');
  
    // Set Lighting
    {
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(5, 5, 2);
      scene.add(light);
      scene.add(light.target);
    }

    {
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-5, 5, -2);
      scene.add(light);
      scene.add(light.target);
    }

    {
      var light = new THREE.AmbientLight( 0xffffff, 2 );
      scene.add( light );
    }

    // Load Body Model
    {
      const loader = new GLTFLoader();
      loader.load('assets/myology.glb', (gltf) => {
        const model = gltf.scene;
        model.position.set(0,1,0);
        scene.add(model);
      }, undefined, (error) => {
        console.error('Error loading GLTF: ', error);
      });
    }

    function resizeRendererToDisplaySize(renderer: any) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;

      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    function render() {
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }
}
