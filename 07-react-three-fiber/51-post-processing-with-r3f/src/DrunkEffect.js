import { Effect } from "postprocessing";

const fragmentShader = /* glsl */ `
  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) 
  {
    vec4 color = inputColor;
    outputColor = inputColor;
  }
`;

export class DrunkEffect extends Effect {
  constructor(props) {
    super("DrunkEffect", fragmentShader, {});
  }
};
