/**
 * Default DNA Configuration
 *
 * Provides baseline DNA values for new characters
 */

import { CharacterDNA } from '@/types/dna';

export const DEFAULT_DNA: CharacterDNA = {
  version: '1.0',

  facialStructure: {
    faceShape: 'oval',
    faceWidth: 50,
    faceLength: 50,
    jawline: {
      definition: 50,
      width: 50,
      shape: 'soft',
      asymmetry: 2,
    },
    cheekbones: {
      prominence: 50,
      position: 'mid',
      definition: 50,
      width: 50,
    },
    forehead: {
      height: 50,
      width: 50,
      shape: 'rounded',
      prominence: 50,
    },
    chin: {
      shape: 'rounded',
      prominence: 50,
      width: 50,
    },
    facialProportions: {
      goldenRatioScore: 70,
      symmetryScore: 85,
      proportionMap: {},
    },
  },

  eyeConfiguration: {
    color: {
      primary: '#8B4513',
      pattern: 'solid',
      depth: 70,
    },
    shape: 'almond',
    size: 50,
    spacing: 50,
    irisPattern: {
      type: 'radial',
      intensity: 60,
      detail: 50,
    },
    pupilSize: 40,
    eyelids: {
      upper: {
        fold: 'double',
        thickness: 50,
        droop: 10,
      },
      lower: {
        bags: 10,
        wrinkles: 10,
        darkness: 15,
      },
    },
    eyelashes: {
      length: 60,
      thickness: 50,
      curl: 60,
      density: 70,
    },
    eyeDepth: 50,
    eyeAngle: 5,
    sclera: {
      clarity: 90,
      color: '#FFFFFF',
      veins: 10,
    },
  },

  eyebrows: {
    shape: 'soft-arch',
    thickness: 50,
    length: 70,
    arch: {
      position: 'middle',
      height: 50,
      angle: 40,
    },
    spacing: 50,
    position: 50,
    color: '#4A3728',
    opacity: 90,
    texture: 'mixed',
    density: 70,
    asymmetry: 3,
    grayHairs: 0,
  },

  nose: {
    bridgeWidth: 45,
    bridgeHeight: 50,
    bridgeShape: 'straight',
    tip: {
      shape: 'rounded',
      width: 50,
      projection: 50,
      angle: 50,
    },
    nostrils: {
      width: 45,
      flare: 30,
      shape: 'oval',
      visibility: 40,
    },
    length: 50,
    profile: 'straight',
    asymmetry: 2,
  },

  mouthLips: {
    upperLip: {
      thickness: 45,
      cupidsBow: 'subtle',
      curve: 50,
    },
    lowerLip: {
      thickness: 50,
      fullness: 50,
    },
    width: 50,
    color: '#D4827C',
    texture: 'smooth',
    shine: 40,
    corners: {
      position: 'neutral',
      depth: 30,
    },
    philtrum: {
      length: 50,
      depth: 40,
      definition: 50,
    },
    teeth: {
      visibility: 20,
      color: '#F5F5F5',
      alignment: 'natural',
      size: 50,
    },
    lipLines: 10,
    asymmetry: 2,
  },

  hairSystem: {
    color: {
      primary: '#3D2817',
      pattern: 'solid',
    },
    texture: 'straight',
    length: {
      front: 60,
      back: 70,
      sides: 50,
      overall: 'medium',
    },
    density: 70,
    style: 'natural-flow',
    parting: 'left',
    volume: 60,
    shine: 50,
    curlPattern: {
      type: 'loose',
      definition: 30,
    },
    hairline: {
      shape: 'rounded',
      definition: 70,
    },
    grayHairs: 0,
    flyaways: 15,
  },

  skinSystem: {
    tone: {
      base: '#F5D4C1',
      undertone: 'warm',
      variation: 10,
    },
    texture: {
      smoothness: 75,
      poreSize: 30,
      poreVisibility: 25,
      oiliness: 40,
      roughness: 10,
    },
    features: {
      freckles: {
        present: false,
        density: 0,
        size: 30,
        color: '#D4A373',
        distribution: 'nose-cheeks',
      },
      moles: {
        present: false,
        locations: [],
      },
      birthmarks: {
        present: false,
        locations: [],
      },
      wrinkles: {
        foreheadLines: 5,
        crowsFeet: 5,
        smileLines: 10,
        marionette: 5,
        overall: 8,
        age: 28,
      },
    },
    complexion: 'clear',
    luminosity: 60,
    redness: 15,
  },

  bodyConfiguration: {
    build: 'average',
    height: 50,
    shoulders: {
      width: 50,
      shape: 'average',
    },
    neckLength: 50,
    neckWidth: 45,
    posture: 'upright',
    proportions: {
      shoulderToHipRatio: 1.0,
      torsoLength: 50,
    },
  },

  distinguishingFeatures: {},

  expressionPersonality: {
    defaultExpression: 'friendly',
    eyeExpression: 'warm',
    microExpressions: {
      smileAsymmetry: 5,
      eyebrowRaise: 15,
      eyeCrease: 20,
      noseScrunch: 10,
    },
    emoteRange: {
      expressiveness: 65,
      naturalness: 80,
    },
    personalityTraits: ['friendly', 'professional'],
    blinkRate: 17, // natural blink rate
    headMovement: 40,
    gestureFrequency: 30,
  },

  voiceProfile: {
    provider: 'elevenlabs',
    characteristics: {
      pitch: 'medium',
      speed: 1.0,
      tone: 'friendly',
      age: 'middle',
      gender: 'neutral',
    },
    style: {
      pacing: 'moderate',
      emphasis: 50,
      pauses: 50,
      emotion: 60,
    },
    lipSync: {
      accuracy: 'high',
      naturalnessLevel: 85,
    },
  },

  metadata: {
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    generationCount: 0,
    creationMethod: 'manual',
    consistency: {
      score: 100,
      lastChecked: new Date().toISOString(),
    },
    tags: [],
    category: 'realistic',
  },
};

/**
 * Pre-defined character templates for quick start
 */
export const CHARACTER_TEMPLATES: Record<string, Partial<CharacterDNA>> = {
  'professional-male': {
    facialStructure: {
      ...DEFAULT_DNA.facialStructure,
      faceShape: 'square',
      jawline: {
        definition: 70,
        width: 65,
        shape: 'angular',
        asymmetry: 1,
      },
    },
    expressionPersonality: {
      ...DEFAULT_DNA.expressionPersonality,
      defaultExpression: 'confident',
      personalityTraits: ['professional', 'authoritative', 'confident'],
    },
    voiceProfile: {
      ...DEFAULT_DNA.voiceProfile!,
      characteristics: {
        ...DEFAULT_DNA.voiceProfile!.characteristics,
        pitch: 'low',
        tone: 'authoritative',
        gender: 'masculine',
      },
    },
  },

  'friendly-female': {
    facialStructure: {
      ...DEFAULT_DNA.facialStructure,
      faceShape: 'heart',
      jawline: {
        definition: 45,
        width: 45,
        shape: 'soft',
        asymmetry: 2,
      },
    },
    expressionPersonality: {
      ...DEFAULT_DNA.expressionPersonality,
      defaultExpression: 'smile',
      eyeExpression: 'warm',
      personalityTraits: ['friendly', 'empathetic', 'energetic'],
    },
    voiceProfile: {
      ...DEFAULT_DNA.voiceProfile!,
      characteristics: {
        ...DEFAULT_DNA.voiceProfile!.characteristics,
        pitch: 'medium',
        tone: 'warm',
        gender: 'feminine',
      },
    },
  },

  'energetic-young': {
    skinSystem: {
      ...DEFAULT_DNA.skinSystem,
      features: {
        ...DEFAULT_DNA.skinSystem.features,
        wrinkles: {
          foreheadLines: 0,
          crowsFeet: 0,
          smileLines: 2,
          marionette: 0,
          overall: 1,
          age: 22,
        },
      },
    },
    expressionPersonality: {
      ...DEFAULT_DNA.expressionPersonality,
      defaultExpression: 'excited',
      personalityTraits: ['energetic', 'playful', 'confident'],
    },
    voiceProfile: {
      ...DEFAULT_DNA.voiceProfile!,
      characteristics: {
        ...DEFAULT_DNA.voiceProfile!.characteristics,
        pitch: 'high',
        tone: 'energetic',
        age: 'young',
      },
      style: {
        pacing: 'fast',
        emphasis: 70,
        pauses: 40,
        emotion: 80,
      },
    },
  },
};
