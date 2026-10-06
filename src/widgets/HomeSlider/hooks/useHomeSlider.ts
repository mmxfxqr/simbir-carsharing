import type { EmblaCarouselType } from 'embla-carousel'
import { useEffect, useState } from 'react'

export const useHomeSlider = (emblaApi?: EmblaCarouselType) => {
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  useEffect(() => {
    if (!emblaApi) return

    const onInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
    }

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    onInit()
    onSelect()

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onInit)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onInit)
    }
  }, [emblaApi])

  const goTo = (index: number) => {
    emblaApi?.scrollTo(index)
  }

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  return {
    scrollSnaps,
    selectedIndex,
    goTo,
    goToNext,
    goToPrev,
  }
}
