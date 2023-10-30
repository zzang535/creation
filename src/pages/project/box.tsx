import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene, Camera, Renderer 초기화
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    canvasRef.current.appendChild(renderer.domElement);

    // 큐브 생성
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // 큐브 회전 애니메이션 함수
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    // 시작!
    animate();

    // 리사이즈 이벤트에 대응하여 화면 크기 조정
    window.addEventListener("resize", () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    });

    // 컴포넌트 unmount시 리소스 정리
    return () => {
      // renderer.dispose();
      // scene.dispose();
      // geometry.dispose();
      // material.dispose();
      // window.removeEventListener("resize");
    };
  }, []);

  return (
    <>
      <Header />
      <div ref={canvasRef} style={{ width: "100%", height: "70vh" }}></div>
    </>
  );
};

export default Home;
