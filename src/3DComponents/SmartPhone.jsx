import { useFrame, useThree } from "@react-three/fiber ";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

export const SmartPhone = ({ index, z }) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/smartphone-transformed.glb");

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
    <group
      position={[22.5, -1.24, 7.08]}
      rotation={[-Math.PI, 0, 0]}
      ref={ref}
      scale={0.1}
    >
      <mesh
        geometry={nodes.smartphone_1.geometry}
        material={materials.Camara}
      />
      <mesh
        geometry={nodes.smartphone_2.geometry}
        material={materials.Metal_Cromado}
      />
      <mesh
        geometry={nodes.smartphone_3.geometry}
        material={materials.Vidrio_Negro}
      />
      <mesh
        geometry={nodes.smartphone_4.geometry}
        material={materials.Pantalla}
      />
      <mesh
        geometry={nodes.smartphone_5.geometry}
        material={materials.Metal_Negro}
      />
      <mesh
        geometry={nodes.smartphone_6.geometry}
        material={materials.Luz_Led}
      />
      <mesh
        geometry={nodes.smartphone_7.geometry}
        material={materials.Metal_Ceramico}
      />
      <mesh geometry={nodes.smartphone_8.geometry} material={materials.Cobre} />
    </group>
  );
};
