import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useHelper,
  // BakeShadows,
  // SoftShadows,
  // AccumulativeShadows,
  // RandomizedLight,
  ContactShadows,
  Sky,
  Environment,
  Lightformer,
  Stage,
} from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";

export default function Experience() {
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  const cube = useRef();

  useFrame((state, delta) => {
    // const time = state.clock.getElapsedTime();
    // cube.current.position.x = 2 + Math.sin(time);
    cube.current.rotation.y += delta * 0.2;
  });

  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#4b2709",
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  const { sunPosition } = useControls("sun", {
    sunPosition: { value: [1, 2, 3] },
  });

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls("environment map", {
      envMapIntensity: { value: 3.5, min: 0, man: 12 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 28, min: 10, max: 100 },
      envMapScale: { value: 100, min: 10, max: 1000 },
    });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <Stage
        shadows={{ type: "contact", opacity: 0.2, blur: 3 }}
        environment={"sunset"}
        preset={"portrait"}
        intensity={2}
      >
        <mesh castShadow position-y={1} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial
            envMapIntensity={envMapIntensity}
            color="orange"
          />
        </mesh>

        <mesh ref={cube} castShadow position-y={1} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial
            envMapIntensity={envMapIntensity}
            color="mediumpurple"
          />
        </mesh>
      </Stage>
    </>
  );
}
