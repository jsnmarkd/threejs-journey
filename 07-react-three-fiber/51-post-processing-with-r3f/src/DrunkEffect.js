import { Effect } from "postprocessing";
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
    vec4 color = inputColor;
    color.rgb *= vec3(0.8, 1.0, 0.5);
    outputColor = color;
  }
`;

export class DrunkEffect extends Effect {
  constructor({ frequency, amplitude }) {
    super("DrunkEffect", fragmentShader, {
      uniforms: new Map([
        ["frequency", new Uniform(frequency)],
        ["amplitude", new Uniform(amplitude)],
      ]),
    });
  }
}
