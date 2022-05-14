import { useFrame, useThree } from "@react-three/fiber ";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

export const Nokia = ({ index, z }) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/nokia-v1-transformed.glb");

  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    spin: THREE.MathUtils.randFloat(8, 12),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state, dt) => {
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * 1),
        -z
      );

    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin)
    );

    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });

  return (
    <mesh
      ref={ref}
      geometry={nodes.nokia.geometry}
      material={materials.Low_poly}
      rotation={[-1.57, -0.01, -3.13]}
    />
  );
};
