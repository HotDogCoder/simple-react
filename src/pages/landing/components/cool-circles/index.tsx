import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeJSComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let object: THREE.Object3D | null = null;
    let controls: OrbitControls | null = null;
    const objToRender = "eye";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const loader = new GLTFLoader();

    if (!containerRef.current) return;

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 8;

    containerRef.current.appendChild(renderer.domElement);

    const topLight = new THREE.DirectionalLight(0xffffff, 1);
    topLight.position.set(500, 500, 500);
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    if (objToRender === "eye") {
      controls = new OrbitControls(camera, renderer.domElement);
    }

    function animate() {
      requestAnimationFrame(animate);

      if (object && objToRender === "eye") {
        object.rotation.y = -3 + (mouseX / window.innerWidth) * 3;
        object.rotation.x = -1.2 + (mouseY * 2.5) / window.innerHeight;
      }
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    document.onmousemove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    loader.load(
      `models/${objToRender}/scene.gltf`,
      function (gltf) {
        object = gltf.scene;
        scene.add(object);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.error(error);
      }
    );

    animate();

    return () => {
      window.removeEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      document.onmousemove = null;
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeJSComponent;
