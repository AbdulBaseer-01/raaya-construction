import type { Metadata } from 'next'

/** Title + description for a page, mirrored into its link preview (Open Graph). */
export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { type: 'website', siteName: 'Texo Prefab World', title, description },
  }
}
