/**
 * DNA Validation System
 *
 * Comprehensive validation using Zod schemas to ensure
 * all DNA attributes are within acceptable ranges
 */

import { z } from 'zod';
import type {
  CharacterDNA,
  DNAValidationResult,
  FacialStructure,
  EyeConfiguration,
  Eyebrows,
  Nose,
  MouthLips,
  HairSystem,
  SkinSystem,
  BodyConfiguration,
  ExpressionPersonality,
  VoiceProfile,
} from '@/types/dna';
import { DEFAULT_DNA } from './defaults';

// ============================================
// ZOD SCHEMAS
// ============================================

const HexColorSchema = z
  .string()
  .regex(/^#[0-9A-F]{6}$/i, 'Must be a valid hex color');

const RangeSchema = (min = 0, max = 100) =>
  z.number().min(min).max(max);

// Facial Structure
const FacialStructureSchema = z.object({
  faceShape: z.enum([
    'oval',
    'round',
    'square',
    'heart',
    'diamond',
    'oblong',
    'triangular',
    'rectangular',
  ]),
  faceWidth: RangeSchema(),
  faceLength: RangeSchema(),
  jawline: z.object({
    definition: RangeSchema(),
    width: RangeSchema(),
    shape: z.enum(['angular', 'soft', 'prominent', 'recessed']),
    asymmetry: RangeSchema().optional(),
  }),
  cheekbones: z.object({
    prominence: RangeSchema(),
    position: z.enum(['high', 'mid', 'low']),
    definition: RangeSchema(),
    width: RangeSchema(),
  }),
  forehead: z.object({
    height: RangeSchema(),
    width: RangeSchema(),
    shape: z.enum(['flat', 'rounded', 'sloped']),
    prominence: RangeSchema(),
  }),
  chin: z.object({
    shape: z.enum(['pointed', 'rounded', 'square', 'cleft']),
    prominence: RangeSchema(),
    width: RangeSchema(),
  }),
  facialProportions: z.object({
    goldenRatioScore: RangeSchema(),
    symmetryScore: RangeSchema(),
    proportionMap: z.record(z.number()),
  }).optional(),
}) satisfies z.ZodType<FacialStructure>;

// Eye Configuration
const EyeConfigurationSchema = z.object({
  color: z.object({
    primary: HexColorSchema,
    secondary: HexColorSchema.optional(),
    pattern: z.enum(['solid', 'central-heterochromia', 'sectoral', 'limbal-ring', 'gradient']),
    depth: RangeSchema(),
  }),
  shape: z.enum([
    'almond',
    'round',
    'hooded',
    'upturned',
    'downturned',
    'monolid',
    'deep-set',
    'protruding',
  ]),
  size: RangeSchema(),
  spacing: RangeSchema(),
  irisPattern: z.object({
    type: z.enum(['radial', 'furrow', 'crypts', 'pigment-spots', 'starburst']),
    intensity: RangeSchema(),
    detail: RangeSchema(),
  }),
  pupilSize: RangeSchema(),
  eyelids: z.object({
    upper: z.object({
      fold: z.enum(['double', 'single', 'hooded', 'monolid']),
      thickness: RangeSchema(),
      droop: RangeSchema(),
    }),
    lower: z.object({
      bags: RangeSchema(),
      wrinkles: RangeSchema(),
      darkness: RangeSchema(),
    }),
  }),
  eyelashes: z.object({
    length: RangeSchema(),
    thickness: RangeSchema(),
    curl: RangeSchema(),
    density: RangeSchema(),
  }),
  eyeDepth: RangeSchema(),
  eyeAngle: RangeSchema(-50, 50),
  sclera: z.object({
    clarity: RangeSchema(),
    color: HexColorSchema,
    veins: RangeSchema(),
  }),
}) satisfies z.ZodType<EyeConfiguration>;

// Eyebrows
const EyebrowsSchema = z.object({
  shape: z.enum(['straight', 'arched', 's-shaped', 'rounded', 'flat', 'angled', 'soft-arch']),
  thickness: RangeSchema(),
  length: RangeSchema(),
  arch: z.object({
    position: z.enum(['inner', 'middle', 'outer']),
    height: RangeSchema(),
    angle: RangeSchema(),
  }),
  spacing: RangeSchema(),
  position: RangeSchema(),
  color: HexColorSchema,
  opacity: RangeSchema(),
  texture: z.enum(['fine', 'coarse', 'mixed']),
  density: RangeSchema(),
  asymmetry: RangeSchema().optional(),
  grayHairs: RangeSchema().optional(),
}) satisfies z.ZodType<Eyebrows>;

// Nose
const NoseSchema = z.object({
  bridgeWidth: RangeSchema(),
  bridgeHeight: RangeSchema(),
  bridgeShape: z.enum(['straight', 'convex', 'concave']),
  tip: z.object({
    shape: z.enum(['pointed', 'rounded', 'bulbous', 'upturned', 'downturned']),
    width: RangeSchema(),
    projection: RangeSchema(),
    angle: RangeSchema(),
  }),
  nostrils: z.object({
    width: RangeSchema(),
    flare: RangeSchema(),
    shape: z.enum(['round', 'oval', 'teardrop', 'narrow']),
    visibility: RangeSchema(),
  }),
  length: RangeSchema(),
  profile: z.enum(['straight', 'aquiline', 'button', 'roman', 'greek']),
  asymmetry: RangeSchema().optional(),
}) satisfies z.ZodType<Nose>;

// Mouth & Lips
const MouthLipsSchema = z.object({
  upperLip: z.object({
    thickness: RangeSchema(),
    cupidsBow: z.enum(['defined', 'subtle', 'flat', 'pronounced']),
    curve: RangeSchema(),
  }),
  lowerLip: z.object({
    thickness: RangeSchema(),
    fullness: RangeSchema(),
  }),
  width: RangeSchema(),
  color: HexColorSchema,
  texture: z.enum(['smooth', 'slightly-textured', 'textured']),
  shine: RangeSchema(),
  corners: z.object({
    position: z.enum(['upturned', 'neutral', 'downturned']),
    depth: RangeSchema(),
  }),
  philtrum: z.object({
    length: RangeSchema(),
    depth: RangeSchema(),
    definition: RangeSchema(),
  }),
  teeth: z.object({
    visibility: RangeSchema(),
    color: HexColorSchema,
    alignment: z.enum(['perfect', 'slight-gap', 'slight-overlap', 'natural']),
    size: RangeSchema(),
  }),
  lipLines: RangeSchema().optional(),
  asymmetry: RangeSchema().optional(),
}) satisfies z.ZodType<MouthLips>;

// Hair System
const HairSystemSchema = z.object({
  color: z.object({
    primary: HexColorSchema,
    highlights: z.array(HexColorSchema).optional(),
    lowlights: z.array(HexColorSchema).optional(),
    roots: HexColorSchema.optional(),
    pattern: z.enum(['solid', 'highlighted', 'ombre', 'balayage', 'dip-dye', 'multi-tonal']),
  }),
  texture: z.enum(['straight', 'wavy', 'curly', 'coily', 'kinky']),
  length: z.object({
    front: RangeSchema(),
    back: RangeSchema(),
    sides: RangeSchema(),
    overall: z.enum(['bald', 'buzz', 'short', 'medium', 'long', 'very-long']),
  }),
  density: RangeSchema(),
  style: z.string(),
  parting: z.enum(['center', 'left', 'right', 'none', 'zigzag']),
  volume: RangeSchema(),
  shine: RangeSchema(),
  curlPattern: z.object({
    type: z.enum(['loose', 'medium', 'tight', 'kinky']),
    definition: RangeSchema(),
  }).optional(),
  hairline: z.object({
    shape: z.enum(['straight', 'widows-peak', 'rounded', 'receding', 'high', 'low']),
    definition: RangeSchema(),
  }),
  grayHairs: RangeSchema().optional(),
  flyaways: RangeSchema().optional(),
}) satisfies z.ZodType<HairSystem>;

// Skin System
const SkinSystemSchema = z.object({
  tone: z.object({
    base: HexColorSchema,
    undertone: z.enum(['warm', 'cool', 'neutral', 'olive']),
    variation: RangeSchema(),
  }),
  texture: z.object({
    smoothness: RangeSchema(),
    poreSize: RangeSchema(),
    poreVisibility: RangeSchema(),
    oiliness: RangeSchema(),
    roughness: RangeSchema(),
  }),
  features: z.object({
    freckles: z.object({
      present: z.boolean(),
      density: RangeSchema(),
      size: RangeSchema(),
      color: HexColorSchema,
      distribution: z.enum(['nose-cheeks', 'full-face', 'scattered', 'clustered']),
    }),
    moles: z.object({
      present: z.boolean(),
      locations: z.array(z.object({
        x: RangeSchema(),
        y: RangeSchema(),
        size: RangeSchema(),
        raised: z.boolean(),
      })),
    }),
    birthmarks: z.object({
      present: z.boolean(),
      locations: z.array(z.object({
        x: RangeSchema(),
        y: RangeSchema(),
        size: RangeSchema(),
        color: HexColorSchema,
        type: z.enum(['port-wine', 'cafe-au-lait', 'mongolian-spot']),
      })),
    }),
    wrinkles: z.object({
      foreheadLines: RangeSchema(),
      crowsFeet: RangeSchema(),
      smileLines: RangeSchema(),
      marionette: RangeSchema(),
      overall: RangeSchema(),
      age: z.number().min(18).max(100),
    }),
    acne: z.object({
      severity: RangeSchema(),
      type: z.enum(['blackheads', 'whiteheads', 'cystic', 'mixed']),
      distribution: z.array(z.string()),
    }).optional(),
  }),
  complexion: z.enum(['clear', 'blemished', 'acne-prone', 'rosacea', 'even']),
  luminosity: RangeSchema(),
  redness: RangeSchema(),
}) satisfies z.ZodType<SkinSystem>;

// Body Configuration
const BodyConfigurationSchema = z.object({
  build: z.enum(['slim', 'athletic', 'average', 'muscular', 'heavy', 'petite', 'curvy']),
  height: RangeSchema(),
  shoulders: z.object({
    width: RangeSchema(),
    shape: z.enum(['narrow', 'average', 'broad', 'square', 'sloped']),
  }),
  neckLength: RangeSchema(),
  neckWidth: RangeSchema(),
  posture: z.enum(['upright', 'relaxed', 'slouched', 'athletic']),
  proportions: z.object({
    shoulderToHipRatio: z.number(),
    torsoLength: RangeSchema(),
  }),
}) satisfies z.ZodType<BodyConfiguration>;

// Expression & Personality
const ExpressionPersonalitySchema = z.object({
  defaultExpression: z.enum([
    'neutral',
    'smile',
    'serious',
    'friendly',
    'confident',
    'thoughtful',
    'excited',
    'calm',
  ]),
  eyeExpression: z.enum(['warm', 'intense', 'gentle', 'mysterious', 'playful', 'serious']),
  microExpressions: z.object({
    smileAsymmetry: RangeSchema(),
    eyebrowRaise: RangeSchema(),
    eyeCrease: RangeSchema(),
    noseScrunch: RangeSchema(),
  }),
  emoteRange: z.object({
    expressiveness: RangeSchema(),
    naturalness: RangeSchema(),
  }),
  personalityTraits: z.array(z.enum([
    'friendly',
    'professional',
    'energetic',
    'calm',
    'authoritative',
    'playful',
    'empathetic',
    'confident',
  ])),
  blinkRate: z.number().min(10).max(30),
  headMovement: RangeSchema(),
  gestureFrequency: RangeSchema(),
}) satisfies z.ZodType<ExpressionPersonality>;

// Voice Profile
const VoiceProfileSchema = z.object({
  provider: z.enum(['elevenlabs', 'playht', 'azure', 'google']),
  voiceId: z.string().optional(),
  characteristics: z.object({
    pitch: z.enum(['very-low', 'low', 'medium', 'high', 'very-high']),
    speed: z.number().min(0.5).max(2.0),
    tone: z.enum(['warm', 'neutral', 'authoritative', 'friendly', 'energetic']),
    accent: z.string().optional(),
    age: z.enum(['young', 'middle', 'mature']),
    gender: z.enum(['masculine', 'feminine', 'neutral']),
  }),
  style: z.object({
    pacing: z.enum(['slow', 'moderate', 'fast']),
    emphasis: RangeSchema(),
    pauses: RangeSchema(),
    emotion: RangeSchema(),
  }),
  audioSamples: z.array(z.string()).optional(),
  lipSync: z.object({
    accuracy: z.enum(['high', 'medium', 'low']),
    naturalnessLevel: RangeSchema(),
  }),
}) satisfies z.ZodType<VoiceProfile>;

// Full DNA Schema
const DNASchema = z.object({
  version: z.string(),
  facialStructure: FacialStructureSchema,
  eyeConfiguration: EyeConfigurationSchema,
  eyebrows: EyebrowsSchema,
  nose: NoseSchema,
  mouthLips: MouthLipsSchema,
  hairSystem: HairSystemSchema,
  skinSystem: SkinSystemSchema,
  bodyConfiguration: BodyConfigurationSchema,
  distinguishingFeatures: z.object({}).passthrough(),
  expressionPersonality: ExpressionPersonalitySchema,
  voiceProfile: VoiceProfileSchema.optional(),
  referenceImages: z.array(z.string()).optional(),
  sourcePhoto: z.string().optional(),
  metadata: z.object({
    createdAt: z.string(),
    updatedAt: z.string(),
    generationCount: z.number(),
    creationMethod: z.enum(['manual', 'photo-extraction', 'template', 'ai-generated']),
    consistency: z.object({
      score: RangeSchema(),
      lastChecked: z.string(),
    }),
    tags: z.array(z.string()).optional(),
    category: z.enum(['realistic', 'stylized', 'artistic']).optional(),
  }),
});

// ============================================
// VALIDATOR CLASS
// ============================================

export class DNAValidator {
  /**
   * Validate complete DNA structure
   */
  static validate(dna: Partial<CharacterDNA>): DNAValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];

    // Schema validation
    try {
      DNASchema.parse(dna);
    } catch (error) {
      if (error instanceof z.ZodError) {
        errors.push(...error.errors.map((e) => `${e.path.join('.')}: ${e.message}`));
      }
    }

    // Custom validation rules
    if (dna.eyeConfiguration) {
      // Check for heterochromia consistency
      if (
        dna.eyeConfiguration.color.secondary &&
        dna.eyeConfiguration.color.pattern === 'solid'
      ) {
        warnings.push('Secondary eye color defined but pattern is "solid". Did you mean to use heterochromia?');
      }

      // Eye spacing validation
      if (dna.eyeConfiguration.spacing < 30 || dna.eyeConfiguration.spacing > 70) {
        warnings.push('Eye spacing may look unnatural. Recommended range: 30-70');
      }
    }

    // Skin tone and hair color harmony
    if (dna.skinSystem && dna.hairSystem) {
      const skinTone = dna.skinSystem.tone.base;
      const hairColor = dna.hairSystem.color.primary;

      // Add harmony suggestions (simplified)
      if (skinTone && hairColor) {
        suggestions.push('Consider using the color harmony tool for optimal skin-hair combination');
      }
    }

    // Age consistency check
    if (dna.skinSystem?.features.wrinkles.age) {
      const apparentAge = dna.skinSystem.features.wrinkles.age;
      const wrinkleLevel = dna.skinSystem.features.wrinkles.overall;

      if (apparentAge < 25 && wrinkleLevel > 20) {
        warnings.push('High wrinkle level for young age. Adjust wrinkles or age for consistency');
      }

      if (apparentAge > 50 && wrinkleLevel < 30) {
        warnings.push('Low wrinkle level for mature age. Consider increasing for realism');
      }
    }

    // Voice and appearance age consistency
    if (dna.voiceProfile && dna.skinSystem) {
      const voiceAge = dna.voiceProfile.characteristics.age;
      const faceAge = dna.skinSystem.features.wrinkles.age;

      if (
        (voiceAge === 'young' && faceAge > 35) ||
        (voiceAge === 'mature' && faceAge < 45)
      ) {
        warnings.push('Voice age and facial age mismatch. Ensure consistency for realism');
      }
    }

    // Facial proportion warnings
    if (dna.facialStructure?.facialProportions) {
      const { goldenRatioScore, symmetryScore } = dna.facialStructure.facialProportions;

      if (goldenRatioScore < 40) {
        suggestions.push('Low golden ratio score. Consider adjusting facial proportions for more aesthetic appeal');
      }

      if (symmetryScore < 50) {
        suggestions.push('Low symmetry score. Most faces benefit from 70-90% symmetry');
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      suggestions,
    };
  }

  /**
   * Sanitize and merge with defaults
   */
  static sanitize(dna: Partial<CharacterDNA>): CharacterDNA {
    const sanitized: CharacterDNA = {
      ...DEFAULT_DNA,
      ...dna,
      metadata: {
        ...DEFAULT_DNA.metadata,
        ...dna.metadata,
        updatedAt: new Date().toISOString(),
      },
    };

    return sanitized;
  }

  /**
   * Quick validation (less strict, for drafts)
   */
  static quickValidate(dna: Partial<CharacterDNA>): boolean {
    try {
      // Check only required fields
      return !!(
        dna.version &&
        dna.facialStructure &&
        dna.eyeConfiguration &&
        dna.metadata
      );
    } catch {
      return false;
    }
  }

  /**
   * Validate specific DNA section
   */
  static validateSection(
    section: keyof CharacterDNA,
    data: any
  ): DNAValidationResult {
    const schemas: Record<string, z.ZodType<any>> = {
      facialStructure: FacialStructureSchema,
      eyeConfiguration: EyeConfigurationSchema,
      eyebrows: EyebrowsSchema,
      nose: NoseSchema,
      mouthLips: MouthLipsSchema,
      hairSystem: HairSystemSchema,
      skinSystem: SkinSystemSchema,
      bodyConfiguration: BodyConfigurationSchema,
      expressionPersonality: ExpressionPersonalitySchema,
      voiceProfile: VoiceProfileSchema,
    };

    const schema = schemas[section];
    if (!schema) {
      return {
        isValid: false,
        errors: [`Unknown section: ${section}`],
        warnings: [],
      };
    }

    try {
      schema.parse(data);
      return {
        isValid: true,
        errors: [],
        warnings: [],
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          isValid: false,
          errors: error.errors.map((e) => e.message),
          warnings: [],
        };
      }
      return {
        isValid: false,
        errors: ['Validation failed'],
        warnings: [],
      };
    }
  }
}
