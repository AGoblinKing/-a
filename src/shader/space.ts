const spacefrag = `
varying vec2 vUv;
uniform vec3 color;
uniform float timeMsec; // A-Frame time in milliseconds.

#define iterations 17
#define formuparam 0.53

#define volsteps 20
#define stepsize 0.1

#define zoom   0.800
#define tile   0.850
#define speed  10000.010 

#define brightness 0.0015
#define darkmatter 0.300
#define distfading 0.730
#define saturation 0.850

void main() {
  //get coords and direction

  float time=timeMsec*speed+.25;
  vec3 dir=vec3(vUv*zoom,1.);

  //volumetric rendering
  float s=0.1,fade=1.;
  vec3 v=vec3(0.);
  for (int r=0; r<volsteps; r++) {
      vec3 p=s*dir*.5;
      p = abs(vec3(tile)-mod(p,vec3(tile*2.))); // tiling fold
      float pa,a=pa=0.;
      for (int i=0; i<iterations; i++) { 
          p=abs(p)/dot(p,p)-formuparam; // the magic formula
          a+=abs(length(p)-pa); // absolute sum of average change
          pa=length(p);
      }
      float dm=max(0.,darkmatter-a*a*.001); //dark matter
      a*=a*a; // add contrast
      if (r>6) fade*=1.-dm; // dark matter, don't render near
      //v+=vec3(dm,dm*.5,0.);
      v+=fade;
      v+=vec3(s,s*s,s*s*s*s)*a*brightness*fade; // coloring based on distance
      fade*=distfading; // distance fading
      s+=stepsize;
  }
  v=mix(vec3(length(v)),v,saturation); //color adjust
  float r = v.r;
  v.r = v.b;
  v.b = r;

  gl_FragColor = vec4(v*.01,1.);	
}

`

const spaceVert = `
varying vec2 vUv;

void main() {
  vUv = uv;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`

AFRAME.registerShader("space", {
  schema: {

  },
  fragmentShader: spacefrag,
  vertexShader: spaceVert
})