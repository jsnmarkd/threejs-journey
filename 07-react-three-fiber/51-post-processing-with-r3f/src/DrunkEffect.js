import { Effect, BlendFunction } from "postprocessing";
import { Uniform } from "three";

const fragmentShader = /* glsl */ `
  uniform float frequency;
  uniform float amplitude;

  void mainUv(inout vec2 uv)
  {
    uv.y += sin(uv.x * frequency) * amplitude;
  }

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) 
  {
    outputColor = vec4(0.8, 1.0, 0.5, inputColor.a);
  }
`;

export class DrunkEffect extends Effect {
  constructor({ frequency = 2.0, amplitude = 0.10, blendFunction = BlendFunction.DARKEN }) {
    super("DrunkEffect", fragmentShader, {
      blendFunction: blendFunction,
      uniforms: new Map([
        ["frequency", new Uniform(frequency)],
        ["amplitude", new Uniform(amplitude)],
      ]),
    });
  }
}