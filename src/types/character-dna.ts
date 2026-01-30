/**
 * Character DNA Type System
 * Complete type definitions for ultra-realistic character generation
 * Version: 1.0
 */

// ============================================================================
// CORE IDENTITY
// ============================================================================

export interface CoreIdentity {
  id: string;
  name: string;
  age: number;
  ageRange: 'teen' | 'young-adult' | 'adult' | 'mature';
  gender: 'male' | 'female' | 'non-binary';
  ethnicity: {
    primary: 'Caucasian' | 'East Asian' | 'South Asian' | 'African' | 'Hispanic' | 'Middle Eastern' | 'Mixed';
    secondary?: string;
    skinToneHex: string;
  };
  voiceProfile?: {
    pitch: 'low' | 'medium' | 'high';
    tone: 'warm' | 'neutral' | 'cool';
    accent?: string;
  };
}

// ============================================================================
// FACIAL STRUCTURE
// ============================================================================

export interface FacialStructure {
  // Head Shape
  headShape: 'oval' | 'round' | 'square' | 'heart' | 'diamond' | 'oblong' | 'triangular';
  headWidth: number; // 1-10
  headLength: number; // 1-10

  // Face Proportions
  faceWidth: number; // 1-10
  faceLength: number; // 1-10

  // Forehead
  foreheadHeight: number; // 1-10
  foreheadWidth: number; // 1-10
  foreheadSlope: 'flat' | 'slight' | 'moderate' | 'prominent';

  // Cheekbones
  cheekboneProminence: number; // 1-10
  cheekboneHeight: 'low' | 'medium' | 'high';
  cheekboneWidth: number; // 1-10
  cheekFullness: number; // 1-10

  // Jawline
  jawShape: 'soft' | 'defined' | 'angular' | 'strong' | 'square';
  jawWidth: number; // 1-10
  jawProminence: number; // 1-10

  // Chin
  chinShape: 'round' | 'square' | 'pointed' | 'cleft' | 'protruding' | 'receding';
  chinWidth: number; // 1-10
  chinHeight: number; // 1-10
  chinProminence: number; // 1-10
}

// ============================================================================
// EYES
// ============================================================================

export interface EyeConfiguration {
  // Eye Shape & Structure
  eyeShape: 'almond' | 'round' | 'hooded' | 'monolid' | 'upturned' | 'downturned' | 'deep-set' | 'protruding';
  eyeSize: number; // 1-10
  eyeSpacing: number; // 1-10

  // Iris & Color
  irisColor: {
    primary: string; // Hex color
    secondary?: string;
    pattern: 'solid' | 'radial' | 'central-heterochromia' | 'sectoral' | 'limbal-ring';
    limbalRing: boolean;
    limbalRingIntensity: number; // 1-10
  };

  // Pupil
  pupilSize: 'small' | 'medium' | 'large';

  // Eye Whites (Sclera)
  scleraClarity: number; // 1-10
  scleraColor: string; // Hex color

  // Eyelids
  upperEyelidExposure: number; // 1-10
  lowerEyelidShape: 'straight' | 'slight-curve' | 'pronounced-curve';
  eyelidCrease: 'no-crease' | 'single' | 'double' | 'hooded';

  // Eyelashes
  upperLashLength: number; // 1-10
  upperLashThickness: number; // 1-10
  upperLashCurl: number; // 1-10
  lowerLashLength: number; // 1-10
  lowerLashThickness: number; // 1-10
  lashColor: string; // Hex color

  // Eye Expression
  eyeOpenness: number; // 1-10
  defaultGaze: 'direct' | 'slightly-averted' | 'downward' | 'upward';

  // Under-Eye
  underEyeCircles: 'none' | 'slight' | 'moderate' | 'prominent';
  underEyeCircleColor: string; // Hex color
  underEyeBags: number; // 1-10
}

// ============================================================================
// EYEBROWS
// ============================================================================

export interface EyebrowConfiguration {
  // Shape & Style
  shape: 'straight' | 'arched' | 'soft-arch' | 'angular' | 's-shaped' | 'rounded';
  arch: {
    hasArch: boolean;
    archHeight: number; // 1-10
    archPosition: 'inner' | 'middle' | 'outer';
  };

  // Dimensions
  thickness: number; // 1-10
  length: number; // 1-10
  width: number; // 1-10 (distance between brows)

  // Hair Details
  hairColor: string; // Hex color
  hairDensity: number; // 1-10
  hairDirection: 'straight-across' | 'slightly-upward' | 'feathered';
  tailThickness: number; // 1-10

  // Texture & Style
  grooming: 'natural' | 'neat' | 'groomed' | 'defined' | 'wild';
  texture: 'smooth' | 'coarse' | 'feathery';
}

// ============================================================================
// NOSE
// ============================================================================

export interface NoseConfiguration {
  // Overall Shape
  noseType: 'straight' | 'roman' | 'greek' | 'snub' | 'hawk' | 'button' | 'nubian' | 'east-asian' | 'flat';

  // Bridge
  bridgeHeight: number; // 1-10
  bridgeWidth: number; // 1-10
  bridgeShape: 'straight' | 'concave' | 'convex' | 'crooked';

  // Tip
  tipShape: 'round' | 'pointed' | 'bulbous' | 'upturned' | 'downturned' | 'flat';
  tipWidth: number; // 1-10
  tipProtrusion: number; // 1-10
  tipRotation: number; // -10 to 10

  // Nostrils
  nostrilWidth: number; // 1-10
  nostrilShape: 'round' | 'oval' | 'slit' | 'flared';
  nostrilVisibility: number; // 1-10
  nostrilFlare: number; // 1-10

  // Length & Profile
  noseLength: number; // 1-10
  columellaShow: number; // 1-10
  nasalAngle: number; // 90-120 degrees
}

// ============================================================================
// MOUTH & LIPS
// ============================================================================

export interface MouthConfiguration {
  // Lip Shape & Structure
  upperLipShape: 'thin' | 'medium' | 'full' | 'bow-shaped' | 'undefined' | 'cupids-bow';
  lowerLipShape: 'thin' | 'medium' | 'full' | 'pouty' | 'flat';

  // Lip Dimensions
  mouthWidth: number; // 1-10
  upperLipThickness: number; // 1-10
  lowerLipThickness: number; // 1-10
  lipProtrusion: number; // 1-10
  lipAsymmetry: number; // 0-10

  // Cupid's Bow
  cupidsBowDefinition: number; // 1-10
  cupidsBowPeaks: 'close' | 'medium' | 'wide';

  // Lip Color & Texture
  lipColor: {
    natural: string; // Hex color
    upperLipColor: string;
    lowerLipColor: string;
  };
  lipTexture: 'smooth' | 'slightly-textured' | 'lined' | 'chapped';
  lipMoisture: number; // 1-10

  // Mouth Features
  philtrumDepth: number; // 1-10
  philtrumLength: number; // 1-10
  lipLineDefinition: number; // 1-10

  // Teeth
  teethVisibility: 'hidden' | 'slight' | 'partial' | 'full';
  teethColor: string; // Hex color
  teethAlignment: 'perfect' | 'slight-imperfect' | 'natural-variation' | 'gap' | 'crooked';

  // Default Expression
  mouthResting: 'closed' | 'slightly-open' | 'relaxed' | 'tight';
  mouthCorners: 'neutral' | 'slightly-upturned' | 'slightly-downturned';
}

// ============================================================================
// SKIN SYSTEM (CRITICAL FOR REALISM)
// ============================================================================

export interface SkinConfiguration {
  // Base Skin Tone
  baseTone: {
    hex: string;
    undertone: 'cool' | 'warm' | 'neutral' | 'olive';
    undertoneIntensity: number; // 1-10
  };

  // Skin Texture
  texture: {
    smoothness: number; // 1-10
    poreVisibility: number; // 1-10 (ALWAYS visible)
    poreSize: 'fine' | 'medium' | 'large';
    poreDistribution: 'even' | 'concentrated-tzone' | 'concentrated-cheeks';
    hasVisiblePores: true; // ALWAYS true
    hasTextureVariation: true; // ALWAYS true
    hasMicroTexture: true; // ALWAYS true
  };

  // Skin Conditions
  freckles: {
    has: boolean;
    coverage: number; // 1-10
    distribution: 'nose-cheeks' | 'full-face' | 'scattered' | 'concentrated';
    color: string; // Hex color
    size: 'fine' | 'medium' | 'mixed';
    season: 'year-round' | 'sun-exposed';
  };

  beautyMarks: {
    has: boolean;
    positions: Array<{x: number; y: number; size: number}>;
  };

  blemishes: {
    level: 'none' | 'minimal' | 'some' | 'moderate';
    types: Array<'acne' | 'scars' | 'hyperpigmentation' | 'redness'>;
  };

  // Skin Variations
  redness: {
    level: number; // 1-10
    distribution: 'cheeks' | 'nose' | 't-zone' | 'overall';
  };

  oiliness: {
    level: number; // 1-10
    distribution: 't-zone' | 'overall' | 'patches';
  };

  // Age-Related Features
  fineLines: {
    level: 'none' | 'minimal' | 'moderate' | 'prominent';
    locations: Array<'eyes' | 'forehead' | 'smile-lines' | 'around-mouth'>;
    depth: number; // 1-10
  };

  wrinkles: {
    level: 'none' | 'minimal' | 'moderate' | 'prominent';
    type: Array<'crows-feet' | 'forehead-lines' | 'nasolabial-folds' | 'marionette-lines'>;
  };

  // Lighting Response
  lightingResponse: {
    highlight: 'subtle' | 'moderate' | 'prominent';
    highlightAreas: Array<'forehead' | 'cheekbones' | 'nose-bridge' | 'chin' | 'cupids-bow'>;
    shadowDepth: number; // 1-10
    subsurfaceScattering: number; // 1-10
  };
}

// ============================================================================
// HAIR SYSTEM
// ============================================================================

export interface HairConfiguration {
  // Hair Color
  color: {
    base: string; // Hex color
    highlights: string[];
    lowlights: string[];
    roots: string;
    hasOmbre: boolean;
    hasBalayage: boolean;
    grayPercentage: number; // 0-100
  };

  // Hair Texture
  texture: 'straight' | 'wavy' | 'curly' | 'coily' | 'kinky';
  texturePattern: '1a' | '1b' | '1c' | '2a' | '2b' | '2c' | '3a' | '3b' | '3c' | '4a' | '4b' | '4c';
  curlTightness: number; // 1-10

  // Hair Thickness & Density
  strandThickness: 'fine' | 'medium' | 'thick';
  density: number; // 1-10
  volume: number; // 1-10

  // Hair Length
  length: {
    overall: 'pixie' | 'short' | 'shoulder' | 'mid-back' | 'waist' | 'longer';
    front: number; // inches
    sides: number; // inches
    back: number; // inches
  };

  // Hairline
  hairlineShape: 'straight' | 'widows-peak' | 'rounded' | 'receding' | 'uneven';
  hairlineHeight: 'low' | 'medium' | 'high';

  // Hair Style
  style: 'loose' | 'straight' | 'blow-dried' | 'natural' | 'styled' | 'slicked' | 'messy' | 'wet-look';
  parting: 'center' | 'side-left' | 'side-right' | 'no-part' | 'zigzag';

  // Styling Details
  layers: 'no-layers' | 'light-layers' | 'heavy-layers';
  bangs: 'none' | 'blunt' | 'side-swept' | 'curtain' | 'wispy';

  // Hair Condition
  shine: number; // 1-10
  health: number; // 1-10
  flyaways: number; // 1-10
}

// ============================================================================
// FACIAL HAIR
// ============================================================================

export interface FacialHairConfiguration {
  has: boolean;
  style: 'clean-shaven' | 'stubble' | 'light-beard' | 'full-beard' | 'goatee' | 'mustache' | 'van-dyke' | 'soul-patch';

  coverage: {
    mustache: boolean;
    chin: boolean;
    jawline: boolean;
    cheeks: boolean;
    neck: boolean;
  };

  length: number; // 1-10
  thickness: number; // 1-10
  color: string; // Hex color

  grooming: 'natural' | 'trimmed' | 'shaped' | 'styled';
  texture: 'soft' | 'coarse' | 'wiry';
}

// ============================================================================
// BODY CONFIGURATION
// ============================================================================

export interface BodyConfiguration {
  // Build & Frame
  build: 'petite' | 'slim' | 'athletic' | 'average' | 'muscular' | 'heavyset' | 'plus-size';
  height: number; // centimeters

  // Proportions
  shoulderWidth: number; // 1-10
  torsoLength: number; // 1-10
  legLength: number; // 1-10

  // Posture
  posture: 'upright' | 'slightly-slouched' | 'relaxed' | 'stiff';
  shoulderPosition: 'squared' | 'relaxed' | 'rolled-forward';

  // Visible Body Parts
  neckLength: number; // 1-10
  neckThickness: number; // 1-10
  shoulderSlope: 'straight' | 'slight-slope' | 'prominent-slope';

  // Hands
  handSize: 'small' | 'medium' | 'large';
  fingerLength: 'short' | 'average' | 'long';
  nailLength: 'very-short' | 'short' | 'medium' | 'long';
  nailShape: 'square' | 'rounded' | 'almond' | 'oval';
}

// ============================================================================
// DISTINGUISHING FEATURES
// ============================================================================

export interface DistinguishingFeatures {
  birthmarks: Array<{
    location: string;
    shape: string;
    size: number;
    color: string;
  }>;

  scars: Array<{
    location: string;
    type: 'linear' | 'curved' | 'patch';
    size: number;
    visibility: number; // 1-10
    age: 'fresh' | 'healed' | 'old';
  }>;

  tattoos: Array<{
    location: string;
    description: string;
    size: number;
    color: 'black' | 'color' | 'mixed';
    visibility: number; // 1-10
  }>;

  piercings: Array<{
    location: 'ear' | 'nose' | 'eyebrow' | 'lip' | 'other';
    type: string;
    visible: boolean;
  }>;

  glasses: {
    has: boolean;
    style?: 'rectangle' | 'round' | 'cat-eye' | 'aviator' | 'oversized';
    color?: string;
  };

  jewelry: {
    has: boolean;
    items?: Array<'earrings' | 'necklace' | 'rings' | 'bracelet'>;
  };
}

// ============================================================================
// EXPRESSION & PERSONALITY
// ============================================================================

export interface ExpressionPersonality {
  // Default Facial Expression
  defaultExpression: 'neutral' | 'slight-smile' | 'serious' | 'thoughtful' | 'relaxed' | 'warm';

  eyebrowPosition: 'neutral' | 'slightly-raised' | 'relaxed' | 'furrowed';
  mouthExpression: 'neutral' | 'slight-upturn' | 'slight-downturn' | 'relaxed';

  // Personality Traits
  demeanor: 'friendly' | 'serious' | 'confident' | 'shy' | 'energetic' | 'calm' | 'mysterious';
  approachability: number; // 1-10
  confidence: number; // 1-10

  // Micro-Expressions
  eyeWarmth: number; // 1-10
  smileReach: 'eyes' | 'mouth-only' | 'full-face';
}

// ============================================================================
// PHOTOGRAPHY SETTINGS
// ============================================================================

export interface PhotographySettings {
  // Lighting Setup
  lighting: {
    type: 'natural' | 'studio' | 'soft-box' | 'ring-light' | 'golden-hour' | 'overcast' | 'indoor';
    direction: 'front' | 'side' | '45-degree' | 'butterfly' | 'rembrandt' | 'split';
    intensity: number; // 1-10
    softness: number; // 1-10
    colorTemperature: number; // Kelvin (2700-7000)
  };

  // Camera Settings
  camera: {
    lensType: '35mm' | '50mm' | '85mm' | '105mm' | 'macro';
    aperture: 'f/1.4' | 'f/1.8' | 'f/2.8' | 'f/4' | 'f/5.6';
    depthOfField: 'shallow' | 'medium' | 'deep';
    focus: 'eyes' | 'face' | 'overall';
  };

  // Shot Composition
  shotType: 'extreme-closeup' | 'closeup' | 'medium-closeup' | 'medium' | 'medium-long';
  angle: 'eye-level' | 'slight-high' | 'slight-low' | 'high' | 'low';
  framing: 'centered' | 'rule-of-thirds' | 'left' | 'right';

  // Background
  background: {
    type: 'solid' | 'gradient' | 'natural' | 'studio' | 'blurred';
    color: string; // Hex color
    blur: number; // 1-10
  };

  // Post-Processing Style
  postProcessing: {
    style: 'natural' | 'editorial' | 'commercial' | 'raw' | 'film';
    colorGrading: 'neutral' | 'warm' | 'cool' | 'desaturated' | 'vibrant';
    contrast: number; // 1-10
    sharpness: number; // 1-10
    clarity: number; // 1-10
  };
}

// ============================================================================
// COMPLETE CHARACTER DNA
// ============================================================================

export interface CharacterDNA {
  // Metadata
  version: string;
  createdAt: string;
  updatedAt: string;
  generationCount: number;

  // Core Systems
  core: CoreIdentity;
  facialStructure: FacialStructure;
  eyes: EyeConfiguration;
  eyebrows: EyebrowConfiguration;
  nose: NoseConfiguration;
  mouth: MouthConfiguration;
  skin: SkinConfiguration;
  hair: HairConfiguration;
  facialHair: FacialHairConfiguration;
  body: BodyConfiguration;
  distinguishingFeatures: DistinguishingFeatures;
  expression: ExpressionPersonality;
  photography: PhotographySettings;
}

// ============================================================================
// CONSISTENCY ANCHOR (For Multi-Angle Generation)
// ============================================================================

export interface ConsistencyAnchor {
  characterId: string;

  // Core Identifying Features
  permanentFeatures: {
    eyeIrisPattern: string;
    facialGeometry: number[]; // 68-point facial landmark ratios
    skinToneHex: string;
    uniqueMarks: string[];
  };

  // Reference Images
  referenceImages: {
    front: string; // URL
    profile: string; // URL
    threequarter: string; // URL
  };

  // Embeddings
  embeddings: {
    pineconeId: string;
    vector: number[];
  };
}

// ============================================================================
// PROMPT GENERATION
// ============================================================================

export interface GeneratedPrompt {
  // Model-Specific Prompts
  gemini: string;
  kling: string;
  runway: string;
  luma: string;

  // Negative Prompt (What to avoid)
  negativePrompt: string;

  // Technical Parameters
  parameters: {
    temperature: number;
    topP: number;
    creativityLevel: number;
    consistencyWeight: number;
  };

  // Metadata
  generatedAt: string;
  dnaVersion: string;
  promptVersion: string;
}

// ============================================================================
// SCENE CONTEXT (For Video Generation)
// ============================================================================

export interface SceneContext {
  type: 'product-demo' | 'talking-head' | 'testimonial' | 'lifestyle' | 'comparison';
  environment: 'studio' | 'home' | 'office' | 'outdoor' | 'kitchen' | 'bedroom';
  activity: 'holding-product' | 'demonstrating' | 'speaking' | 'reacting' | 'applying-product';

  // Camera Settings
  cameraAngle: 'front' | '45-left' | '45-right' | 'profile-left' | 'profile-right' | 'slight-up' | 'slight-down';
  cameraMovement: 'static' | 'slow-zoom' | 'pan' | 'dolly' | 'handheld';

  // Duration
  duration: number; // seconds
  aspectRatio: '16:9' | '9:16' | '1:1' | '4:5';
}
