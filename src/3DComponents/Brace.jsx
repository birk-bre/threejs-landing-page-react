import { useFrame, useThree } from "@react-three/fiber ";
import { Detailed, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

export const Brace = ({ index, z }) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/brace-transformed.glb");
  const [hover, setHover] = useState(false);
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
    spin: THREE.MathUtils.randFloat(8, 12),
    scale: 1,
  });

  if (ref.current) console.log(ref.current);

  useFrame((state, dt) => {
    if (dt < 0.1)
      ref.current.position.set(
        index === 0 ? 0 : data.x * width,
        (data.y += dt * 1),
        -z
      );

    if (hover) {
      if (data.scale < 4) {
        ref.current.children[0].scale.set(
          (data.scale += dt * 0.2),
          (data.scale += dt * 0.2),
          (data.scale += dt * 0.2)
        );
      }
    }

    ref.current.rotation.set(
      (data.rX += dt / data.spin),
      Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI,
      (data.rZ += dt / data.spin)
    );

    if (data.y > height * (index === 0 ? 4 : 1))
      data.y = -(height * (index === 0 ? 4 : 1));
  });

  return (
    <Detailed distances={[0, 0, 80]} ref={ref} scale={2.5}>
      <group>
        <mesh
          geometry={nodes.brace.geometry}
          material={materials["Material.002"]}
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
        >
          <meshStandardMaterial
            color={
              hover
                ? "orange"
                : "#" + Math.floor(Math.random() * 16777215).toString(16)
            }
          />
        </mesh>
      </group>
    </Detailed>
  );
};
