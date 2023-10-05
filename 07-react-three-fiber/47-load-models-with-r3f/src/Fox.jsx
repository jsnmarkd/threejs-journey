import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export default function Fox() {
  const fox = useGLTF("./Fox/glTF/Fox.gltf");
  const animations = useAnimations(fox.animations, fox.scene);
  console.log(animations);

  useEffect(() => {
    const action = animations.actions.Run;
    action.play();
  },[]);

  return (
    <primitive
      object={fox.scene}
      scale={0.02}
      position={[-2.5, 0, 2.5]}
      rotation-y={0.3}
    />
  );
}
