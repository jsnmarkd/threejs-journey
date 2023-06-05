varying vec2 vUv;

void main()
{
    // gl_FragColor = vec4(vUv, 1.0, 1.0); // pattern 1
    // gl_FragColor = vec4(vUv, 0.0, 1.0); // pattern 2.a
    // gl_FragColor = vec4(vUv, 0.5, 1.0); // pattern 2.b

    float strength = vUv.x

    gl_FragColor = vec4(strength, strength, strength, 1.0); // pattern 3
}