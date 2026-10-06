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
    <div className="relative h-screen flex-1">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <Slide
              key={slide.id}
              id={slide.id}
              title={slide.title}
              desc={slide.desc}
              path={slide.path}
              buttonGradient={slide.buttonGradient}
            />
          ))}
        </div>
      </div>
      <HomeSliderNavigationButtons
        handleGoToNextClick={goToNext}
        handleGoToPrevClick={goToPrev}
      />
      <HomeSliderPagination
        handleGoTo={goTo}
        slidesIndex={scrollSnaps}
        selectedSlideIndex={selectedIndex}
      />
    </div>
  )
}
