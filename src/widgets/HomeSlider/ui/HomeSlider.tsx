import { slides } from '@widgets/HomeSlider/config/slides'
import { useHomeSlider } from '@widgets/HomeSlider/hooks/useHomeSlider'
import { HomeSliderNavigationButtons } from '@widgets/HomeSlider/ui/HomeSliderNavigationButtons'
import { HomeSliderPagination } from '@widgets/HomeSlider/ui/HomeSliderPagination'
import { Slide } from '@widgets/HomeSlider/ui/Slide'
import useEmblaCarousel from 'embla-carousel-react'
import type { FC } from 'react'

export const HomeSlider: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const { goTo, scrollSnaps, selectedIndex, goToNext, goToPrev } =
    useHomeSlider(emblaApi)

  return (
    <div className="relative block h-screen flex-1 max-lg:hidden">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <Slide key={slide.id} {...slide} />
          ))}
        </div>
      </div>
      <HomeSliderNavigationButtons
        onGoToNextClick={goToNext}
        onGoToPrevClick={goToPrev}
      />
      <HomeSliderPagination
        onGoTo={goTo}
        slidesIndex={scrollSnaps}
        selectedSlideIndex={selectedIndex}
      />
    </div>
  )
}
