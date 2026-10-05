import { Button } from '@shared/ui/Button'
import { slides } from '@widgets/HomeSlider/config/slides'
import { HomeSliderNavigationButtons } from '@widgets/HomeSlider/ui/HomeSliderNavigationButtons'
import { HomeSliderPagination } from '@widgets/HomeSlider/ui/HomeSliderPagination'
import useEmblaCarousel from 'embla-carousel-react'
import type { FC } from 'react'

export const HomeSlider: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  return (
    <div className="relative h-screen flex-1">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <img
                src={slide.path}
                alt={slide.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black" />

              <div className="absolute top-59.25 left-1/2 max-w-123.75 -translate-x-1/2">
                <h1 className="mb-2 text-[40px] font-medium text-white">
                  {slide.title}
                </h1>

                <p className="text-gray mb-8 text-[24px] leading-[90%] font-light">
                  {slide.desc}
                </p>

                <Button className={`w-full max-w-41 ${slide.buttonGradient}`}>
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <HomeSliderNavigationButtons emblaApi={emblaApi} />
      <HomeSliderPagination emblaApi={emblaApi} />
    </div>
  )
}
