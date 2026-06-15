import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useProjectStore } from "../stores/useProjectStore.js";
import Modal from "../components/Modal";

const ParkModel = () => {
  const model = useGLTF("/models/portfolio.glb");

  const clickable = [
    "67_1",
    "tungtungtungsahur",
    "TralaleloTralala_1",
    "Junimo",
    "Junimo001",
    "Junimo002",
    "Junimo003",
    "Poro001_1",
    "Poro002_1",
    "Poro003_1",
    "Poro004_1",
    "Poro005",
    "Dog_1",
    "chest",
    "Plane_63", // Book
  ];

  const projects = [
    "Plane021", // project 1
    "Plane020", // project 2
    "Plane018", // project 3
  ];

  const { selectedProject, openProject, closeProject } = useProjectStore();

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <primitive
      object={model.scene}
      onClick={(e) => {
        if (
          (e.object.name === "Plane" || e.object.name === "Plane_1") &&
          selectedProject
        )
          closeProject();
        if (projects.includes(e.object.name) && !selectedProject)
          openProject(e.object.name);
      }}
    />
  );
};

function Park() {
  const { isStartMenuDisplayed, isMuted, isNight, toggleMute, toggleNight } =
    useProjectStore();

  const bgMusicRef = useRef(null);

  useEffect(() => {
    bgMusicRef.current = new Audio("/sfx/background-music.mp3");
    bgMusicRef.current.loop = true;
    bgMusicRef.current.volume = 0.7;
  }, []);

  useEffect(() => {
    const bgMusic = bgMusicRef.current;

    if (!isStartMenuDisplayed && !isMuted) {
      bgMusic.play();
    } else {
      bgMusic.pause();
    }
  }, [isStartMenuDisplayed, isMuted]);

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [98, 36, -96], fov: 50 }}
        gl={{
          antialias: true,
          shadowMapType: THREE.PCFSoftShadowMap,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        style={{
          height: "100vh",
          width: "100vw",
          background: "grey",
        }}
      >
        <directionalLight
          castShadow
          position={[200, 300, 100]}
          intensity={1.6}
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-left={-200}
          shadow-camera-right={200}
          shadow-camera-top={200}
          shadow-camera-bottom={-200}
          shadow-bias={-0.0002}
          shadow-normalBias={0.2}
          shadow-radius={5}
        />
        <ambientLight intensity={0.2} />
        <hemisphereLight groundColor={"#74C365"} intensity={1} />
        <OrbitControls
          target={[50, -15, -60]}
          // enableZoom={false}
          // enableRotate={false}
        />
        <ParkModel />
      </Canvas>

      <Modal />

      <div className="action-btn">
        <button className="sound-btn" onClick={toggleMute}>
          <img
            src={
              isMuted
                ? "/icon/volume-mute-line.svg"
                : "/icon/volume-down-line.svg"
            }
            alt=""
          />
        </button>
        <button className="light-btn" onClick={toggleNight}>
          <img
            src={isNight ? "/icon/moon-line.svg" : "/icon/sun-line.svg"}
            alt=""
          />
        </button>
      </div>
    </>
  );
}

export default Park;
