import type { HomeSliderNavigationButtonsProps } from '@widgets/HomeSlider/types'
import type { FC } from 'react'

export const HomeSliderNavigationButtons: FC<
  HomeSliderNavigationButtonsProps
> = ({ emblaApi }) => {
  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  return (
    <>
      <button
        className="hover:bg-primary/20 absolute top-0 left-0 z-5 flex h-full w-16 items-center justify-center"
        onClick={goToPrev}
      >
        <img src="/slider/left.svg" alt="Назад" />
      </button>

      <button
        className="hover:bg-primary/20 absolute top-0 right-0 z-5 flex h-full w-16 items-center justify-center"
        onClick={goToNext}
      >
        <img src="/slider/right.svg" alt="Вперёд" />
      </button>
    </>
  )
}
