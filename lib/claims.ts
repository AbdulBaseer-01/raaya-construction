/*
 * Claims on hold until Texo verifies them (brief, section 16). Product data
 * is left untouched; these helpers hide the claims where they are rendered.
 *
 * TODO(Texo): once a claim is verified, remove it from these patterns and use
 * the same figure on every product and on Why Texo.
 */

import type { TechSpecRow } from '@/components/products/TechSpecs'

/** Spec rows that state wind ratings or seismic compliance. */
const ON_HOLD_SPEC_LABEL = /\b(wind|seismic)\b/i

/** "CNC" fabrication wording inside otherwise factual spec values. */
const CNC_PHRASES: [RegExp, string][] = [
  [/,?\s*(?:precision-engineered|manufactured|engineered)\s+(?:using|with)\s+CNC-controlled\s+machinery(?:\s+technology)?/gi, ''],
  [/\bCNC-(?:engineered|controlled)\s+/gi, ''],
]

export function scrubClaims(text: string) {
  let out = text
  for (const [pattern, replacement] of CNC_PHRASES) out = out.replace(pattern, replacement)
  // Re-capitalise if the sentence now starts lower-case ("mild steel…" → "Mild steel…").
  return out.replace(/^\s*([a-z])/, (_, c: string) => c.toUpperCase()).replace(/\s+\./g, '.')
}

export function visibleSpecs(rows: TechSpecRow[]) {
  return rows
    .filter((row) => !ON_HOLD_SPEC_LABEL.test(row.label) && !/seismic zone|wind speeds?/i.test(row.value))
    .map((row) => ({ ...row, value: scrubClaims(row.value) }))
}

/** "1. Construction site offices" → "Construction site offices" (the card already shows the number). */
export const stripListNumber = (heading: string) => heading.replace(/^\s*\d+[.)]\s*/, '')
