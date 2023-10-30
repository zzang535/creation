import { useEffect, useRef } from "react";
import * as THREE from "three";
import { NextPage } from "next";
import Header from "@/components/Header";

const ThreeBox: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

    const fov = 75;
    const aspect = 2; // 기본값; 리사이즈 핸들러에서 업데이트됨
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    const scene = new THREE.Scene();

    {
      const color = 0xffffff;
      const intensity = 3;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
    }

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    function makeInstance(
      geometry: THREE.BoxGeometry,
      color: number,
      x: number
    ) {
      const material = new THREE.MeshPhongMaterial({ color });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      cube.position.x = x;
      return cube;
    }

    const cubes = [
      makeInstance(geometry, 0x44aa88, 0),
      makeInstance(geometry, 0x8844aa, -2),
      makeInstance(geometry, 0xaa8844, 2),
    ];

    function render(time: number) {
      time *= 0.001;

      cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * 0.1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

    function handleResize() {
      if (!canvas) return;
      const newWidth = canvas.clientWidth;
      const newHeight = canvas.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight, false);
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // 초기 크기 설정

    return () => {
      window.removeEventListener("resize", handleResize);
      // 리소스 정리 코드
      geometry.dispose();
      cubes.forEach((cube) => {
        scene.remove(cube);
        cube.geometry.dispose();
        if (Array.isArray(cube.material)) {
          cube.material.forEach((material) => {
            if (material instanceof THREE.Material) material.dispose();
          });
        } else if (cube.material instanceof THREE.Material) {
          cube.material.dispose();
        }
      });
    };
  }, []);

  return (
    <>
      <Header />
      <canvas ref={canvasRef} style={{ width: "100%", height: "100vh" }} />
    </>
  );
};

export default ThreeBox;
