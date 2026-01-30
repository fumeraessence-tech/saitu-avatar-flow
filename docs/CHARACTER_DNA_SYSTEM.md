# Character DNA System - Ultra-Realistic UGC Generator
## Comprehensive Design Document

## Executive Summary

This document outlines the complete Character DNA system for SynthAvatar - a proprietary technology for generating ultra-realistic AI characters with perfect consistency across all angles, scenes, and videos. The system converts simple text descriptions into detailed JSON prompts that feed directly into AI models (Kling, Gemini, Runway, etc.).

## Core Concept

**Problem**: AI-generated characters lack consistency across different scenes, angles, and videos. Faces change, features drift, skin looks plastic.

**Solution**: Character DNA - a comprehensive 150+ attribute system that captures every detail of a character's appearance, personality, and physical traits, then automatically generates optimized prompts for AI models with multi-angle consistency.

## Reference Analysis (Based on Provided Images)

From the CAIMERA examples, we can see successful ultra-realistic characters have:

### Visual Quality Markers
- **Skin Realism**: Visible pores, natural texture, light freckles, subtle imperfections
- **Hair Authenticity**: Individual strands visible, natural movement, realistic highlights
- **Eye Detail**: Iris patterns, reflections, natural eye moisture, realistic lashes
- **Lighting**: Soft natural lighting, subtle shadows, realistic skin response to light
- **Expression**: Natural, relaxed, genuine (not overly posed)

### Prompt Engineering Patterns (From Examples)
```
"Ultra-realistic [shot type] of a [age range] [ethnicity] [gender] with [skin description],
[lighting description], [expression], [distinguishing features]. [Photography style],
[technical specs], [background], [mood]."
```

Example breakdown:
- Shot type: "close-up", "portrait", "three-quarter view"
- Skin: "luminous porcelain skin", "visible pores but healthy", "natural texture"
- Lighting: "soft natural lighting", "gentle ethereal glow", "daylight lighting with natural shadows"
- Style: "professional cosmetic photography, 8K detail"
- Background: "beige pastel background", "minimalist light beige"

---

## Character DNA Schema (150+ Attributes)

### 1. Core Identity
```typescript
interface CoreIdentity {
  id: string;
  name: string;
  age: number; // Exact age for consistency
  ageRange: 'teen' | 'young-adult' | 'adult' | 'mature'; // Visual age
  gender: 'male' | 'female' | 'non-binary';
  ethnicity: {
    primary: string; // "Caucasian", "East Asian", "South Asian", "African", "Hispanic", "Middle Eastern", "Mixed"
    secondary?: string; // For mixed ethnicity
    skinToneHex: string; // Exact hex color for consistency
  };
  voiceProfile?: {
    pitch: 'low' | 'medium' | 'high';
    tone: 'warm' | 'neutral' | 'cool';
    accent?: string;
  };
}
```

### 2. Facial Structure (Bone Structure)
```typescript
interface FacialStructure {
  // Head Shape
  headShape: 'oval' | 'round' | 'square' | 'heart' | 'diamond' | 'oblong' | 'triangular';
  headWidth: 1-10; // 1=narrow, 10=wide
  headLength: 1-10; // 1=short, 10=long

  // Face Proportions
  faceWidth: 1-10; // Overall face width
  faceLength: 1-10; // Chin to hairline

  // Forehead
  foreheadHeight: 1-10; // 1=low, 10=high
  foreheadWidth: 1-10;
  foreheadSlope: 'flat' | 'slight' | 'moderate' | 'prominent';

  // Cheekbones
  cheekboneProminence: 1-10; // 1=flat, 10=very prominent
  cheekboneHeight: 'low' | 'medium' | 'high'; // Position on face
  cheekboneWidth: 1-10;
  cheekFullness: 1-10; // Cheek fat/volume

  // Jawline
  jawShape: 'soft' | 'defined' | 'angular' | 'strong' | 'square';
  jawWidth: 1-10;
  jawProminence: 1-10;

  // Chin
  chinShape: 'round' | 'square' | 'pointed' | 'cleft' | 'protruding' | 'receding';
  chinWidth: 1-10;
  chinHeight: 1-10;
  chinProminence: 1-10; // How far it extends
}
```

### 3. Eyes (Critical for Realism)
```typescript
interface EyeConfiguration {
  // Eye Shape & Structure
  eyeShape: 'almond' | 'round' | 'hooded' | 'monolid' | 'upturned' | 'downturned' | 'deep-set' | 'protruding';
  eyeSize: 1-10; // 1=small, 10=large
  eyeSpacing: 1-10; // 1=close-set, 10=wide-set

  // Iris & Color
  irisColor: {
    primary: string; // Hex color
    secondary?: string; // For heterochromia or complex colors
    pattern: 'solid' | 'radial' | 'central-heterochromia' | 'sectoral' | 'limbal-ring';
    limbalRing: boolean; // Dark ring around iris
    limbалRingIntensity: 1-10;
  };

  // Pupil
  pupilSize: 'small' | 'medium' | 'large';

  // Eye Whites (Sclera)
  scleraClarity: 1-10; // 1=very veiny, 10=pure white
  scleraColor: string; // Usually white, but can be slightly colored

  // Eyelids
  upperEyelidExposure: 1-10; // How much lid is visible
  lowerEyelidShape: 'straight' | 'slight-curve' | 'pronounced-curve';
  eyelidCrease: 'no-crease' | 'single' | 'double' | 'hooded';

  // Eyelashes
  upperLashLength: 1-10;
  upperLashThickness: 1-10;
  upperLashCurl: 1-10; // 1=straight, 10=very curled
  lowerLashLength: 1-10;
  lowerLashThickness: 1-10;
  lashColor: string; // Hex color

  // Eye Expression
  eyeOpenness: 1-10; // Default state (1=squinted, 10=wide open)
  defaultGaze: 'direct' | 'slightly-averted' | 'downward' | 'upward';

  // Under-Eye
  underEyeCircles: 'none' | 'slight' | 'moderate' | 'prominent';
  underEyeCircleColor: string; // Hex color
  underEyeBags: 1-10;
}
```

### 4. Eyebrows (Frame the Face)
```typescript
interface EyebrowConfiguration {
  // Shape & Style
  shape: 'straight' | 'arched' | 'soft-arch' | 'angular' | 's-shaped' | 'rounded';
  arch: {
    hasArch: boolean;
    archHeight: 1-10; // How high the arch is
    archPosition: 'inner' | 'middle' | 'outer'; // Where arch peaks
  };

  // Dimensions
  thickness: 1-10; // 1=very thin, 10=very thick/bushy
  length: 1-10; // How far they extend
  width: 1-10; // Distance between brows

  // Hair Details
  hairColor: string; // Hex color
  hairDensity: 1-10; // 1=sparse, 10=very dense
  hairDirection: 'straight-across' | 'slightly-upward' | 'feathered';
  tailThickness: 1-10; // Thickness at outer end

  // Texture & Style
  grooming: 'natural' | 'neat' | 'groomed' | 'defined' | 'wild';
  texture: 'smooth' | 'coarse' | 'feathery';
}
```

### 5. Nose (Facial Anchor Point)
```typescript
interface NoseConfiguration {
  // Overall Shape
  noseType: 'straight' | 'roman' | 'greek' | 'snub' | 'hawk' | 'button' | 'nubian' | 'east-asian' | 'flat';

  // Bridge
  bridgeHeight: 1-10; // 1=flat, 10=very prominent
  bridgeWidth: 1-10; // 1=narrow, 10=wide
  bridgeShape: 'straight' | 'concave' | 'convex' | 'crooked';

  // Tip
  tipShape: 'round' | 'pointed' | 'bulbous' | 'upturned' | 'downturned' | 'flat';
  tipWidth: 1-10;
  tipProtrusion: 1-10; // How far tip extends
  tipRotation: number; // -10 to 10 (negative=downturned, positive=upturned)

  // Nostrils
  nostrilWidth: 1-10;
  nostrilShape: 'round' | 'oval' | 'slit' | 'flared';
  nostrilVisibility: 1-10; // How visible from front view
  nostrilFlare: 1-10; // Natural flare amount

  // Length & Profile
  noseLength: 1-10; // Bridge to tip
  columellaShow: 1-10; // Tissue between nostrils visibility
  nasalAngle: number; // 90-120 degrees (angle between nose and upper lip)
}
```

### 6. Mouth & Lips (Expression Center)
```typescript
interface MouthConfiguration {
  // Lip Shape & Structure
  upperLipShape: 'thin' | 'medium' | 'full' | 'bow-shaped' | 'undefined' | 'cupids-bow';
  lowerLipShape: 'thin' | 'medium' | 'full' | 'pouty' | 'flat';

  // Lip Dimensions
  mouthWidth: 1-10; // Compared to face width
  upperLipThickness: 1-10;
  lowerLipThickness: 1-10;
  lipProtrusion: 1-10; // How much lips protrude from face
  lipAsymmetry: 0-10; // 0=perfectly symmetrical, 10=noticeably asymmetrical

  // Cupid's Bow
  cupidsBowDefinition: 1-10; // 1=undefined, 10=very pronounced
  cupidsBowPeaks: 'close' | 'medium' | 'wide';

  // Lip Color & Texture
  lipColor: {
    natural: string; // Hex color
    upperLipColor: string; // Often slightly darker
    lowerLipColor: string;
  };
  lipTexture: 'smooth' | 'slightly-textured' | 'lined' | 'chapped';
  lipMoisture: 1-10; // 1=dry/matte, 10=glossy/wet

  // Mouth Features
  philtrumDepth: 1-10; // Groove between nose and upper lip
  philtrumLength: 1-10;
  lipLineDefinition: 1-10; // How defined the lip border is

  // Teeth (Visible in Smiles)
  teethVisibility: 'hidden' | 'slight' | 'partial' | 'full';
  teethColor: string; // Hex color (natural white to off-white)
  teethAlignment: 'perfect' | 'slight-imperfect' | 'natural-variation' | 'gap' | 'crooked';

  // Default Expression
  mouthResting: 'closed' | 'slightly-open' | 'relaxed' | 'tight';
  mouthCorners: 'neutral' | 'slightly-upturned' | 'slightly-downturned';
}
```

### 7. Skin System (CRITICAL FOR REALISM)
```typescript
interface SkinConfiguration {
  // Base Skin Tone
  baseTone: {
    hex: string; // Base color
    undertone: 'cool' | 'warm' | 'neutral' | 'olive';
    undertoneIntensity: 1-10;
  };

  // Skin Texture (THIS IS KEY)
  texture: {
    smoothness: 1-10; // 1=very textured, 10=very smooth (but NEVER fully smooth)
    poreVisibility: 1-10; // ALWAYS visible for realism
    poreSize: 'fine' | 'medium' | 'large';
    poreDistribution: 'even' | 'concentrated-tzone' | 'concentrated-cheeks';

    // Natural Imperfections (REQUIRED FOR REALISM)
    hasVisiblePores: true; // ALWAYS true
    hasTextureVariation: true; // ALWAYS true
    hasMicroTexture: true; // ALWAYS true
  };

  // Skin Conditions (Natural Variations)
  freckles: {
    has: boolean;
    coverage: 1-10; // 1=few, 10=many
    distribution: 'nose-cheeks' | 'full-face' | 'scattered' | 'concentrated';
    color: string; // Hex color
    size: 'fine' | 'medium' | 'mixed';
    season: 'year-round' | 'sun-exposed'; // Do they darken in sun?
  };

  beautyMarks: {
    has: boolean;
    positions: Array<{x: number, y: number, size: number}>; // Specific locations
  };

  blemishes: {
    level: 'none' | 'minimal' | 'some' | 'moderate';
    types: ('acne' | 'scars' | 'hyperpigmentation' | 'redness')[];
  };

  // Skin Variations
  redness: {
    level: 1-10;
    distribution: 'cheeks' | 'nose' | 't-zone' | 'overall';
  };

  oiliness: {
    level: 1-10; // 1=very dry, 10=very oily
    distribution: 't-zone' | 'overall' | 'patches';
  };

  // Age-Related Features
  fineLines: {
    level: 'none' | 'minimal' | 'moderate' | 'prominent';
    locations: ('eyes' | 'forehead' | 'smile-lines' | 'around-mouth')[];
    depth: 1-10;
  };

  wrinkles: {
    level: 'none' | 'minimal' | 'moderate' | 'prominent';
    type: ('crows-feet' | 'forehead-lines' | 'nasolabial-folds' | 'marionette-lines')[];
  };

  // Lighting Response (How skin reacts to light)
  lightingResponse: {
    highlight: 'subtle' | 'moderate' | 'prominent'; // How much skin reflects light
    highlightAreas: ('forehead' | 'cheekbones' | 'nose-bridge' | 'chin' | 'cupids-bow')[];
    shadowDepth: 1-10; // How pronounced shadows are
    subsurfaceScattering: 1-10; // Light penetrating skin (key for realism)
  };
}
```

### 8. Hair System (Complete Definition)
```typescript
interface HairConfiguration {
  // Hair Color
  color: {
    base: string; // Hex color
    highlights: string[]; // Array of highlight colors
    lowlights: string[]; // Array of lowlight colors
    roots: string; // Root color (if different)
    hasOmbre: boolean;
    hasBalayage: boolean;
    grayPercentage: number; // 0-100%
  };

  // Hair Texture
  texture: 'straight' | 'wavy' | 'curly' | 'coily' | 'kinky';
  texturePattern: '1a' | '1b' | '1c' | '2a' | '2b' | '2c' | '3a' | '3b' | '3c' | '4a' | '4b' | '4c';
  curlTightness: 1-10; // For wavy/curly/coily hair

  // Hair Thickness & Density
  strandThickness: 'fine' | 'medium' | 'thick';
  density: 1-10; // 1=thin/sparse, 10=very thick/dense
  volume: 1-10; // Overall volume/body

  // Hair Length
  length: {
    overall: 'pixie' | 'short' | 'shoulder' | 'mid-back' | 'waist' | 'longer';
    front: number; // Inches
    sides: number; // Inches
    back: number; // Inches
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
  shine: 1-10; // 1=matte, 10=glossy
  health: 1-10; // Overall hair health
  flyaways: 1-10; // Amount of flyaway hairs
}
```

### 9. Facial Hair (If Applicable)
```typescript
interface FacialHairConfiguration {
  has: boolean;
  style: 'clean-shaven' | 'stubble' | 'light-beard' | 'full-beard' | 'goatee' | 'mustache' | 'van-dyke' | 'soul-patch';

  coverage: {
    mustache: boolean;
    chin: boolean;
    jawline: boolean;
    cheeks: boolean;
    neck: boolean;
  };

  length: 1-10; // 1=stubble, 10=long
  thickness: 1-10; // Density
  color: string; // Hex color (may differ from head hair)

  grooming: 'natural' | 'trimmed' | 'shaped' | 'styled';
  texture: 'soft' | 'coarse' | 'wiry';
}
```

### 10. Body Configuration
```typescript
interface BodyConfiguration {
  // Build & Frame
  build: 'petite' | 'slim' | 'athletic' | 'average' | 'muscular' | 'heavyset' | 'plus-size';
  height: number; // Centimeters

  // Proportions
  shoulderWidth: 1-10;
  torsoLength: 1-10;
  legLength: 1-10;

  // Posture
  posture: 'upright' | 'slightly-slouched' | 'relaxed' | 'stiff';
  shoulderPosition: 'squared' | 'relaxed' | 'rolled-forward';

  // Visible Body Parts (for frame/shoulder shots)
  neckLength: 1-10;
  neckThickness: 1-10;
  shoulderSlope: 'straight' | 'slight-slope' | 'prominent-slope';

  // Hands (if visible)
  handSize: 'small' | 'medium' | 'large';
  fingerLength: 'short' | 'average' | 'long';
  nailLength: 'very-short' | 'short' | 'medium' | 'long';
  nailShape: 'square' | 'rounded' | 'almond' | 'oval';
}
```

### 11. Distinguishing Features (Unique Identifiers)
```typescript
interface DistinguishingFeatures {
  // Permanent Features
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
    visibility: 1-10;
    age: 'fresh' | 'healed' | 'old';
  }>;

  tattoos: Array<{
    location: string;
    description: string;
    size: number;
    color: 'black' | 'color' | 'mixed';
    visibility: 1-10;
  }>;

  piercings: Array<{
    location: 'ear' | 'nose' | 'eyebrow' | 'lip' | 'other';
    type: string;
    visible: boolean;
  }>;

  // Accessories
  glasses: {
    has: boolean;
    style?: 'rectangle' | 'round' | 'cat-eye' | 'aviator' | 'oversized';
    color?: string;
  };

  jewelry: {
    has: boolean;
    items?: ('earrings' | 'necklace' | 'rings' | 'bracelet')[];
  };
}
```

### 12. Expression & Personality (Default State)
```typescript
interface ExpressionPersonality {
  // Default Facial Expression
  defaultExpression: 'neutral' | 'slight-smile' | 'serious' | 'thoughtful' | 'relaxed' | 'warm';

  eyebrowPosition: 'neutral' | 'slightly-raised' | 'relaxed' | 'furrowed';
  mouthExpression: 'neutral' | 'slight-upturn' | 'slight-downturn' | 'relaxed';

  // Personality Traits (Influences Micro-Expressions)
  demeanor: 'friendly' | 'serious' | 'confident' | 'shy' | 'energetic' | 'calm' | 'mysterious';
  approachability: 1-10; // How approachable they appear
  confidence: 1-10; // Confidence in expressions

  // Micro-Expressions
  eyeWarmth: 1-10; // Warmth in eyes
  smileReach: 'eyes' | 'mouth-only' | 'full-face'; // Does smile reach eyes?
}
```

### 13. Photography Settings (Technical DNA)
```typescript
interface PhotographySettings {
  // Lighting Setup
  lighting: {
    type: 'natural' | 'studio' | 'soft-box' | 'ring-light' | 'golden-hour' | 'overcast' | 'indoor';
    direction: 'front' | 'side' | '45-degree' | 'butterfly' | 'rembrandt' | 'split';
    intensity: 1-10;
    softness: 1-10; // 1=hard light, 10=very soft/diffused
    colorTemperature: number; // Kelvin (2700-7000)
  };

  // Camera Settings
  camera: {
    lensType: '35mm' | '50mm' | '85mm' | '105mm' | 'macro';
    aperture: 'f/1.4' | 'f/1.8' | 'f/2.8' | 'f/4' | 'f/5.6';
    depthOfField: 'shallow' | 'medium' | 'deep'; // Background blur
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
    blur: 1-10; // Background blur amount
  };

  // Post-Processing Style
  postProcessing: {
    style: 'natural' | 'editorial' | 'commercial' | 'raw' | 'film';
    colorGrading: 'neutral' | 'warm' | 'cool' | 'desaturated' | 'vibrant';
    contrast: 1-10;
    sharpness: 1-10;
    clarity: 1-10; // Micro-contrast
  };
}
```

---

## Prompt Engineering System

### DNA-to-Prompt Conversion Architecture

```typescript
interface PromptGenerationSystem {
  // Input: Character DNA
  dna: CharacterDNA;

  // Scene Context
  scene: {
    type: 'product-demo' | 'talking-head' | 'testimonial' | 'lifestyle' | 'comparison';
    environment: 'studio' | 'home' | 'office' | 'outdoor' | 'kitchen' | 'bedroom';
    activity: 'holding-product' | 'demonstrating' | 'speaking' | 'reacting' | 'applying-product';
  };

  // Output: Structured JSON Prompt
  output: {
    // Gemini 2.0 Format
    gemini: GeminiPrompt;

    // Kling AI Format
    kling: KlingPrompt;

    // Runway Gen-3 Format
    runway: RunwayPrompt;

    // Luma AI Format
    luma: LumaPrompt;
  };
}
```

### Prompt Generation Algorithm

**Step 1: Core Description Builder**
```typescript
function buildCoreDescription(dna: CharacterDNA): string {
  const parts: string[] = [];

  // Age & Gender
  parts.push(`${dna.core.ageRange} ${dna.core.gender}`);

  // Ethnicity & Skin
  parts.push(`${dna.core.ethnicity.primary} ethnicity`);

  // Primary Features (Most Important First)
  parts.push(buildEyeDescription(dna.eyes));
  parts.push(buildHairDescription(dna.hair));
  parts.push(buildSkinDescription(dna.skin));
  parts.push(buildFaceDescription(dna.facialStructure));

  return parts.join(', ');
}
```

**Step 2: Realism Enhancers (CRITICAL)**
```typescript
function addRealismEnhancers(dna: CharacterDNA): string {
  const enhancers: string[] = [];

  // ALWAYS include these for ultra-realism
  enhancers.push('visible skin pores');
  enhancers.push('natural skin texture');
  enhancers.push('subtle skin imperfections');
  enhancers.push('realistic lighting on skin');
  enhancers.push('natural facial asymmetry');
  enhancers.push('individual hair strands visible');
  enhancers.push('natural eye moisture and reflections');

  // Conditional based on DNA
  if (dna.skin.freckles.has) {
    enhancers.push(`${dna.skin.freckles.coverage > 5 ? 'prominent' : 'light'} freckles across ${dna.skin.freckles.distribution}`);
  }

  if (dna.skin.blemishes.level !== 'none') {
    enhancers.push('natural skin blemishes');
  }

  if (dna.age > 30) {
    enhancers.push('natural fine lines');
    enhancers.push('age-appropriate skin maturity');
  }

  return enhancers.join(', ');
}
```

**Step 3: Photography/Technical Section**
```typescript
function buildTechnicalPrompt(settings: PhotographySettings): string {
  const tech: string[] = [];

  tech.push('professional photography');
  tech.push('8K resolution');
  tech.push('ultra-sharp details');
  tech.push(`${settings.lighting.type} lighting`);
  tech.push(`shot with ${settings.camera.lensType} lens`);
  tech.push(`${settings.camera.aperture} aperture`);
  tech.push(`${settings.camera.depthOfField} depth of field`);
  tech.push(`${settings.background.type} background in ${settings.background.color}`);

  return tech.join(', ');
}
```

**Step 4: Complete Prompt Assembly**
```typescript
function generateCompletePrompt(dna: CharacterDNA, scene: SceneContext): string {
  const prompt = `
    ${buildCoreDescription(dna)},
    ${buildExpressionDescription(dna.expression)},
    ${addRealismEnhancers(dna)},
    ${buildSceneContext(scene)},
    ${buildTechnicalPrompt(dna.photography)},
    NO plastic skin, NO artificial appearance, NO overly smooth skin,
    hyper-realistic, ultra-detailed, photorealistic, natural imperfections visible,
    professional cosmetic photography style
  `.trim();

  return cleanPrompt(prompt);
}
```

### Example Prompt Output

**Input DNA**: 25-year-old Caucasian female, blue eyes, brown wavy hair, light freckles

**Output Prompt**:
```
Ultra-realistic close-up portrait of a young adult female, Caucasian ethnicity,
with striking blue-green eyes featuring prominent limbal rings and natural eye moisture,
medium-length wavy brown hair with natural highlights and visible individual strands,
luminous fair skin with visible pores and natural texture, light freckles scattered
across nose and cheeks, soft almond-shaped eyes with defined double eyelids,
medium-thickness natural eyebrows with slight arch, straight nose with rounded tip,
full lips with natural pink tone, relaxed and serene expression gazing directly at camera,
visible skin pores, natural skin texture, subtle skin imperfections, realistic lighting
on skin with natural shadows and highlights, natural facial asymmetry, age-appropriate
features, shot with 85mm lens at f/1.8 aperture creating shallow depth of field,
soft natural lighting from 45-degree angle, gentle diffused light creating soft shadows,
seamless gradient background in soft beige and cream tones, professional cosmetic
photography, 8K ultra-sharp detail, clean editorial style, natural color grading,
NO plastic skin, NO artificial appearance, NO overly smooth skin, hyper-realistic,
photorealistic, natural imperfections visible
```

---

## Multi-Angle Consistency System

### The Consistency Challenge

**Problem**: AI models generate different faces when prompted for different angles.

**Solution**: Angle-aware prompting with consistency anchors

### Consistency Anchor System

```typescript
interface ConsistencyAnchor {
  // Core Identifying Features (Never Change)
  permanentFeatures: {
    eyeIrisPattern: string; // Unique iris pattern ID
    facialGeometry: Float32Array; // 68-point facial landmark ratios
    skinToneHex: string; // Exact skin color
    uniqueMarks: string[]; // Birthmarks, freckle patterns, scars
  };

  // Angle-Specific Instructions
  angleInstructions: {
    'front': string;
    '45-left': string;
    '45-right': string;
    'profile-left': string;
    'profile-right': string;
    'slight-up': string;
    'slight-down': string;
  };
}
```

### Multi-Angle Prompt Strategy

**1. Generate Reference Image (Front View)**
```typescript
async function generateReferenceImage(dna: CharacterDNA): Promise<ReferenceImage> {
  const frontViewPrompt = generateCompletePrompt(dna, {
    angle: 'front',
    expression: 'neutral',
    lighting: 'even'
  });

  const image = await aiModel.generate(frontViewPrompt);

  // Extract facial features using CV
  const features = await extractFacialFeatures(image);

  return {
    image,
    features,
    embedding: await generateEmbedding(image) // Pinecone vector
  };
}
```

**2. Generate Angle Variations with Reference**
```typescript
async function generateAngleVariation(
  dna: CharacterDNA,
  angle: string,
  referenceImage: ReferenceImage
): Promise<Image> {

  const anglePrompt = generateCompletePrompt(dna, {
    angle,
    expression: dna.expression.defaultExpression,
    lighting: dna.photography.lighting.type
  });

  // Add consistency instructions
  const enhancedPrompt = `
    ${anglePrompt},
    CRITICAL CONSISTENCY REQUIREMENTS:
    - Exact same person as reference, viewed from ${angle} angle
    - Maintain exact eye color: ${dna.eyes.irisColor.primary}
    - Maintain exact skin tone: ${dna.skin.baseTone.hex}
    - Maintain exact hair: ${dna.hair.color.base} ${dna.hair.texture}
    - Same facial structure and proportions
    - Same distinguishing features: ${extractDistinguishingFeatures(dna)}
    - Camera angle: ${angle}, all other features identical
  `;

  const image = await aiModel.generateWithReference({
    prompt: enhancedPrompt,
    referenceImage: referenceImage.image,
    consistencyWeight: 0.85 // High weight for consistency
  });

  // Verify consistency
  const consistencyScore = await verifyConsistency(image, referenceImage);

  if (consistencyScore < 0.8) {
    // Retry with adjusted prompt
    return generateAngleVariation(dna, angle, referenceImage);
  }

  return image;
}
```

---

## Node-Based Workflow System (Like Arcads)

### Node Architecture

```typescript
interface NodeType {
  // Character Node
  'character': {
    inputs: [];
    outputs: ['character-dna'];
    config: CharacterDNA;
  };

  // Scene Node
  'scene': {
    inputs: ['character-dna'];
    outputs: ['scene-config'];
    config: SceneConfiguration;
  };

  // Product Node
  'product': {
    inputs: [];
    outputs: ['product-asset'];
    config: ProductAsset;
  };

  // Script Node
  'script': {
    inputs: [];
    outputs: ['script-text'];
    config: {
      text: string;
      voiceSettings: VoiceSettings;
    };
  };

  // Composition Node
  'composition': {
    inputs: ['scene-config', 'product-asset', 'script-text'];
    outputs: ['video-config'];
    config: CompositionSettings;
  };

  // Generation Node
  'generation': {
    inputs: ['video-config'];
    outputs: ['generated-video'];
    config: GenerationSettings;
  };
}
```

### Visual Node Editor

```typescript
interface NodeEditorState {
  nodes: Node[];
  connections: Connection[];

  // Canvas
  zoom: number;
  pan: {x: number, y: number};

  // Execution
  executionOrder: string[]; // Topological sort of nodes
  executionState: Map<string, 'pending' | 'running' | 'complete' | 'error'>;
}
```

### Workflow Example: Product Demo Video

```
[Character Node] ─────> [Scene Node] ─────┐
                                           │
[Product Node] ────────────────────────────┤
                                           ├──> [Composition Node] ──> [Generation Node] ──> [Output]
[Script Node] ─────────────────────────────┤
                                           │
[Camera Movement Node] ────────────────────┘
```

---

## Implementation Plan

### Phase 1: DNA Schema & Database (Week 1)
- [ ] Create complete TypeScript types for all DNA sections
- [ ] Design PostgreSQL schema with JSONB storage for DNA
- [ ] Build Zod validators for all DNA attributes
- [ ] Create DNA defaults/presets library
- [ ] Implement DNA versioning system

### Phase 2: DNA Builder UI (Week 2)
- [ ] Design intuitive UI for 150+ attributes
- [ ] Create section-based navigation (Face, Eyes, Skin, Hair, etc.)
- [ ] Build interactive controls (sliders, color pickers, dropdowns)
- [ ] Add real-time visual feedback
- [ ] Implement DNA presets/templates
- [ ] Add DNA import/export functionality

### Phase 3: Prompt Engineering System (Week 3)
- [ ] Build DNA-to-Prompt conversion engine
- [ ] Create model-specific prompt adapters (Gemini, Kling, Runway)
- [ ] Implement realism enhancer system
- [ ] Build technical prompt generator
- [ ] Create prompt optimization algorithms
- [ ] Add prompt preview/testing

### Phase 4: Multi-Angle Consistency (Week 4)
- [ ] Implement reference image generation
- [ ] Build angle variation system with consistency anchors
- [ ] Create facial feature extraction using CV
- [ ] Implement Pinecone vector storage for embeddings
- [ ] Build consistency verification system
- [ ] Add retry logic for low consistency scores

### Phase 5: Node-Based Workflow (Week 5)
- [ ] Design node system architecture
- [ ] Build visual node editor UI
- [ ] Implement node execution engine
- [ ] Create character, scene, product, script nodes
- [ ] Build composition and generation nodes
- [ ] Add workflow templates

### Phase 6: Integration & Testing (Week 6)
- [ ] Integrate all systems
- [ ] Connect to AI models (Gemini, Kling)
- [ ] Test multi-angle generation
- [ ] Validate consistency across videos
- [ ] Optimize prompt generation
- [ ] User testing and refinement

---

## API Integration Examples

### Gemini 2.0 Flash Integration

```typescript
async function generateWithGemini(
  prompt: string,
  referenceImage?: string
): Promise<VideoOutput> {
  const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = gemini.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

  const request = {
    prompt: prompt,
    systemInstruction: `You are generating ultra-realistic video content.
      CRITICAL: Maintain photorealistic quality with visible skin pores,
      natural texture, and authentic imperfections. Never generate plastic
      or artificial-looking skin.`,
    generationConfig: {
      temperature: 0.4, // Lower for consistency
      topP: 0.8,
      topK: 40,
    },
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ],
  };

  if (referenceImage) {
    request.contents = [
      {
        role: "user",
        parts: [
          { text: prompt },
          {
            inlineData: {
              mimeType: "image/jpeg",
              data: referenceImage
            }
          }
        ]
      }
    ];
  }

  const result = await model.generateContent(request);
  return result.response;
}
```

### Kling AI Integration

```typescript
async function generateWithKling(
  dna: CharacterDNA,
  scene: SceneContext
): Promise<VideoOutput> {
  const prompt = generateCompletePrompt(dna, scene);

  const response = await fetch('https://api.klingai.com/v1/generations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.KLING_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'kling-2.6',
      prompt: prompt,
      negative_prompt: 'plastic skin, artificial appearance, overly smooth skin, CGI, cartoon, anime, illustration',
      aspect_ratio: '9:16',
      duration: 15,
      fps: 30,
      resolution: '1080p',
      creativity: 0.6, // Lower for consistency
      motion_scale: 0.7,
    }),
  });

  const data = await response.json();
  return data;
}
```

---

## Success Metrics

### Consistency Score Calculation

```typescript
function calculateConsistencyScore(
  original: Image,
  variation: Image
): number {
  const weights = {
    facialStructure: 0.25,
    eyeMatch: 0.20,
    skinTone: 0.15,
    hairMatch: 0.15,
    distinguishingFeatures: 0.15,
    overallSimilarity: 0.10,
  };

  const scores = {
    facialStructure: compareFacialGeometry(original, variation),
    eyeMatch: compareEyes(original, variation),
    skinTone: compareSkinTone(original, variation),
    hairMatch: compareHair(original, variation),
    distinguishingFeatures: compareUniqueFeatures(original, variation),
    overallSimilarity: compareEmbeddings(original, variation),
  };

  const totalScore = Object.keys(weights).reduce((sum, key) => {
    return sum + (scores[key] * weights[key]);
  }, 0);

  return totalScore;
}
```

### Target Metrics
- **Consistency Score**: >85% across all angles
- **Generation Success Rate**: >95%
- **User Satisfaction**: >4.5/5 stars
- **Realism Score**: >90% (human evaluators can't distinguish from real photos)
- **Time to First Video**: <3 minutes

---

## Next Steps

1. **Review this document** with team
2. **Prioritize features** for MVP
3. **Begin implementation** starting with Phase 1
4. **Set up testing framework** for consistency
5. **Gather reference datasets** of ultra-realistic AI images
6. **Establish quality benchmarks** against competitors

---

**Document Version**: 1.0
**Last Updated**: 2026-01-30
**Status**: Ready for Implementation
