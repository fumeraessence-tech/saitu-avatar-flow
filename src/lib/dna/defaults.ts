/**
 * Default DNA Configurations & Presets
 * Ready-to-use character templates
 */

import { CharacterDNA } from '@/types/character-dna';

// ============================================================================
// BASE DEFAULT DNA
// ============================================================================

export const defaultDNA: CharacterDNA = {
  version: '1.0',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  generationCount: 0,

  core: {
    id: '',
    name: 'New Character',
    age: 28,
    ageRange: 'young-adult',
    gender: 'female',
    ethnicity: {
      primary: 'Caucasian',
      skinToneHex: '#F5CBA7',
    },
  },

  facialStructure: {
    headShape: 'oval',
    headWidth: 5,
    headLength: 5,
    faceWidth: 5,
    faceLength: 5,
    foreheadHeight: 5,
    foreheadWidth: 5,
    foreheadSlope: 'slight',
    cheekboneProminence: 6,
    cheekboneHeight: 'medium',
    cheekboneWidth: 5,
    cheekFullness: 5,
    jawShape: 'defined',
    jawWidth: 5,
    jawProminence: 5,
    chinShape: 'round',
    chinWidth: 5,
    chinHeight: 5,
    chinProminence: 5,
  },

  eyes: {
    eyeShape: 'almond',
    eyeSize: 6,
    eyeSpacing: 5,
    irisColor: {
      primary: '#4A7BA7',
      pattern: 'radial',
      limbalRing: true,
      limbalRingIntensity: 7,
    },
    pupilSize: 'medium',
    scleraClarity: 9,
    scleraColor: '#FFFFFF',
    upperEyelidExposure: 5,
    lowerEyelidShape: 'slight-curve',
    eyelidCrease: 'double',
    upperLashLength: 7,
    upperLashThickness: 6,
    upperLashCurl: 7,
    lowerLashLength: 4,
    lowerLashThickness: 3,
    lashColor: '#2C2416',
    eyeOpenness: 7,
    defaultGaze: 'direct',
    underEyeCircles: 'slight',
    underEyeCircleColor: '#E8D5C4',
    underEyeBags: 2,
  },

  eyebrows: {
    shape: 'soft-arch',
    arch: {
      hasArch: true,
      archHeight: 6,
      archPosition: 'middle',
    },
    thickness: 5,
    length: 7,
    width: 5,
    hairColor: '#5D4E37',
    hairDensity: 7,
    hairDirection: 'slightly-upward',
    tailThickness: 4,
    grooming: 'groomed',
    texture: 'smooth',
  },

  nose: {
    noseType: 'straight',
    bridgeHeight: 5,
    bridgeWidth: 5,
    bridgeShape: 'straight',
    tipShape: 'round',
    tipWidth: 5,
    tipProtrusion: 5,
    tipRotation: 0,
    nostrilWidth: 5,
    nostrilShape: 'oval',
    nostrilVisibility: 4,
    nostrilFlare: 3,
    noseLength: 5,
    columellaShow: 4,
    nasalAngle: 105,
  },

  mouth: {
    upperLipShape: 'cupids-bow',
    lowerLipShape: 'full',
    mouthWidth: 6,
    upperLipThickness: 5,
    lowerLipThickness: 6,
    lipProtrusion: 5,
    lipAsymmetry: 1,
    cupidsBowDefinition: 7,
    cupidsBowPeaks: 'medium',
    lipColor: {
      natural: '#D4968E',
      upperLipColor: '#C98580',
      lowerLipColor: '#E0A69D',
    },
    lipTexture: 'smooth',
    lipMoisture: 7,
    philtrumDepth: 5,
    philtrumLength: 5,
    lipLineDefinition: 6,
    teethVisibility: 'hidden',
    teethColor: '#F8F8F0',
    teethAlignment: 'slight-imperfect',
    mouthResting: 'relaxed',
    mouthCorners: 'slightly-upturned',
  },

  skin: {
    baseTone: {
      hex: '#F5CBA7',
      undertone: 'warm',
      undertoneIntensity: 6,
    },
    texture: {
      smoothness: 7,
      poreVisibility: 6,
      poreSize: 'fine',
      poreDistribution: 'even',
      hasVisiblePores: true,
      hasTextureVariation: true,
      hasMicroTexture: true,
    },
    freckles: {
      has: true,
      coverage: 4,
      distribution: 'nose-cheeks',
      color: '#C19A6B',
      size: 'fine',
      season: 'sun-exposed',
    },
    beautyMarks: {
      has: false,
      positions: [],
    },
    blemishes: {
      level: 'minimal',
      types: [],
    },
    redness: {
      level: 3,
      distribution: 'cheeks',
    },
    oiliness: {
      level: 5,
      distribution: 't-zone',
    },
    fineLines: {
      level: 'minimal',
      locations: [],
      depth: 2,
    },
    wrinkles: {
      level: 'none',
      type: [],
    },
    lightingResponse: {
      highlight: 'moderate',
      highlightAreas: ['forehead', 'cheekbones', 'nose-bridge'],
      shadowDepth: 5,
      subsurfaceScattering: 8,
    },
  },

  hair: {
    color: {
      base: '#6B4423',
      highlights: ['#8B6F47'],
      lowlights: ['#4A2C0F'],
      roots: '#5A3A1D',
      hasOmbre: false,
      hasBalayage: true,
      grayPercentage: 0,
    },
    texture: 'wavy',
    texturePattern: '2b',
    curlTightness: 5,
    strandThickness: 'medium',
    density: 7,
    volume: 7,
    length: {
      overall: 'shoulder',
      front: 16,
      sides: 16,
      back: 18,
    },
    hairlineShape: 'rounded',
    hairlineHeight: 'medium',
    style: 'natural',
    parting: 'center',
    layers: 'light-layers',
    bangs: 'none',
    shine: 7,
    health: 8,
    flyaways: 3,
  },

  facialHair: {
    has: false,
    style: 'clean-shaven',
    coverage: {
      mustache: false,
      chin: false,
      jawline: false,
      cheeks: false,
      neck: false,
    },
    length: 1,
    thickness: 1,
    color: '#000000',
    grooming: 'natural',
    texture: 'soft',
  },

  body: {
    build: 'slim',
    height: 170,
    shoulderWidth: 5,
    torsoLength: 5,
    legLength: 5,
    posture: 'upright',
    shoulderPosition: 'relaxed',
    neckLength: 5,
    neckThickness: 4,
    shoulderSlope: 'slight-slope',
    handSize: 'medium',
    fingerLength: 'average',
    nailLength: 'short',
    nailShape: 'rounded',
  },

  distinguishingFeatures: {
    birthmarks: [],
    scars: [],
    tattoos: [],
    piercings: [],
    glasses: {
      has: false,
    },
    jewelry: {
      has: false,
    },
  },

  expression: {
    defaultExpression: 'relaxed',
    eyebrowPosition: 'neutral',
    mouthExpression: 'slight-upturn',
    demeanor: 'friendly',
    approachability: 8,
    confidence: 7,
    eyeWarmth: 8,
    smileReach: 'eyes',
  },

  photography: {
    lighting: {
      type: 'natural',
      direction: '45-degree',
      intensity: 7,
      softness: 8,
      colorTemperature: 5500,
    },
    camera: {
      lensType: '85mm',
      aperture: 'f/1.8',
      depthOfField: 'shallow',
      focus: 'eyes',
    },
    shotType: 'closeup',
    angle: 'eye-level',
    framing: 'centered',
    background: {
      type: 'gradient',
      color: '#F5F5F0',
      blur: 9,
    },
    postProcessing: {
      style: 'natural',
      colorGrading: 'warm',
      contrast: 6,
      sharpness: 8,
      clarity: 7,
    },
  },
};

// ============================================================================
// CHARACTER PRESETS
// ============================================================================

/**
 * Preset 1: Sarah - Girl Next Door
 * Caucasian, brown hair, blue eyes, freckles
 */
export const presetSarah: CharacterDNA = {
  ...defaultDNA,
  core: {
    ...defaultDNA.core,
    name: 'Sarah',
    age: 25,
    ageRange: 'young-adult',
    gender: 'female',
    ethnicity: {
      primary: 'Caucasian',
      skinToneHex: '#FBE4D5',
    },
  },
  eyes: {
    ...defaultDNA.eyes,
    irisColor: {
      primary: '#5B9BD5',
      pattern: 'radial',
      limbalRing: true,
      limbalRingIntensity: 8,
    },
  },
  hair: {
    ...defaultDNA.hair,
    color: {
      base: '#8B6F47',
      highlights: ['#B08D57'],
      lowlights: ['#6B5634'],
      roots: '#7A5F3A',
      hasOmbre: false,
      hasBalayage: true,
      grayPercentage: 0,
    },
    texture: 'wavy',
    texturePattern: '2b',
  },
  skin: {
    ...defaultDNA.skin,
    freckles: {
      has: true,
      coverage: 6,
      distribution: 'nose-cheeks',
      color: '#D4A574',
      size: 'fine',
      season: 'sun-exposed',
    },
  },
};

/**
 * Preset 2: Marcus - Professional Male
 * East Asian, black hair, brown eyes
 */
export const presetMarcus: CharacterDNA = {
  ...defaultDNA,
  core: {
    ...defaultDNA.core,
    name: 'Marcus',
    age: 32,
    ageRange: 'adult',
    gender: 'male',
    ethnicity: {
      primary: 'East Asian',
      skinToneHex: '#F1C27D',
    },
  },
  eyes: {
    ...defaultDNA.eyes,
    eyeShape: 'monolid',
    irisColor: {
      primary: '#3E2723',
      pattern: 'solid',
      limbalRing: true,
      limbalRingIntensity: 6,
    },
  },
  hair: {
    ...defaultDNA.hair,
    color: {
      base: '#1A1A1A',
      highlights: [],
      lowlights: [],
      roots: '#0D0D0D',
      hasOmbre: false,
      hasBalayage: false,
      grayPercentage: 2,
    },
    texture: 'straight',
    texturePattern: '1b',
    length: {
      overall: 'short',
      front: 3,
      sides: 2,
      back: 2,
    },
  },
  skin: {
    ...defaultDNA.skin,
    baseTone: {
      hex: '#F1C27D',
      undertone: 'neutral',
      undertoneIntensity: 5,
    },
    freckles: {
      has: false,
      coverage: 0,
      distribution: 'nose-cheeks',
      color: '#000000',
      size: 'fine',
      season: 'year-round',
    },
  },
  facialHair: {
    has: true,
    style: 'stubble',
    coverage: {
      mustache: true,
      chin: true,
      jawline: true,
      cheeks: true,
      neck: false,
    },
    length: 2,
    thickness: 6,
    color: '#1A1A1A',
    grooming: 'trimmed',
    texture: 'coarse',
  },
};

/**
 * Preset 3: Aisha - South Asian Beauty
 * South Asian, black hair, brown eyes
 */
export const presetAisha: CharacterDNA = {
  ...defaultDNA,
  core: {
    ...defaultDNA.core,
    name: 'Aisha',
    age: 26,
    ageRange: 'young-adult',
    gender: 'female',
    ethnicity: {
      primary: 'South Asian',
      skinToneHex: '#C68642',
    },
  },
  eyes: {
    ...defaultDNA.eyes,
    eyeShape: 'almond',
    irisColor: {
      primary: '#5C4033',
      pattern: 'radial',
      limbalRing: true,
      limbalRingIntensity: 9,
    },
    upperLashLength: 8,
    upperLashThickness: 7,
  },
  hair: {
    ...defaultDNA.hair,
    color: {
      base: '#0F0A08',
      highlights: [],
      lowlights: [],
      roots: '#000000',
      hasOmbre: false,
      hasBalayage: false,
      grayPercentage: 0,
    },
    texture: 'straight',
    texturePattern: '1a',
    length: {
      overall: 'mid-back',
      front: 24,
      sides: 24,
      back: 26,
    },
    shine: 9,
  },
  skin: {
    ...defaultDNA.skin,
    baseTone: {
      hex: '#C68642',
      undertone: 'warm',
      undertoneIntensity: 7,
    },
    freckles: {
      has: false,
      coverage: 0,
      distribution: 'nose-cheeks',
      color: '#000000',
      size: 'fine',
      season: 'year-round',
    },
  },
};

/**
 * Preset 4: Alex - Mature Professional
 * Caucasian, salt-and-pepper hair, green eyes
 */
export const presetAlex: CharacterDNA = {
  ...defaultDNA,
  core: {
    ...defaultDNA.core,
    name: 'Alex',
    age: 45,
    ageRange: 'mature',
    gender: 'male',
    ethnicity: {
      primary: 'Caucasian',
      skinToneHex: '#E8C9A7',
    },
  },
  eyes: {
    ...defaultDNA.eyes,
    irisColor: {
      primary: '#6B8E23',
      pattern: 'radial',
      limbalRing: true,
      limbalRingIntensity: 5,
    },
    underEyeCircles: 'moderate',
    underEyeBags: 4,
  },
  hair: {
    ...defaultDNA.hair,
    color: {
      base: '#6B6B6B',
      highlights: ['#FFFFFF'],
      lowlights: ['#404040'],
      roots: '#808080',
      hasOmbre: false,
      hasBalayage: false,
      grayPercentage: 50,
    },
    length: {
      overall: 'short',
      front: 4,
      sides: 3,
      back: 3,
    },
  },
  skin: {
    ...defaultDNA.skin,
    fineLines: {
      level: 'moderate',
      locations: ['eyes', 'forehead', 'smile-lines'],
      depth: 5,
    },
    wrinkles: {
      level: 'minimal',
      type: ['crows-feet'],
    },
  },
  facialHair: {
    has: true,
    style: 'light-beard',
    coverage: {
      mustache: true,
      chin: true,
      jawline: true,
      cheeks: true,
      neck: false,
    },
    length: 4,
    thickness: 7,
    color: '#6B6B6B',
    grooming: 'trimmed',
    texture: 'coarse',
  },
};

// ============================================================================
// PRESET REGISTRY
// ============================================================================

export const presetRegistry = {
  default: defaultDNA,
  sarah: presetSarah,
  marcus: presetMarcus,
  aisha: presetAisha,
  alex: presetAlex,
};

export type PresetName = keyof typeof presetRegistry;

/**
 * Get preset by name
 */
export function getPreset(name: PresetName): CharacterDNA {
  return JSON.parse(JSON.stringify(presetRegistry[name])); // Deep clone
}

/**
 * Get all preset names
 */
export function getPresetNames(): PresetName[] {
  return Object.keys(presetRegistry) as PresetName[];
}

/**
 * Create new DNA from preset
 */
export function createFromPreset(presetName: PresetName, overrides?: Partial<CharacterDNA>): CharacterDNA {
  const preset = getPreset(presetName);
  return {
    ...preset,
    ...overrides,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    generationCount: 0,
  };
}
