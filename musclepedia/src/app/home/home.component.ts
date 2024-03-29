/*
import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

declare const display3DModel: () => void;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    display3DModel();
  }
}
*/
import { Component, OnInit } from "@angular/core";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.loadModel();
  }

  loadModel() {
    const filePath = "./body_model/body_model.glb"; // Specify the file path
    const canvas = <HTMLCanvasElement>document.getElementById("c");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const fov = 45;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 10, 20);

    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 5, 0);
    controls.update();

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("black");

    const loader = new GLTFLoader();
    loader.load(
      filePath,
      (gltf) => {
        const root = gltf.scene;
        scene.add(root);
        const box = new THREE.Box3().setFromObject(root);
        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());
        frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
        controls.maxDistance = boxSize * 10;
        controls.target.copy(boxCenter);
        controls.update();
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );

    function frameArea(
      sizeToFitOnScreen: number,
      boxSize: number,
      boxCenter: THREE.Vector3Like,
      camera: THREE.PerspectiveCamera
    ) {
      const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
      const halfFovY = THREE.MathUtils.degToRad(camera.fov * 0.5);
      const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
      const direction = new THREE.Vector3()
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();

      camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));
      camera.near = boxSize / 100;
      camera.far = boxSize * 100;
      camera.updateProjectionMatrix();
      camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
    }

    function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
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
