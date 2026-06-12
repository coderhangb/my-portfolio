import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const ParkModel = () => {
  const model = useGLTF("/models/portfolio.glb");

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={model.scene} />;
};

function Park() {
  return (
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
  );
}

export default Park;
