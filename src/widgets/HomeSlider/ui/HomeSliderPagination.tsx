import type { HomeSliderPaginationProps } from '@widgets/HomeSlider/types'
import { useEffect, useState, type FC } from 'react'

export const HomeSliderPagination: FC<HomeSliderPaginationProps> = ({
  emblaApi,
}) => {
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

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

  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => goTo(index)}
          className={`h-2 w-2 rounded-full transition-colors  ${
            selectedIndex === index ? 'bg-primary' : 'bg-white'
          }`}
          aria-label={`Перейти к слайду ${index + 1}`}
        />
      ))}
    </div>
  )
}
