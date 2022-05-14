import { useFrame, useThree } from "@react-three/fiber ";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

export const Watermelon = ({ index, z }) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/melone-v3-transformed.glb");

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
    <group rotation={[-Math.PI / 2, 0, -Math.PI]} ref={ref}>
      <mesh
        geometry={nodes.Object_0.geometry}
        material={materials.Bottom_textured_2}
      />
      <mesh
        geometry={nodes.Object_0_1.geometry}
        material={materials.Watermelone_inside_textured_2}
      />
      <mesh geometry={nodes.Object_0_3.geometry} material={materials.bliks} />
      <mesh
        geometry={nodes.Object_0_4.geometry}
        material={materials.bliks_outline}
      />
      <mesh
        geometry={nodes.Object_0_5.geometry}
        material={materials.bottom_outline}
      />
      <mesh
        geometry={nodes.Object_0_6.geometry}
        material={materials.inside_bottom}
      />
      <mesh
        geometry={nodes.Object_0_7.geometry}
        material={materials.red_outline}
      />
      <mesh geometry={nodes.Object_0_9.geometry} material={materials.white} />
    </group>
  );
};
