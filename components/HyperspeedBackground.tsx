import { useEffect, useRef, FC } from 'react';
import * as THREE from 'three';
import { BloomEffect, EffectComposer, EffectPass, RenderPass, SMAAEffect, SMAAPreset } from 'postprocessing';

interface Distortion {
  uniforms: Record<string, { value: any }>;
  getDistortion: string;
  getJS?: (progress: number, time: number) => THREE.Vector3;
}

interface Distortions {
  [key: string]: Distortion;
}

interface Colors {
  roadColor: number;
  islandColor: number;
  background: number;
  shoulderLines: number;
  brokenLines: number;
  leftCars: number[];
  rightCars: number[];
  sticks: number;
}

interface HyperspeedOptions {
  onSpeedUp?: (ev: MouseEvent | TouchEvent) => void;
  onSlowDown?: (ev: MouseEvent | TouchEvent) => void;
  distortion?: string | Distortion;
  length: number;
  roadWidth: number;
  islandWidth: number;
  lanesPerRoad: number;
  fov: number;
  fovSpeedUp: number;
  speedUp: number;
  carLightsFade: number;
  totalSideLightSticks: number;
  lightPairsPerRoadWay: number;
  shoulderLinesWidthPercentage: number;
  brokenLinesWidthPercentage: number;
  brokenLinesLengthPercentage: number;
  lightStickWidth: [number, number];
  lightStickHeight: [number, number];
  movingAwaySpeed: [number, number];
  movingCloserSpeed: [number, number];
  carLightsLength: [number, number];
  carLightsRadius: [number, number];
  carWidthPercentage: [number, number];
  carShiftX: [number, number];
  carFloorSeparation: [number, number];
  colors: Colors;
  isHyper?: boolean;
}

interface HyperspeedProps {
  effectOptions?: Partial<HyperspeedOptions>;
}

const defaultOptions: HyperspeedOptions = {
  onSpeedUp: () => {},
  onSlowDown: () => {},
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 20,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 30,
  lightPairsPerRoadWay: 60,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xffffff,
    brokenLines: 0xffffff,
    leftCars: [0xd856bf, 0x6750a2, 0xc247ac, 0xff6b9d, 0x9b59b6, 0xe74c3c, 0xf39c12, 0x2ecc71, 0x3498db, 0x1abc9c],
    rightCars: [0x03b3c3, 0x0e5ea5, 0x324555, 0x00d4aa, 0x17a2b8, 0x007bff, 0x6610f2, 0x20c997, 0xfd7e14, 0xdc3545],
    sticks: 0x03b3c3
  }
};

function nsin(val: number) {
  return Math.sin(val) * 0.5 + 0.5;
}

const mountainUniforms = {
  uFreq: { value: new THREE.Vector3(3, 6, 10) },
  uAmp: { value: new THREE.Vector3(30, 30, 20) }
};

const xyUniforms = {
  uFreq: { value: new THREE.Vector2(5, 2) },
  uAmp: { value: new THREE.Vector2(25, 15) }
};

const LongRaceUniforms = {
  uFreq: { value: new THREE.Vector2(2, 3) },
  uAmp: { value: new THREE.Vector2(35, 10) }
};

const turbulentUniforms = {
  uFreq: { value: new THREE.Vector4(4, 8, 8, 1) },
  uAmp: { value: new THREE.Vector4(25, 5, 10, 10) }
};

const deepUniforms = {
  uFreq: { value: new THREE.Vector2(4, 8) },
  uAmp: { value: new THREE.Vector2(10, 20) },
  uPowY: { value: new THREE.Vector2(20, 2) }
};

const distortions: Distortions = {
  mountainDistortion: {
    uniforms: mountainUniforms,
    getDistortion: `
      uniform vec3 uAmp;
      uniform vec3 uFreq;
      #define PI 3.14159265358979
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        float movementProgressFix = 0.02;
        return vec3( 
          cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
          nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
          nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
        );
      }
    `,
    getJS: (progress: number, time: number) => {
      const movementProgressFix = 0.02;
      const uFreq = mountainUniforms.uFreq.value;
      const uAmp = mountainUniforms.uAmp.value;
      return new THREE.Vector3(
        Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x - Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
        nsin(progress * Math.PI * uFreq.y + time) * uAmp.y - nsin(movementProgressFix * Math.PI * uFreq.y + time) * uAmp.y,
        nsin(progress * Math.PI * uFreq.z + time) * uAmp.z - nsin(movementProgressFix * Math.PI * uFreq.z + time) * uAmp.z
      );
    }
  },
  xyDistortion: {
    uniforms: xyUniforms,
    getDistortion: `
      uniform vec2 uFreq;
      uniform vec2 uAmp;
      #define PI 3.14159265358979
      vec3 getDistortion(float progress){
        float movementProgressFix = 0.02;
        return vec3( 
          cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
          sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
          0.
        );
      }
    `,
    getJS: (progress: number, time: number) => {
      const movementProgressFix = 0.02;
      const uFreq = xyUniforms.uFreq.value;
      const uAmp = xyUniforms.uAmp.value;
      return new THREE.Vector3(
        Math.cos(progress * Math.PI * uFreq.x + time) * uAmp.x - Math.cos(movementProgressFix * Math.PI * uFreq.x + time) * uAmp.x,
        Math.sin(progress * Math.PI * uFreq.y + Math.PI / 2 + time) * uAmp.y - Math.sin(movementProgressFix * Math.PI * uFreq.y + Math.PI / 2 + time) * uAmp.y,
        0
      );
    }
  },
  LongRaceDistortion: {
    uniforms: LongRaceUniforms,
    getDistortion: `
      uniform vec2 uFreq;
      uniform vec2 uAmp;
      #define PI 3.14159265358979
      vec3 getDistortion(float progress){
        float camProgress = 0.0125;
        return vec3( 
          sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
          sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
          0.
        );
      }
    `,
    getJS: (progress: number, time: number) => {
      const camProgress = 0.0125;
      const uFreq = LongRaceUniforms.uFreq.value;
      const uAmp = LongRaceUniforms.uAmp.value;
      return new THREE.Vector3(
        Math.sin(progress * Math.PI * uFreq.x + time) * uAmp.x - Math.sin(camProgress * Math.PI * uFreq.x + time) * uAmp.x,
        Math.sin(progress * Math.PI * uFreq.y + time) * uAmp.y - Math.sin(camProgress * Math.PI * uFreq.y + time) * uAmp.y,
        0
      );
    }
  },
  turbulentDistortion: {
    uniforms: turbulentUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          cos(PI * progress * uFreq.r + uTime) * uAmp.r +
          pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
        );
      }
      float getDistortionY(float progress){
        return (
          -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
          -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.0125),
          getDistortionY(progress) - getDistortionY(0.0125),
          0.
        );
      }
    `,
    getJS: (progress: number, time: number) => {
      const uFreq = turbulentUniforms.uFreq.value;
      const uAmp = turbulentUniforms.uAmp.value;
      
      const getDistortionX = (prog: number) => {
        return (
          Math.cos(Math.PI * prog * uFreq.x + time) * uAmp.x +
          Math.pow(Math.cos(Math.PI * prog * uFreq.y + time * (uFreq.y / uFreq.x)), 2) * uAmp.y
        );
      };
      
      const getDistortionY = (prog: number) => {
        return (
          -nsin(Math.PI * prog * uFreq.z + time) * uAmp.z +
          -Math.pow(nsin(Math.PI * prog * uFreq.w + time / (uFreq.z / uFreq.w)), 5) * uAmp.w
        );
      };
      
      return new THREE.Vector3(
        getDistortionX(progress) - getDistortionX(0.0125),
        getDistortionY(progress) - getDistortionY(0.0125),
        0
      );
    }
  },
  turbulentDistortionStill: {
    uniforms: turbulentUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          cos(PI * progress * uFreq.r) * uAmp.r +
          pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
        );
      }
      float getDistortionY(float progress){
        return (
          -nsin(PI * progress * uFreq.b) * uAmp.b +
          -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.02),
          getDistortionY(progress) - getDistortionY(0.02),
          0.
        );
      }
    `
  },
  deepDistortionStill: {
    uniforms: deepUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      uniform vec2 uPowY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          sin(progress * PI * uFreq.x) * uAmp.x * 2.
        );
      }
      float getDistortionY(float progress){
        return (
          pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.02),
          getDistortionY(progress) - getDistortionY(0.05),
          0.
        );
      }
    `
  },
  deepDistortion: {
    uniforms: deepUniforms,
    getDistortion: `
      uniform vec4 uFreq;
      uniform vec4 uAmp;
      uniform vec2 uPowY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      #define PI 3.14159265358979
      float getDistortionX(float progress){
        return (
          sin(progress * PI * uFreq.x + uTime) * uAmp.x
        );
      }
      float getDistortionY(float progress){
        return (
          pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
        );
      }
      vec3 getDistortion(float progress){
        return vec3(
          getDistortionX(progress) - getDistortionX(0.02),
          getDistortionY(progress) - getDistortionY(0.02),
          0.
        );
      }
    `,
    getJS: (progress: number, time: number) => {
      const uFreq = deepUniforms.uFreq.value;
      const uAmp = deepUniforms.uAmp.value;
      const uPowY = deepUniforms.uPowY.value;
      
      const getDistortionX = (prog: number) => {
        return Math.sin(prog * Math.PI * uFreq.x + time) * uAmp.x;
      };
      
      const getDistortionY = (prog: number) => {
        return Math.pow(Math.abs(prog * uPowY.x), uPowY.y) + Math.sin(prog * Math.PI * uFreq.y + time) * uAmp.y;
      };
      
      return new THREE.Vector3(
        getDistortionX(progress) - getDistortionX(0.02),
        getDistortionY(progress) - getDistortionY(0.02),
        0
      );
    }
  }
};

const distortion_uniforms = {
  uDistortionX: { value: new THREE.Vector2(80, 3) },
  uDistortionY: { value: new THREE.Vector2(-40, 2.5) }
};

const distortion_vertex = `
  #define PI 3.14159265358979
  uniform vec2 uDistortionX;
  uniform vec2 uDistortionY;
  float nsin(float val){
    return sin(val) * 0.5 + 0.5;
  }
  vec3 getDistortion(float progress){
    progress = clamp(progress, 0., 1.);
    float xAmp = uDistortionX.r;
    float xFreq = uDistortionX.g;
    float yAmp = uDistortionY.r;
    float yFreq = uDistortionY.g;
    return vec3( 
      xAmp * nsin(progress * PI * xFreq - PI / 2.),
      yAmp * nsin(progress * PI * yFreq - PI / 2.),
      0.
    );
  }
`;

function random(base: number | [number, number]): number {
  if (Array.isArray(base)) {
    return Math.random() * (base[1] - base[0]) + base[0];
  }
  return Math.random() * base;
}

function pickRandom<T>(arr: T | T[]): T {
  if (Array.isArray(arr)) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return arr;
}

function lerp(current: number, target: number, speed = 0.1, limit = 0.001): number {
  let change = (target - current) * speed;
  if (Math.abs(change) < limit) {
    change = target - current;
  }
  return change;
}

class CarLights {
  webgl: App;
  options: HyperspeedOptions;
  colors: number[] | THREE.Color;
  speed: [number, number];
  fade: THREE.Vector2;
  mesh!: THREE.Mesh<THREE.InstancedBufferGeometry, THREE.ShaderMaterial>;

  constructor(
    webgl: App,
    options: HyperspeedOptions,
    colors: number[] | THREE.Color,
    speed: [number, number],
    fade: THREE.Vector2
  ) {
    this.webgl = webgl;
    this.options = options;
    this.colors = colors;
    this.speed = speed;
    this.fade = fade;
  }

  init() {
    const options = this.options;
    let curve = new THREE.LineCurve3(
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -1)
    );
    let baseGeometry = new THREE.TubeGeometry(curve, 25, 1, 8, false);

    let instanced = new THREE.InstancedBufferGeometry();
    instanced.index = baseGeometry.index;
    instanced.attributes = baseGeometry.attributes;
    instanced.instanceCount = options.lightPairsPerRoadWay;

    let aOffset = [];
    let aMetrics = [];
    let aColor = [];

    for (let i = 0; i < options.lightPairsPerRoadWay; i++) {
      let radius = random(options.carLightsRadius);
      let length = random(options.carLightsLength);
      let speed = random(this.speed);

      let carWidth = random(options.carWidthPercentage) * options.roadWidth;
      let carShiftX = random(options.carShiftX) * options.roadWidth;
      let carFloorSeparation = random(options.carFloorSeparation);

      let offsetY = random(options.carFloorSeparation) * carFloorSeparation;

      let offsetZ = -random(options.length);

      aOffset.push(carShiftX);
      aOffset.push(offsetY);
      aOffset.push(offsetZ);

      aMetrics.push(radius);
      aMetrics.push(length);
      aMetrics.push(speed);

      let color: number;
      if (Array.isArray(this.colors)) {
        color = pickRandom(this.colors);
      } else {
        // this.colors is THREE.Color, convert to number
        color = this.colors.getHex();
      }
      let colorObject = new THREE.Color(color);
      aColor.push(colorObject.r);
      aColor.push(colorObject.g);
      aColor.push(colorObject.b);
    }

    instanced.setAttribute('aOffset', new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 3, false));
    instanced.setAttribute('aMetrics', new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 3, false));
    instanced.setAttribute('aColor', new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false));

    let material = new THREE.ShaderMaterial({
      fragmentShader: carLightsFragment,
      vertexShader: carLightsVertex,
      transparent: true,
      uniforms: Object.assign(
        {
          uTime: this.webgl.uTime,
          uTravelLength: { value: options.length },
          uFade: { value: this.fade }
        },
        this.webgl.fogUniforms,
        options.distortion && typeof options.distortion === 'object' ? options.distortion.uniforms : distortions[options.distortion as string].uniforms
      )
    });

    material.onBeforeCompile = (shader) => {
      const distortionChunk = options.distortion && typeof options.distortion === 'object' 
        ? options.distortion.getDistortion 
        : distortions[options.distortion as string].getDistortion;
      shader.vertexShader = shader.vertexShader.replace(
        '#include <getDistortion_vertex>',
        distortionChunk
      );
    };

    this.mesh = new THREE.Mesh(instanced, material);
    this.mesh.frustumCulled = false;
  }

  update(time: number) {
    this.mesh.material.uniforms.uTime.value = time;
  }
}

const carLightsFragment = `
  #define USE_FOG;
  ${THREE.ShaderChunk['fog_pars_fragment']}
  varying vec3 vColor;
  varying vec2 vUv; 
  uniform vec2 uFade;
  void main() {
    vec3 color = vec3(vColor);
    float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
    gl_FragColor = vec4(color, alpha);
    if (gl_FragColor.a < 0.0001) discard;
    ${THREE.ShaderChunk['fog_fragment']}
  }
`;

const carLightsVertex = `
  #define USE_FOG;
  ${THREE.ShaderChunk['fog_pars_vertex']}
  attribute vec3 aOffset;
  attribute vec3 aMetrics;
  attribute vec3 aColor;
  uniform float uTravelLength;
  uniform float uTime;
  varying vec2 vUv; 
  varying vec3 vColor; 
  #include <getDistortion_vertex>
  void main() {
    vec3 transformed = position.xyz;
    float radius = aMetrics.r;
    float myLength = aMetrics.g;
    float speed = aMetrics.b;

    transformed.xy *= radius;
    transformed.z *= myLength;

    transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
    transformed.xy += aOffset.xy;

    float progress = abs(transformed.z / uTravelLength);
    transformed.xyz += getDistortion(progress);

    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    vColor = aColor;
    ${THREE.ShaderChunk['fog_vertex']}
  }
`;

class LightsSticks {
  webgl: App;
  options: HyperspeedOptions;
  mesh!: THREE.Mesh<THREE.InstancedBufferGeometry, THREE.ShaderMaterial>;

  constructor(webgl: App, options: HyperspeedOptions) {
    this.webgl = webgl;
    this.options = options;
  }

  init() {
    const options = this.options;
    const geometry = new THREE.PlaneGeometry(1, 1);
    const instanced = new THREE.InstancedBufferGeometry();
    instanced.index = geometry.index;
    instanced.attributes = geometry.attributes;
    instanced.instanceCount = options.totalSideLightSticks;

    let aOffset = [];
    let aColor = [];
    let aMetrics = [];

    for (let i = 0; i < options.totalSideLightSticks; i++) {
      let width = random(options.lightStickWidth);
      let height = random(options.lightStickHeight);

      aOffset.push(random(options.length));

      let color = new THREE.Color(options.colors.sticks);
      aColor.push(color.r);
      aColor.push(color.g);
      aColor.push(color.b);

      aMetrics.push(width);
      aMetrics.push(height);
    }

    instanced.setAttribute('aOffset', new THREE.InstancedBufferAttribute(new Float32Array(aOffset), 1, false));
    instanced.setAttribute('aColor', new THREE.InstancedBufferAttribute(new Float32Array(aColor), 3, false));
    instanced.setAttribute('aMetrics', new THREE.InstancedBufferAttribute(new Float32Array(aMetrics), 2, false));

    let material = new THREE.ShaderMaterial({
      fragmentShader: sideSticksFragment,
      vertexShader: sideSticksVertex,
      uniforms: Object.assign(
        {
          uTime: this.webgl.uTime,
          uTravelLength: { value: options.length }
        },
        this.webgl.fogUniforms,
        options.distortion && typeof options.distortion === 'object' ? options.distortion.uniforms : distortions[options.distortion as string].uniforms
      )
    });

    material.onBeforeCompile = (shader) => {
      const distortionChunk = options.distortion && typeof options.distortion === 'object' 
        ? options.distortion.getDistortion 
        : distortions[options.distortion as string].getDistortion;
      shader.vertexShader = shader.vertexShader.replace(
        '#include <getDistortion_vertex>',
        distortionChunk
      );
    };

    this.mesh = new THREE.Mesh(instanced, material);
    this.mesh.frustumCulled = false;
  }

  update(time: number) {
    this.mesh.material.uniforms.uTime.value = time;
  }
}

const sideSticksVertex = `
  #define USE_FOG;
  ${THREE.ShaderChunk['fog_pars_vertex']}
  attribute float aOffset;
  attribute vec3 aColor;
  attribute vec2 aMetrics;
  uniform float uTravelLength;
  uniform float uTime;
  varying vec3 vColor;
  mat4 rotationY( in float angle ) {
    return mat4(
      cos(angle),		0,		sin(angle),	0,
      0,		        1.0,	0,			0,
      -sin(angle),	    0,		cos(angle),	0,
      0, 		        0,		0,			1
    );
  }
  #include <getDistortion_vertex>
  void main(){
    vec3 transformed = position.xyz;
    float width = aMetrics.x;
    float height = aMetrics.y;

    transformed.xy *= vec2(width, height);
    float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

    transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;
    transformed.z += - uTravelLength + time;

    float progress = abs(transformed.z / uTravelLength);
    transformed.xyz += getDistortion(progress);

    transformed.y += height / 2.;
    transformed.x += -width / 2.;
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vColor = aColor;
    ${THREE.ShaderChunk['fog_vertex']}
  }
`;

const sideSticksFragment = `
  #define USE_FOG;
  ${THREE.ShaderChunk['fog_pars_fragment']}
  varying vec3 vColor;
  void main(){
    vec3 color = vec3(vColor);
    gl_FragColor = vec4(color,1.);
    ${THREE.ShaderChunk['fog_fragment']}
  }
`;

class Road {
  webgl: App;
  options: HyperspeedOptions;
  uTime: { value: number };
  leftRoadWay!: THREE.Mesh;
  rightRoadWay!: THREE.Mesh;
  island!: THREE.Mesh;

  constructor(webgl: App, options: HyperspeedOptions) {
    this.webgl = webgl;
    this.options = options;
    this.uTime = { value: 0 };
  }

  createPlane(side: number, width: number, isRoad: boolean) {
    const options = this.options;
    const geometry = new THREE.PlaneGeometry(width, options.length, 20, 200);
    let material = new THREE.ShaderMaterial({
      fragmentShader: isRoad ? roadFragment : islandFragment,
      vertexShader: roadVertex,
      uniforms: Object.assign(
        {
          uTravelLength: { value: options.length },
          uColor: { value: new THREE.Color(isRoad ? options.colors.roadColor : options.colors.islandColor) },
          uTime: this.uTime
        },
        this.webgl.fogUniforms,
        isRoad
          ? {
              uLanes: { value: options.lanesPerRoad },
              uBrokenLinesColor: { value: new THREE.Color(options.colors.brokenLines) },
              uShoulderLinesColor: { value: new THREE.Color(options.colors.shoulderLines) },
              uShoulderLinesWidthPercentage: { value: options.shoulderLinesWidthPercentage },
              uBrokenLinesWidthPercentage: { value: options.brokenLinesWidthPercentage },
              uBrokenLinesLengthPercentage: { value: options.brokenLinesLengthPercentage }
            }
          : {},
        options.distortion && typeof options.distortion === 'object' ? options.distortion.uniforms : distortions[options.distortion as string].uniforms
      )
    });

    material.onBeforeCompile = (shader) => {
      const distortionChunk = options.distortion && typeof options.distortion === 'object' 
        ? options.distortion.getDistortion 
        : distortions[options.distortion as string].getDistortion;
      shader.vertexShader = shader.vertexShader.replace(
        '#include <getDistortion_vertex>',
        distortionChunk
      );
    };

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.x = side * (options.roadWidth / 2 + options.islandWidth / 2);

    return mesh;
  }

  init() {
    this.leftRoadWay = this.createPlane(-1, this.options.roadWidth, true);
    this.rightRoadWay = this.createPlane(1, this.options.roadWidth, true);
    this.island = this.createPlane(0, this.options.islandWidth, false);
  }

  update(time: number) {
    this.uTime.value = time;
  }
}

const roadBaseFragment = `
  #define USE_FOG;
  varying vec2 vUv; 
  uniform vec3 uColor;
  uniform float uTime;
  #include <roadMarkings_vars>
  ${THREE.ShaderChunk['fog_pars_fragment']}
  void main() {
    vec2 uv = vUv;
    vec3 color = vec3(uColor);
    #include <roadMarkings_fragment>
    gl_FragColor = vec4(color, 1.);
    ${THREE.ShaderChunk['fog_fragment']}
  }
`;

const islandFragment = roadBaseFragment
  .replace('#include <roadMarkings_fragment>', '')
  .replace('#include <roadMarkings_vars>', '');

const roadMarkings_vars = `
  uniform float uLanes;
  uniform vec3 uBrokenLinesColor;
  uniform vec3 uShoulderLinesColor;
  uniform float uShoulderLinesWidthPercentage;
  uniform float uBrokenLinesWidthPercentage;
  uniform float uBrokenLinesLengthPercentage;
  highp float random(vec2 co) {
    highp float a = 12.9898;
    highp float b = 78.233;
    highp float c = 43758.5453;
    highp float dt = dot(co.xy, vec2(a, b));
    highp float sn = mod(dt, 3.14);
    return fract(sin(sn) * c);
  }
`;

const roadMarkings_fragment = `
  uv.y = mod(uv.y + uTime * 0.05, 1.);
  float laneWidth = 1.0 / uLanes;
  float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
  float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

  float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
  float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

  brokenLines = mix(brokenLines, sideLines, uv.x);
`;

const roadFragment = roadBaseFragment
  .replace('#include <roadMarkings_fragment>', roadMarkings_fragment)
  .replace('#include <roadMarkings_vars>', roadMarkings_vars);

const roadVertex = `
  #define USE_FOG;
  uniform float uTime;
  ${THREE.ShaderChunk['fog_pars_vertex']}
  uniform float uTravelLength;
  varying vec2 vUv; 
  #include <getDistortion_vertex>
  void main() {
    vec3 transformed = position.xyz;
    vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
    transformed.x += distortion.x;
    transformed.z += distortion.y;
    transformed.y += -1. * distortion.z;  

    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
    gl_Position = projectionMatrix * mvPosition;
    vUv = uv;
    ${THREE.ShaderChunk['fog_vertex']}
  }
`;

function resizeRendererToDisplaySize(
  renderer: THREE.WebGLRenderer,
  setSize: (width: number, height: number, updateStyle: boolean) => void
) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    setSize(width, height, false);
  }
  return needResize;
}

class App {
  container: HTMLElement;
  options: HyperspeedOptions;
  renderer: THREE.WebGLRenderer;
  composer: EffectComposer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderPass!: RenderPass;
  bloomPass!: EffectPass;
  clock: THREE.Clock;
  assets: Record<string, any>;
  disposed: boolean;
  road: Road;
  leftCarLights: CarLights;
  rightCarLights: CarLights;
  leftSticks: LightsSticks;
  fogUniforms: Record<string, { value: any }>;
  fovTarget: number;
  speedUpTarget: number;
  speedUp: number;
  timeOffset: number;
  uTime: { value: number };

  constructor(container: HTMLElement, options: HyperspeedOptions) {
    this.container = container;
    this.options = { ...defaultOptions, ...options };
    this.disposed = false;
    this.assets = {};
    this.clock = new THREE.Clock();
    this.uTime = { value: 0 };

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(this.options.fov, container.clientWidth / container.clientHeight, 0.1, 1000);
    this.camera.position.z = 3;
    this.camera.position.y = 0.8;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(this.options.colors.background, 1);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.composer = new EffectComposer(this.renderer);

    this.fogUniforms = {
      fogColor: { value: this.scene.fog ? this.scene.fog.color : new THREE.Color(this.options.colors.background) },
      fogNear: { value: this.scene.fog ? (this.scene.fog as THREE.Fog).near : 1 },
      fogFar: { value: this.scene.fog ? (this.scene.fog as THREE.Fog).far : 1000 }
    };

    this.scene.fog = new THREE.Fog(this.options.colors.background, 0.1, this.options.length * 0.8);

    this.fovTarget = this.options.fov;
    this.speedUpTarget = 0;
    this.speedUp = 0;
    this.timeOffset = 0;

    this.road = new Road(this, this.options);
    this.leftCarLights = new CarLights(
      this,
      this.options,
      this.options.colors.leftCars,
      this.options.movingCloserSpeed,
      new THREE.Vector2(0, this.options.carLightsFade)
    );
    this.rightCarLights = new CarLights(
      this,
      this.options,
      this.options.colors.rightCars,
      this.options.movingAwaySpeed,
      new THREE.Vector2(this.options.carLightsFade, 1)
    );
    this.leftSticks = new LightsSticks(this, this.options);

    this.container.appendChild(this.renderer.domElement);

    this.loadAssets().then(() => {
      this.init();
      this.tick();
    });

    window.addEventListener('resize', this.onWindowResize.bind(this));
    this.container.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.container.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.container.addEventListener('touchstart', this.onTouchStart.bind(this));
    this.container.addEventListener('touchend', this.onTouchEnd.bind(this));
    this.container.addEventListener('contextmenu', this.onContextMenu.bind(this));
  }

  onWindowResize() {
    if (this.disposed) return;
    
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.composer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

  initPasses() {
    this.renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(this.renderPass);

    const bloomEffect = new BloomEffect({
      blendFunction: 24,
      luminanceThreshold: 0.1,
      luminanceSmoothing: 0.9,
      height: 480
    });

    const smaaEffect = new SMAAEffect({
      preset: SMAAPreset.HIGH,
      edgeDetectionMode: 1
    });

    this.bloomPass = new EffectPass(this.camera, bloomEffect, smaaEffect);
    this.composer.addPass(this.bloomPass);
  }

  async loadAssets(): Promise<void> {
    return Promise.resolve();
  }

  init() {
    this.initPasses();
    this.road.init();
    this.leftCarLights.init();
    this.rightCarLights.init();
    this.leftSticks.init();

    this.scene.add(this.road.leftRoadWay);
    this.scene.add(this.road.rightRoadWay);
    this.scene.add(this.road.island);
    this.scene.add(this.leftCarLights.mesh);
    this.scene.add(this.rightCarLights.mesh);
    this.scene.add(this.leftSticks.mesh);
  }

  onMouseDown(ev: MouseEvent) {
    if (this.options.onSpeedUp) this.options.onSpeedUp(ev);
    this.fovTarget = this.options.fovSpeedUp;
    this.speedUpTarget = this.options.speedUp;
  }

  onMouseUp(ev: MouseEvent) {
    if (this.options.onSlowDown) this.options.onSlowDown(ev);
    this.fovTarget = this.options.fov;
    this.speedUpTarget = 0;
  }

  onTouchStart(ev: TouchEvent) {
    if (this.options.onSpeedUp) this.options.onSpeedUp(ev);
    this.fovTarget = this.options.fovSpeedUp;
    this.speedUpTarget = this.options.speedUp;
  }

  onTouchEnd(ev: TouchEvent) {
    if (this.options.onSlowDown) this.options.onSlowDown(ev);
    this.fovTarget = this.options.fov;
    this.speedUpTarget = 0;
  }

  onContextMenu(ev: MouseEvent) {
    ev.preventDefault();
  }

  update(delta: number) {
    const time = this.clock.getElapsedTime() + this.timeOffset;
    this.uTime.value = time;

    this.speedUp += lerp(this.speedUp, this.speedUpTarget, 0.05);
    this.camera.fov += lerp(this.camera.fov, this.fovTarget, 0.05);
    this.camera.updateProjectionMatrix();

    this.road.update(time);
    this.leftCarLights.update(time);
    this.rightCarLights.update(time);
    this.leftSticks.update(time);

    let updateCamera = false;
    const distortion = this.options.distortion;
    if (distortion && typeof distortion === 'object' && distortion.getJS) {
      const distortionVector = distortion.getJS(0.025, time);
      this.camera.position.x = distortionVector.x;
      this.camera.position.y = 0.8 + distortionVector.y;
      this.camera.position.z = 3 + distortionVector.z;
      updateCamera = true;
    } else if (typeof distortion === 'string' && distortions[distortion] && distortions[distortion].getJS) {
      const distortionVector = distortions[distortion].getJS!(0.025, time);
      this.camera.position.x = distortionVector.x;
      this.camera.position.y = 0.8 + distortionVector.y;
      this.camera.position.z = 3 + distortionVector.z;
      updateCamera = true;
    }

    if (updateCamera) {
      this.camera.updateMatrixWorld();
    }
  }

  render(delta: number) {
    this.composer.render(delta);
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;

    window.removeEventListener('resize', this.onWindowResize.bind(this));
    this.container.removeEventListener('mousedown', this.onMouseDown.bind(this));
    this.container.removeEventListener('mouseup', this.onMouseUp.bind(this));
    this.container.removeEventListener('touchstart', this.onTouchStart.bind(this));
    this.container.removeEventListener('touchend', this.onTouchEnd.bind(this));
    this.container.removeEventListener('contextmenu', this.onContextMenu.bind(this));

    this.scene.clear();
    this.renderer.dispose();
    this.composer.dispose();

    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
  }

  setSize(width: number, height: number, updateStyles: boolean) {
    this.renderer.setSize(width, height, updateStyles);
    this.composer.setSize(width, height);
  }

  tick() {
    if (this.disposed) return;
    
    const delta = this.clock.getDelta();
    
    if (resizeRendererToDisplaySize(this.renderer, this.setSize.bind(this))) {
      this.onWindowResize();
    }
    
    this.update(delta);
    this.render(delta);
    
    requestAnimationFrame(this.tick.bind(this));
  }
}

const HyperspeedBackground: FC<HyperspeedProps> = ({ effectOptions = {} }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<App | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const options = { ...defaultOptions, ...effectOptions };
    appRef.current = new App(containerRef.current, options);

    return () => {
      if (appRef.current) {
        appRef.current.dispose();
        appRef.current = null;
      }
    };
  }, [effectOptions]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        zIndex: 1,
        pointerEvents: 'auto'
      }} 
    />
  );
};

export default HyperspeedBackground;