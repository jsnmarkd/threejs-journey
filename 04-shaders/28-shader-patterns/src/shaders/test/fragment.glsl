varying vec2 vUv;

void main()
{
    // gl_FragColor = vec4(vUv, 1.0, 1.0); // pattern 1

    // gl_FragColor = vec4(vUv, 0.0, 1.0); // pattern 2.a
    // gl_FragColor = vec4(vUv, 0.5, 1.0); // pattern 2.b

    // float strength = vUv.x; // pattern 3
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = vUv.y; // pattern 4
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = 1.0 - vUv.y; // pattern 5
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 
    
    // float strength = vUv.y * 10.0; // pattern 6
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = mod(vUv.y * 10.0, 1.0); // pattern 7
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = mod(vUv.y * 10.0, 1.0); // pattern 8
    // strength = step(0.5, strength);
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = mod(vUv.y * 10.0, 1.0); // pattern 9
    // strength = step(0.8, strength);
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 
    
    // float strength = mod(vUv.x * 10.0, 1.0); // pattern 10
    // strength = step(0.8, strength);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    float strength = step(0.8, mod(vUv.x * 10.0, 1.0)); // pattern 11
    strength += step(0.8, mod(vUv.y * 10.0, 1.0));
    gl_FragColor = vec4(strength, strength, strength, 1.0); 
}