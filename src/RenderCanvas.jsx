import { Canvas } from "@react-three/fiber ";
import { Environment } from "@react-three/drei";
import { Brace } from "./3DComponents/Brace";
import { Bracket } from "./3DComponents/Bracket";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

const RenderCanvas = ({ count = 200, depth = 80 }) => {
  return (
    <Canvas
      shadows
      gl={{ alpha: false, antialias: false }}
      position={[0, 0, 10]}
      camera={{ near: 0.01, far: 110, fov: 40 }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={["#FFF"]} />
      <Environment preset="forest" />
      <spotLight position={[10, 10, 10]} penumbra={1} intensity={2} />

      {Array.from({ length: count }, (_, i) =>
        i % 2 === 0 ? (
          <Brace key={i} index={i} z={(i / count) * depth + 20} />
        ) : (
          <Bracket key={i} index={i} z={(i / count) * depth + 20} />
        )
      )}

      <EffectComposer>
        <DepthOfField
          target={[0, 0, 50]}
          focalLength={1.5}
          bokehScale={10}
          height={700}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default RenderCanvas;
