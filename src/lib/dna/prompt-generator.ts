/**
 * DNA-to-Prompt Generation System
 * Converts Character DNA into optimized AI model prompts
 */

import {
  CharacterDNA,
  SceneContext,
  GeneratedPrompt,
  EyeConfiguration,
  HairConfiguration,
  SkinConfiguration,
  FacialStructure,
  PhotographySettings,
} from '@/types/character-dna';

// ============================================================================
// PROMPT BUILDER COMPONENTS
// ============================================================================

/**
 * Build core character description from DNA
 */
function buildCoreDescription(dna: CharacterDNA): string {
  const parts: string[] = [];

  // Age & Gender
  parts.push(`${dna.core.ageRange.replace('-', ' ')} ${dna.core.gender}`);

  // Ethnicity
  if (dna.core.ethnicity.secondary) {
    parts.push(`mixed ${dna.core.ethnicity.primary}-${dna.core.ethnicity.secondary} ethnicity`);
  } else {
    parts.push(`${dna.core.ethnicity.primary} ethnicity`);
  }

  return parts.join(', ');
}

/**
 * Build detailed eye description
 */
function buildEyeDescription(eyes: EyeConfiguration): string {
  const parts: string[] = [];

  // Eye color with details
  const colorDesc = eyes.irisColor.secondary
    ? `${eyes.irisColor.primary}-${eyes.irisColor.secondary}`
    : eyes.irisColor.primary;

  parts.push(`${colorDesc} eyes`);

  // Eye shape
  parts.push(`${eyes.eyeShape}-shaped eyes`);

  // Special features
  if (eyes.irisColor.limbalRing && eyes.irisColor.limbalRingIntensity > 5) {
    parts.push('prominent limbal rings');
  }

  // Lashes
  if (eyes.upperLashLength > 6) {
    parts.push('long eyelashes');
  }

  parts.push('natural eye moisture and reflections');

  return parts.join(' with ');
}

/**
 * Build detailed hair description
 */
function buildHairDescription(hair: HairConfiguration): string {
  const parts: string[] = [];

  // Length
  parts.push(`${hair.length.overall}-length`);

  // Texture
  parts.push(`${hair.texture} hair`);

  // Color with details
  const colorParts: string[] = [hair.color.base];
  if (hair.color.highlights.length > 0) {
    colorParts.push(`with ${hair.color.highlights.join(' and ')} highlights`);
  }
  if (hair.color.grayPercentage > 10) {
    colorParts.push(`and ${hair.color.grayPercentage}% gray`);
  }

  parts.push(colorParts.join(' '));

  // Style
  parts.push(`styled in ${hair.style} look`);

  parts.push('visible individual hair strands');

  return parts.join(', ');
}

/**
 * Build detailed skin description (CRITICAL FOR REALISM)
 */
function buildSkinDescription(skin: SkinConfiguration): string {
  const parts: string[] = [];

  // Base tone
  const undertoneMap = {
    cool: 'cool-toned',
    warm: 'warm-toned',
    neutral: 'neutral-toned',
    olive: 'olive-toned',
  };
  parts.push(`${undertoneMap[skin.baseTone.undertone]} ${skin.baseTone.hex} skin`);

  // Texture (CRITICAL)
  parts.push('visible skin pores');
  parts.push('natural skin texture');

  // Freckles
  if (skin.freckles.has) {
    const coverage = skin.freckles.coverage > 5 ? 'prominent' : 'light';
    parts.push(`${coverage} ${skin.freckles.size} freckles scattered ${skin.freckles.distribution}`);
  }

  // Blemishes (for realism)
  if (skin.blemishes.level !== 'none') {
    parts.push('natural skin imperfections');
  }

  // Age features
  if (skin.fineLines.level !== 'none') {
    parts.push(`${skin.fineLines.level} fine lines`);
  }

  // Oiliness/texture
  const oilinessDesc = skin.oiliness.level > 7 ? 'dewy' : skin.oiliness.level < 4 ? 'matte' : 'natural';
  parts.push(`${oilinessDesc} skin finish`);

  parts.push('realistic skin subsurface scattering');

  return parts.join(', ');
}

/**
 * Build facial structure description
 */
function buildFaceDescription(face: FacialStructure): string {
  const parts: string[] = [];

  // Head shape
  parts.push(`${face.headShape} face shape`);

  // Cheekbones
  if (face.cheekboneProminence > 6) {
    parts.push(`${face.cheekboneHeight} prominent cheekbones`);
  }

  // Jawline
  parts.push(`${face.jawShape} jawline`);

  // Chin
  parts.push(`${face.chinShape} chin`);

  return parts.join(' with ');
}

/**
 * Build nose description
 */
function buildNoseDescription(dna: CharacterDNA): string {
  const nose = dna.nose;
  const parts: string[] = [];

  parts.push(`${nose.noseType} nose`);

  if (nose.bridgeHeight > 6) {
    parts.push('prominent bridge');
  }

  parts.push(`${nose.tipShape} tip`);

  return parts.join(' with ');
}

/**
 * Build mouth description
 */
function buildMouthDescription(dna: CharacterDNA): string {
  const mouth = dna.mouth;
  const parts: string[] = [];

  // Lip fullness
  const upperDesc = mouth.upperLipThickness > 6 ? 'full' : mouth.upperLipThickness < 4 ? 'thin' : 'medium';
  const lowerDesc = mouth.lowerLipThickness > 6 ? 'full' : mouth.lowerLipThickness < 4 ? 'thin' : 'medium';

  parts.push(`${upperDesc} upper lip`);
  parts.push(`${lowerDesc} lower lip`);

  // Natural color
  parts.push(`natural ${mouth.lipColor.natural} tone`);

  // Texture
  parts.push(`${mouth.lipTexture} texture`);

  return parts.join(' with ');
}

/**
 * Add realism enhancers (CRITICAL)
 */
function addRealismEnhancers(dna: CharacterDNA): string {
  const enhancers: string[] = [];

  // ALWAYS include for ultra-realism
  enhancers.push('visible skin pores and texture');
  enhancers.push('natural skin imperfections');
  enhancers.push('realistic lighting and shadows on skin');
  enhancers.push('natural facial asymmetry');
  enhancers.push('individual hair strands visible');
  enhancers.push('natural eye moisture and iris detail');
  enhancers.push('subtle variations in skin tone');
  enhancers.push('realistic depth and dimension');

  // Age-appropriate
  if (dna.core.age > 30) {
    enhancers.push('age-appropriate skin maturity');
    enhancers.push('natural fine lines');
  }

  // Skin-specific
  if (dna.skin.freckles.has) {
    enhancers.push('individual freckles with varied intensity');
  }

  if (dna.skin.blemishes.level !== 'none') {
    enhancers.push('natural skin blemishes');
  }

  return enhancers.join(', ');
}

/**
 * Build photography/technical prompt
 */
function buildTechnicalPrompt(settings: PhotographySettings): string {
  const parts: string[] = [];

  // Professional quality
  parts.push('professional photography');
  parts.push('8K resolution');
  parts.push('ultra-sharp details');

  // Lighting
  parts.push(`${settings.lighting.type} lighting`);
  parts.push(`from ${settings.lighting.direction}`);
  const softnessDesc = settings.lighting.softness > 6 ? 'soft diffused' : settings.lighting.softness < 4 ? 'dramatic' : 'balanced';
  parts.push(`${softnessDesc} light quality`);

  // Camera
  parts.push(`shot with ${settings.camera.lensType} lens`);
  parts.push(`${settings.camera.aperture} aperture`);
  parts.push(`${settings.camera.depthOfField} depth of field`);
  parts.push(`focus on ${settings.camera.focus}`);

  // Shot type
  parts.push(`${settings.shotType} shot`);
  parts.push(`${settings.angle} camera angle`);

  // Background
  parts.push(`${settings.background.type} background in ${settings.background.color}`);

  // Post-processing
  parts.push(`${settings.postProcessing.style} style`);
  parts.push(`${settings.postProcessing.colorGrading} color grading`);

  return parts.join(', ');
}

/**
 * Build scene context description
 */
function buildSceneContext(scene: SceneContext): string {
  const parts: string[] = [];

  // Activity
  parts.push(scene.activity.replace(/-/g, ' '));

  // Environment
  parts.push(`in ${scene.environment} setting`);

  // Camera movement
  if (scene.cameraMovement !== 'static') {
    parts.push(`with ${scene.cameraMovement.replace(/-/g, ' ')} camera movement`);
  }

  return parts.join(', ');
}

// ============================================================================
// MAIN PROMPT GENERATOR
// ============================================================================

/**
 * Generate complete prompt from DNA
 */
export function generateCompletePrompt(
  dna: CharacterDNA,
  scene: SceneContext
): string {
  const sections: string[] = [];

  // 1. Opening statement
  sections.push('Ultra-realistic portrait of');

  // 2. Core description
  sections.push(buildCoreDescription(dna));

  // 3. Detailed features (most important first)
  sections.push(buildEyeDescription(dna.eyes));
  sections.push(buildHairDescription(dna.hair));
  sections.push(buildSkinDescription(dna.skin));
  sections.push(buildFaceDescription(dna.facialStructure));
  sections.push(buildNoseDescription(dna));
  sections.push(buildMouthDescription(dna));

  // 4. Expression
  sections.push(`${dna.expression.defaultExpression} expression`);
  sections.push(`${dna.expression.demeanor} demeanor`);

  // 5. Realism enhancers (CRITICAL)
  sections.push(addRealismEnhancers(dna));

  // 6. Scene context
  sections.push(buildSceneContext(scene));

  // 7. Technical/photography
  sections.push(buildTechnicalPrompt(dna.photography));

  // 8. Final quality statements
  sections.push('NO plastic skin, NO artificial appearance, NO overly smooth skin');
  sections.push('hyper-realistic, ultra-detailed, photorealistic');
  sections.push('natural imperfections visible');
  sections.push('professional cosmetic photography style');

  // Combine all sections
  const fullPrompt = sections.join(', ');

  // Clean up formatting
  return cleanPrompt(fullPrompt);
}

/**
 * Clean and optimize prompt
 */
function cleanPrompt(prompt: string): string {
  return prompt
    .replace(/\s+,/g, ',') // Remove space before comma
    .replace(/,\s+/g, ', ') // Normalize spacing after comma
    .replace(/,\s*,/g, ',') // Remove duplicate commas
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim();
}

/**
 * Generate negative prompt (what to avoid)
 */
export function generateNegativePrompt(dna: CharacterDNA): string {
  const negatives: string[] = [
    'plastic skin',
    'artificial appearance',
    'overly smooth skin',
    'CGI',
    'cartoon',
    'anime',
    'illustration',
    '3D render',
    'fake looking',
    'mannequin',
    'doll-like',
    'unrealistic',
    'oversaturated',
    'overexposed',
    'blurry',
    'out of focus',
    'low quality',
    'low resolution',
    'pixelated',
    'distorted features',
    'deformed',
    'mutated',
    'duplicate',
    'extra limbs',
    'bad anatomy',
    'wrong proportions',
  ];

  return negatives.join(', ');
}

// ============================================================================
// MODEL-SPECIFIC PROMPT GENERATION
// ============================================================================

/**
 * Generate prompts for all AI models
 */
export function generateModelPrompts(
  dna: CharacterDNA,
  scene: SceneContext
): GeneratedPrompt {
  const basePrompt = generateCompletePrompt(dna, scene);
  const negativePrompt = generateNegativePrompt(dna);

  return {
    // Gemini 2.0 Flash
    gemini: formatForGemini(basePrompt, dna),

    // Kling AI
    kling: formatForKling(basePrompt, dna),

    // Runway Gen-3
    runway: formatForRunway(basePrompt, dna),

    // Luma AI
    luma: formatForLuma(basePrompt, dna),

    negativePrompt,

    parameters: {
      temperature: 0.4, // Lower for consistency
      topP: 0.8,
      creativityLevel: 0.6, // Balanced
      consistencyWeight: 0.85, // High consistency
    },

    generatedAt: new Date().toISOString(),
    dnaVersion: dna.version,
    promptVersion: '1.0',
  };
}

/**
 * Format prompt for Gemini 2.0
 */
function formatForGemini(basePrompt: string, dna: CharacterDNA): string {
  return `
${basePrompt}

CRITICAL REQUIREMENTS:
- Generate ultra-realistic video content
- Maintain photorealistic quality with visible skin pores
- Natural texture and authentic imperfections
- Never generate plastic or artificial-looking skin
- Exact skin tone: ${dna.skin.baseTone.hex}
- Exact eye color: ${dna.eyes.irisColor.primary}
- Age: ${dna.core.age} years old
`.trim();
}

/**
 * Format prompt for Kling AI
 */
function formatForKling(basePrompt: string, dna: CharacterDNA): string {
  return `
${basePrompt}

Quality Requirements:
- Ultra-realistic human video generation
- Professional photography standards
- Natural skin texture with visible pores
- Consistent character features throughout
- High-resolution 1080p output
`.trim();
}

/**
 * Format prompt for Runway Gen-3
 */
function formatForRunway(basePrompt: string, dna: CharacterDNA): string {
  return `
${basePrompt}

Style: Photorealistic, professional photography
Motion: Natural, subtle movements
Quality: 4K, high detail, realistic lighting
Consistency: Maintain exact character features
`.trim();
}

/**
 * Format prompt for Luma AI
 */
function formatForLuma(basePrompt: string, dna: CharacterDNA): string {
  return `
${basePrompt}

Camera: ${dna.photography.camera.lensType}, ${dna.photography.camera.aperture}
Lighting: ${dna.photography.lighting.type}, ${dna.photography.lighting.direction}
Quality: 8K photorealistic, ultra-detailed
Style: Professional cosmetic photography
`.trim();
}

// ============================================================================
// CONSISTENCY-ENHANCED PROMPTS (Multi-Angle)
// ============================================================================

/**
 * Generate angle-specific prompt with consistency anchors
 */
export function generateAnglePrompt(
  dna: CharacterDNA,
  scene: SceneContext,
  angle: string,
  referenceFeatures?: any
): string {
  const basePrompt = generateCompletePrompt(dna, {
    ...scene,
    cameraAngle: angle as any,
  });

  // Add consistency instructions
  const consistencyInstructions = `
CRITICAL CONSISTENCY REQUIREMENTS:
- Exact same person, viewed from ${angle} angle
- Maintain exact eye color: ${dna.eyes.irisColor.primary}
- Maintain exact skin tone: ${dna.skin.baseTone.hex}
- Maintain exact hair: ${dna.hair.color.base} ${dna.hair.texture}
- Same facial structure and proportions
- Same age: ${dna.core.age} years old
- Camera angle: ${angle}, all other features identical
  `.trim();

  return `${basePrompt}\n\n${consistencyInstructions}`;
}

/**
 * Extract distinguishing features for consistency
 */
function extractDistinguishingFeatures(dna: CharacterDNA): string {
  const features: string[] = [];

  if (dna.skin.freckles.has) {
    features.push(`freckle pattern on ${dna.skin.freckles.distribution}`);
  }

  if (dna.distinguishingFeatures.birthmarks && dna.distinguishingFeatures.birthmarks.length > 0) {
    features.push('specific birthmarks');
  }

  if (dna.distinguishingFeatures.scars.length > 0) {
    features.push('visible scars');
  }

  if (dna.distinguishingFeatures.glasses.has) {
    features.push(`${dna.distinguishingFeatures.glasses.style} glasses`);
  }

  return features.join(', ');
}

// ============================================================================
// PROMPT TESTING & OPTIMIZATION
// ============================================================================

/**
 * Analyze prompt quality
 */
export function analyzePromptQuality(prompt: string): {
  score: number;
  issues: string[];
  suggestions: string[];
} {
  const issues: string[] = [];
  const suggestions: string[] = [];
  let score = 100;

  // Check length (should be detailed but not too long)
  if (prompt.length < 200) {
    issues.push('Prompt is too short, may lack detail');
    score -= 20;
  } else if (prompt.length > 2000) {
    issues.push('Prompt is very long, may confuse AI');
    score -= 10;
  }

  // Check for realism keywords
  if (!prompt.includes('realistic') && !prompt.includes('photorealistic')) {
    issues.push('Missing realism keywords');
    suggestions.push('Add "photorealistic" or "ultra-realistic"');
    score -= 15;
  }

  // Check for skin texture mentions
  if (!prompt.includes('pores') && !prompt.includes('texture')) {
    issues.push('Missing skin texture details');
    suggestions.push('Add "visible skin pores" and "natural texture"');
    score -= 15;
  }

  // Check for negative elements
  if (!prompt.includes('NO plastic')) {
    suggestions.push('Add negative prompts: "NO plastic skin, NO artificial"');
    score -= 10;
  }

  // Check for technical details
  if (!prompt.includes('8K') && !prompt.includes('4K')) {
    suggestions.push('Specify resolution: "8K resolution"');
    score -= 5;
  }

  return {
    score: Math.max(0, score),
    issues,
    suggestions,
  };
}

/**
 * Optimize prompt for better results
 */
export function optimizePrompt(prompt: string): string {
  let optimized = prompt;

  // Ensure realism keywords are prominent
  if (!optimized.startsWith('Ultra-realistic')) {
    optimized = `Ultra-realistic ${optimized}`;
  }

  // Add quality enhancers if missing
  const qualityKeywords = ['8K', '4K', 'ultra-sharp', 'high-detail'];
  const hasQuality = qualityKeywords.some(keyword => optimized.includes(keyword));
  if (!hasQuality) {
    optimized += ', 8K resolution, ultra-sharp details';
  }

  // Add negative prompts if missing
  if (!optimized.includes('NO plastic')) {
    optimized += ', NO plastic skin, NO artificial appearance';
  }

  return cleanPrompt(optimized);
}
