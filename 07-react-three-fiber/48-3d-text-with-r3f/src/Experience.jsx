import {
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Experience() {
  const [torusGeometry, setTorusGeometry] = useState();
  const [material, setMaterial] = useState();

  const donuts = useRef([]);

  const [matcapTexture] = useMatcapTexture("85B9D3_C9EAF9_417277_528789", 256);

  useFrame((_, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <torusGeometry ref={setTorusGeometry} args={[1, 0.6, 16, 32]} />
      <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture} />

      <Center>
        <Text3D
          material={material}
          font={"./fonts/helvetiker_regular.typeface.json"}
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          DONUTS
        </Text3D>
      </Center>


        {[...Array(100)].map((_, index) => (
          <mesh
            ref={ (element) => donuts.current[index] = element }
            key={index}
            geometry={torusGeometry}
            material={material}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            scale={0.2 + Math.random() * 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          />
        ))}

    </>
  );
}
