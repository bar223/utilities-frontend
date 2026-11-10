import { DEFAULT_IMAGE, DEFAULT_VIDEO } from '../media'

interface ImageProps { source: string; alt: string; className?: string }

export function UtilityImage({ source, alt, className }: ImageProps) {
  return <img className={className} src={source || DEFAULT_IMAGE} alt={alt}
    onError={(event) => {
      const image = event.currentTarget
      if (!image.src.endsWith(DEFAULT_IMAGE)) image.src = DEFAULT_IMAGE
    }} />
}

interface VideoProps { source: string; poster: string; name: string }

export function UtilityVideo({ source, poster, name }: VideoProps) {
  return <video key={source || DEFAULT_VIDEO} className="utility-video" controls autoPlay muted loop playsInline
    preload="metadata" poster={poster || DEFAULT_IMAGE} aria-label={`Видео: ${name}`}
    onError={(event) => {
      const video = event.currentTarget
      if (!video.src.endsWith(DEFAULT_VIDEO)) { video.src = DEFAULT_VIDEO; video.load() }
    }} src={source || DEFAULT_VIDEO} />
}
