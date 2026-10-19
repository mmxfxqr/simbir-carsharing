import { useCallback, useEffect, useRef, useState } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'

const AUTOPLAY_RESUME_DELAY = 10_000

type UseAutoplayType = {
  autoplayIsPlaying: boolean
  onAutoplayButtonClick: (callback: () => void) => void
}

export const useAutoplay = (
  emblaApi: EmblaCarouselType | undefined,
): UseAutoplayType => {
  const [autoplayIsPlaying, setAutoplayIsPlaying] = useState(false)

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onAutoplayButtonClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return

      autoplay.stop()
      callback()

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        autoplay.play()
      }, AUTOPLAY_RESUME_DELAY)
    },
    [emblaApi],
  )

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const onPlay = () => setAutoplayIsPlaying(true)
    const onStop = () => setAutoplayIsPlaying(false)
    const onReInit = () => setAutoplayIsPlaying(autoplay.isPlaying())

    setAutoplayIsPlaying(autoplay.isPlaying())
    emblaApi
      .on('autoplay:play', onPlay)
      .on('autoplay:stop', onStop)
      .on('reInit', onReInit)

    return () => {
      emblaApi
        .off('autoplay:play', onPlay)
        .off('autoplay:stop', onStop)
        .off('reInit', onReInit)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [emblaApi])

  return {
    autoplayIsPlaying,
    onAutoplayButtonClick,
  }
}
