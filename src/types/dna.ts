/**
 * SynthAvatar Character DNA System
 *
 * Comprehensive type definitions for the proprietary Character DNA engine
 * that ensures ultra-realistic, consistent AI avatars across all generations.
 *
 * Features:
 * - 100+ facial attributes for precision
 * - Photo-to-DNA extraction support
 * - Voice cloning integration
 * - Expression and personality mapping
 */

// ============================================
// MAIN DNA INTERFACE
// ============================================

export interface CharacterDNA {
  version: string; // "1.0"

  // Core DNA Sections
  facialStructure: FacialStructure;
  eyeConfiguration: EyeConfiguration;
  eyebrows: Eyebrows;
  nose: Nose;
  mouthLips: MouthLips;
  hairSystem: HairSystem;
  skinSystem: SkinSystem;
  bodyConfiguration: BodyConfiguration;
  distinguishingFeatures: DistinguishingFeatures;
  expressionPersonality: ExpressionPersonality;

  // Voice System (for realistic talking avatars)
  voiceProfile?: VoiceProfile;

  // Reference data
  referenceImages?: string[]; // URLs to ground truth images
  sourcePhoto?: string; // Original photo if created from image

  // Metadata
  metadata: DNAMetadata;
}

// ============================================
// FACIAL STRUCTURE
// ============================================

export interface FacialStructure {
  faceShape: FaceShape;
  faceWidth: number; // 0-100
  faceLength: number; // 0-100

  jawline: {
    definition: number; // 0-100 (soft to sharp)
    width: number; // 0-100
    shape: 'angular' | 'soft' | 'prominent' | 'recessed';
    asymmetry?: number; // 0-100 for natural variation
  };

  cheekbones: {
    prominence: number; // 0-100
    position: 'high' | 'mid' | 'low';
    definition: number; // 0-100
    width: number; // 0-100
  };

  forehead: {
    height: number; // 0-100
    width: number; // 0-100
    shape: 'flat' | 'rounded' | 'sloped';
    prominence: number; // 0-100
  };

  chin: {
    shape: 'pointed' | 'rounded' | 'square' | 'cleft';
    prominence: number; // 0-100
    width: number; // 0-100
  };

  // Overall facial proportions (golden ratio compliance)
  facialProportions?: {
    goldenRatioScore: number; // 0-100
    symmetryScore: number; // 0-100
    proportionMap: Record<string, number>;
  };
}

export type FaceShape =
  | 'oval'
  | 'round'
  | 'square'
  | 'heart'
  | 'diamond'
  | 'oblong'
  | 'triangular'
  | 'rectangular';

// ============================================
// EYE CONFIGURATION
// ============================================

export interface EyeConfiguration {
  color: {
    primary: string; // hex color
    secondary?: string; // for heterochromia
    pattern: 'solid' | 'central-heterochromia' | 'sectoral' | 'limbal-ring' | 'gradient';
    depth: number; // 0-100 (color intensity)
  };

  shape: EyeShape;
  size: number; // 0-100
  spacing: number; // 0-100 (distance between eyes)

  irisPattern: {
    type: 'radial' | 'furrow' | 'crypts' | 'pigment-spots' | 'starburst';
    intensity: number; // 0-100
    detail: number; // 0-100
  };

  pupilSize: number; // 0-100

  eyelids: {
    upper: {
      fold: 'double' | 'single' | 'hooded' | 'monolid';
      thickness: number; // 0-100
      droop: number; // 0-100
    };
    lower: {
      bags: number; // 0-100
      wrinkles: number; // 0-100
      darkness: number; // 0-100 (under-eye circles)
    };
  };

  eyelashes: {
    length: number; // 0-100
    thickness: number; // 0-100
    curl: number; // 0-100
    density: number; // 0-100
  };

  eyeDepth: number; // 0-100 (protruding to deep-set)
  eyeAngle: number; // -50 to 50 (downturned to upturned)

  // Sclera (white of eye)
  sclera: {
    clarity: number; // 0-100
    color: string; // typically white, but can have tints
    veins: number; // 0-100 (visibility)
  };
}

export type EyeShape =
  | 'almond'
  | 'round'
  | 'hooded'
  | 'upturned'
  | 'downturned'
  | 'monolid'
  | 'deep-set'
  | 'protruding';

// ============================================
// EYEBROWS
// ============================================

export interface Eyebrows {
  shape: BrowShape;
  thickness: number; // 0-100
  length: number; // 0-100

  arch: {
    position: 'inner' | 'middle' | 'outer';
    height: number; // 0-100 (subtle to dramatic)
    angle: number; // 0-100
  };

  spacing: number; // 0-100 (gap between brows)
  position: number; // 0-100 (low to high on forehead)

  color: string; // hex color
  opacity: number; // 0-100
  texture: 'fine' | 'coarse' | 'mixed';
  density: number; // 0-100 (sparse to full)

  // Natural variations
  asymmetry?: number; // 0-100
  grayHairs?: number; // 0-100
}

export type BrowShape =
  | 'straight'
  | 'arched'
  | 's-shaped'
  | 'rounded'
  | 'flat'
  | 'angled'
  | 'soft-arch';

// ============================================
// NOSE
// ============================================

export interface Nose {
  // Bridge
  bridgeWidth: number; // 0-100
  bridgeHeight: number; // 0-100
  bridgeShape: 'straight' | 'convex' | 'concave';

  // Tip
  tip: {
    shape: 'pointed' | 'rounded' | 'bulbous' | 'upturned' | 'downturned';
    width: number; // 0-100
    projection: number; // 0-100
    angle: number; // 0-100
  };

  // Nostrils
  nostrils: {
    width: number; // 0-100
    flare: number; // 0-100
    shape: 'round' | 'oval' | 'teardrop' | 'narrow';
    visibility: number; // 0-100
  };

  // Overall
  length: number; // 0-100
  profile: 'straight' | 'aquiline' | 'button' | 'roman' | 'greek';
  asymmetry?: number; // 0-100
}

// ============================================
// MOUTH & LIPS
// ============================================

export interface MouthLips {
  upperLip: {
    thickness: number; // 0-100
    cupidsBow: 'defined' | 'subtle' | 'flat' | 'pronounced';
    curve: number; // 0-100
  };

  lowerLip: {
    thickness: number; // 0-100
    fullness: number; // 0-100
  };

  width: number; // 0-100
  color: string; // hex color (natural lip color)
  texture: 'smooth' | 'slightly-textured' | 'textured';
  shine: number; // 0-100

  corners: {
    position: 'upturned' | 'neutral' | 'downturned';
    depth: number; // 0-100
  };

  philtrum: {
    length: number; // 0-100
    depth: number; // 0-100
    definition: number; // 0-100
  };

  teeth: {
    visibility: number; // 0-100
    color: string; // hex color
    alignment: 'perfect' | 'slight-gap' | 'slight-overlap' | 'natural';
    size: number; // 0-100
  };

  lipLines?: number; // 0-100 (vertical lines on lips)
  asymmetry?: number; // 0-100
}

// ============================================
// HAIR SYSTEM
// ============================================

export interface HairSystem {
  color: {
    primary: string; // hex color
    highlights?: string[];
    lowlights?: string[];
    roots?: string; // for root color if different
    pattern: 'solid' | 'highlighted' | 'ombre' | 'balayage' | 'dip-dye' | 'multi-tonal';
  };

  texture: HairTexture;

  length: {
    front: number; // 0-100
    back: number; // 0-100
    sides: number; // 0-100
    overall: HairLength;
  };

  density: number; // 0-100
  style: string; // e.g., "long-flowing", "short-pixie", "bob", "buzz"
  parting: 'center' | 'left' | 'right' | 'none' | 'zigzag';
  volume: number; // 0-100
  shine: number; // 0-100

  curlPattern?: {
    type: 'loose' | 'medium' | 'tight' | 'kinky';
    definition: number; // 0-100
  };

  hairline: {
    shape: 'straight' | 'widows-peak' | 'rounded' | 'receding' | 'high' | 'low';
    definition: number; // 0-100
  };

  grayHairs?: number; // 0-100
  flyaways?: number; // 0-100
}

export type HairTexture =
  | 'straight'
  | 'wavy'
  | 'curly'
  | 'coily'
  | 'kinky';

export type HairLength =
  | 'bald'
  | 'buzz'
  | 'short'
  | 'medium'
  | 'long'
  | 'very-long';

// ============================================
// SKIN SYSTEM
// ============================================

export interface SkinSystem {
  tone: {
    base: string; // hex color
    undertone: 'warm' | 'cool' | 'neutral' | 'olive';
    variation: number; // 0-100 (natural color variation)
  };

  texture: {
    smoothness: number; // 0-100
    poreSize: number; // 0-100
    poreVisibility: number; // 0-100
    oiliness: number; // 0-100
    roughness: number; // 0-100
  };

  features: {
    freckles: {
      present: boolean;
      density: number; // 0-100
      size: number; // 0-100
      color: string; // hex color
      distribution: 'nose-cheeks' | 'full-face' | 'scattered' | 'clustered';
    };

    moles: {
      present: boolean;
      locations: Array<{
        x: number; // 0-100 (% from left)
        y: number; // 0-100 (% from top)
        size: number; // 0-100
        raised: boolean;
      }>;
    };

    birthmarks: {
      present: boolean;
      locations: Array<{
        x: number;
        y: number;
        size: number;
        color: string;
        type: 'port-wine' | 'cafe-au-lait' | 'mongolian-spot';
      }>;
    };

    wrinkles: {
      foreheadLines: number; // 0-100
      crowsFeet: number; // 0-100
      smileLines: number; // 0-100 (nasolabial folds)
      marionette: number; // 0-100
      overall: number; // 0-100
      age: number; // apparent age from wrinkles
    };

    acne?: {
      severity: number; // 0-100
      type: 'blackheads' | 'whiteheads' | 'cystic' | 'mixed';
      distribution: string[];
    };
  };

  complexion: 'clear' | 'blemished' | 'acne-prone' | 'rosacea' | 'even';
  luminosity: number; // 0-100 (natural glow)
  redness: number; // 0-100
}

// ============================================
// BODY CONFIGURATION
// ============================================

export interface BodyConfiguration {
  build: BodyBuild;
  height: number; // 0-100 (relative scale)

  shoulders: {
    width: number; // 0-100
    shape: 'narrow' | 'average' | 'broad' | 'square' | 'sloped';
  };

  neckLength: number; // 0-100
  neckWidth: number; // 0-100

  posture: 'upright' | 'relaxed' | 'slouched' | 'athletic';

  proportions: {
    shoulderToHipRatio: number;
    torsoLength: number; // 0-100
  };
}

export type BodyBuild =
  | 'slim'
  | 'athletic'
  | 'average'
  | 'muscular'
  | 'heavy'
  | 'petite'
  | 'curvy';

// ============================================
// DISTINGUISHING FEATURES
// ============================================

export interface DistinguishingFeatures {
  facialHair?: {
    type: 'beard' | 'mustache' | 'goatee' | 'stubble' | 'full' | 'van-dyke';
    length: number; // 0-100
    thickness: number; // 0-100
    density: number; // 0-100
    color: string; // hex color
    style?: string;
    grooming: 'neat' | 'natural' | 'unkempt';
  };

  glasses?: {
    type: 'reading' | 'sunglasses' | 'prescription' | 'fashion';
    frameShape: 'round' | 'square' | 'cat-eye' | 'aviator' | 'rectangular' | 'oval';
    frameColor: string; // hex color
    frameThickness: number; // 0-100
    lensType: 'clear' | 'tinted' | 'transition' | 'blue-light';
    size: number; // 0-100
  };

  piercings?: Array<{
    location: 'nose' | 'ear' | 'eyebrow' | 'lip' | 'tongue';
    type: 'stud' | 'ring' | 'bar' | 'hoop';
    material: 'gold' | 'silver' | 'titanium' | 'other';
    count: number;
  }>;

  tattoos?: Array<{
    location: string;
    size: 'small' | 'medium' | 'large' | 'sleeve';
    description: string;
    visibility: number; // 0-100
    colorType: 'black-gray' | 'color' | 'mixed';
  }>;

  scars?: Array<{
    location: string;
    size: number; // 0-100
    visibility: number; // 0-100
    type: 'surgical' | 'acne' | 'accident' | 'other';
  }>;

  dimples?: {
    cheek: boolean;
    chin: boolean;
    depth: number; // 0-100
    visibility: number; // 0-100 (how prominent when smiling)
  };
}

// ============================================
// EXPRESSION & PERSONALITY
// ============================================

export interface ExpressionPersonality {
  defaultExpression: Expression;
  eyeExpression: 'warm' | 'intense' | 'gentle' | 'mysterious' | 'playful' | 'serious';

  microExpressions: {
    smileAsymmetry: number; // 0-100
    eyebrowRaise: number; // 0-100
    eyeCrease: number; // 0-100
    noseScrunch: number; // 0-100
  };

  emoteRange: {
    expressiveness: number; // 0-100 (subtle to very expressive)
    naturalness: number; // 0-100
  };

  personalityTraits: PersonalityTrait[];

  // Animation preferences
  blinkRate: number; // blinks per minute
  headMovement: number; // 0-100 (subtle to animated)
  gestureFrequency: number; // 0-100
}

export type Expression =
  | 'neutral'
  | 'smile'
  | 'serious'
  | 'friendly'
  | 'confident'
  | 'thoughtful'
  | 'excited'
  | 'calm';

export type PersonalityTrait =
  | 'friendly'
  | 'professional'
  | 'energetic'
  | 'calm'
  | 'authoritative'
  | 'playful'
  | 'empathetic'
  | 'confident';

// ============================================
// VOICE PROFILE (Voice Cloning)
// ============================================

export interface VoiceProfile {
  // Voice cloning provider
  provider: 'elevenlabs' | 'playht' | 'azure' | 'google';
  voiceId?: string; // Cloned voice ID from provider

  // Voice characteristics (for matching or custom generation)
  characteristics: {
    pitch: 'very-low' | 'low' | 'medium' | 'high' | 'very-high';
    speed: number; // 0.5-2.0 (multiplier)
    tone: 'warm' | 'neutral' | 'authoritative' | 'friendly' | 'energetic';
    accent?: string; // e.g., "american", "british", "australian"
    age: 'young' | 'middle' | 'mature';
    gender: 'masculine' | 'feminine' | 'neutral';
  };

  // Speaking style
  style: {
    pacing: 'slow' | 'moderate' | 'fast';
    emphasis: number; // 0-100
    pauses: number; // 0-100 (natural pause frequency)
    emotion: number; // 0-100 (emotional expression)
  };

  // Audio samples for voice cloning
  audioSamples?: string[]; // URLs to voice samples

  // Lip sync configuration
  lipSync: {
    accuracy: 'high' | 'medium' | 'low';
    naturalnessLevel: number; // 0-100
  };
}

// ============================================
// METADATA
// ============================================

export interface DNAMetadata {
  createdAt: string; // ISO-8601
  updatedAt: string;
  generationCount: number;

  // Creation method
  creationMethod: 'manual' | 'photo-extraction' | 'template' | 'ai-generated';

  // Quality scores
  consistency: {
    score: number; // 0-100
    lastChecked: string; // ISO-8601
  };

  // Tags for organization
  tags?: string[];
  category?: 'realistic' | 'stylized' | 'artistic';
}

// ============================================
// PHOTO-TO-DNA EXTRACTION
// ============================================

export interface PhotoAnalysisResult {
  dna: Partial<CharacterDNA>;
  confidence: number; // 0-100
  detectedFeatures: {
    face: boolean;
    eyes: boolean;
    nose: boolean;
    mouth: boolean;
    hair: boolean;
  };
  qualityScore: number; // 0-100
  recommendations?: string[];
  warnings?: string[];
}

export interface PhotoExtractionOptions {
  enhanceDetails: boolean; // Use AI to enhance feature extraction
  generateVariations: boolean; // Generate slight variations for uniqueness
  matchSkinTone: boolean; // Precisely match skin tone from photo
  preserveSymmetry: boolean; // Maintain facial symmetry or natural asymmetry
}

// ============================================
// DNA VALIDATION
// ============================================

export interface DNAValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  suggestions?: string[];
}

// ============================================
// DNA COMPARISON
// ============================================

export interface DNAComparisonResult {
  similarityScore: number; // 0-100
  differences: Array<{
    section: keyof CharacterDNA;
    attribute: string;
    difference: number; // percentage
  }>;
  isMatch: boolean; // true if similarity > threshold
}

// ============================================
// HELPER TYPES
// ============================================

export type DNASection = keyof Omit<CharacterDNA, 'version' | 'metadata' | 'referenceImages' | 'sourcePhoto' | 'voiceProfile'>;

export type PartialDNA = Partial<CharacterDNA>;
