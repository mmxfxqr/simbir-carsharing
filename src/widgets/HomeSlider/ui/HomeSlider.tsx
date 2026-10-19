import { slides } from '../config/slides'
import { useHomeSlider } from '../hooks/useHomeSlider'
import { HomeSliderNavigationButtons } from './HomeSliderNavigationButtons'
import { HomeSliderPagination } from './HomeSliderPagination'
import { Slide } from './Slide'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import type { FC } from 'react'
import { useAutoplay } from '@widgets/HomeSlider/hooks/useAutoPlay'

export const HomeSlider: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 3000 }),
  ])
  const { goTo, scrollSnaps, selectedIndex, goToNext, goToPrev } =
    useHomeSlider(emblaApi)
  const { onAutoplayButtonClick } = useAutoplay(emblaApi)

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
        onGoToNextClick={() => onAutoplayButtonClick(goToNext)}
        onGoToPrevClick={() => onAutoplayButtonClick(goToPrev)}
      />
      <HomeSliderPagination
        onGoTo={goTo}
        slidesIndex={scrollSnaps}
        selectedSlideIndex={selectedIndex}
      />
    </div>
  )
}
