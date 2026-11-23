import type { ImageProps } from 'next/image'
import FallbackImage from './FallbackImage'

/** The Home page image treatment: hairline frame, 5px inset, warm backing and a faint inner light border. */
export default function FramedImage({
  aspect = 'aspect-[4/3]',
  className = '',
  imageClassName = 'object-cover',
  children,
  ...image
}: Omit<ImageProps, 'fill' | 'className'> & {
  aspect?: string
  className?: string
  imageClassName?: string
  children?: React.ReactNode
}) {
  return (
    <div className={`border border-black/15 p-[5px] ${className}`}>
      <div className={`relative ${aspect} overflow-hidden bg-[#f3ede3]`}>
        <FallbackImage fill className={imageClassName} {...image} />
        <div className="pointer-events-none absolute inset-0 border border-white/30" />
        {children}
      </div>
    </div>
  )
}
