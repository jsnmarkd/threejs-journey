varying vec2 vUv;

void main()
{
    // gl_FragColor = vec4(vUv, 1.0, 1.0); // Pattern 1

    // gl_FragColor = vec4(vUv, 0.0, 1.0); // Pattern 2.a
    // gl_FragColor = vec4(vUv, 0.5, 1.0); // Pattern 2.b

    // float strength = vUv.x; // Pattern 3
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = vUv.y; // Pattern 4
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = 1.0 - vUv.y; // Pattern 5
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 
    
    // float strength = vUv.y * 10.0; // Pattern 6
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = mod(vUv.y * 10.0, 1.0); // Pattern 7
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = mod(vUv.y * 10.0, 1.0); // Pattern 8
    // strength = step(0.5, strength);
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = mod(vUv.y * 10.0, 1.0); // Pattern 9
    // strength = step(0.8, strength);
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 
    
    // float strength = mod(vUv.x * 10.0, 1.0); // Pattern 10
    // strength = step(0.8, strength);
    // gl_FragColor = vec4(strength, strength, strength, 1.0);

    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0)); // Pattern 11
    // strength += step(0.8, mod(vUv.y * 10.0, 1.0));
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0)); // Pattern 12
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = step(0.4, mod(vUv.x * 10.0, 1.0)); // Pattern 13
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0)); // Pattern 14
    // barX *= step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)); 
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

    // float strength = barX + barY;

    // gl_FragColor = vec4(strength, strength, strength, 1.0); 
    
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0)); // Pattern 15
    // barX *= step(0.8, mod(vUv.y * 10.0 + 0.2, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0 + 0.2, 1.0)); 
    // barY *= step(0.4, mod(vUv.y * 10.0, 1.0));

    // float strength = barX + barY;

    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = abs(vUv.x - 0.5); // Pattern 16
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5)); // Pattern 17
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)); // Pattern 18
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5))); // Pattern 19
    // gl_FragColor = vec4(strength, strength, strength, 1.0); 

    float square1 = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5))); // Pattern 20
    float square2 = 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5))); 
    float strength = square1 * square2;
    gl_FragColor = vec4(strength, strength, strength, 1.0); 
}