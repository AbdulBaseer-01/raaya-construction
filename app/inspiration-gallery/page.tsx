import GalleryExplorer from '@/components/gallery/GalleryExplorer'
import GalleryCta from '@/components/gallery/GalleryCta'

/* Gallery content lives in lib/galleryItems.ts. */
export default function InspirationGallery() {
  return (
    <>
      <GalleryExplorer />
      <GalleryCta />
    </>
  )
}
