import type { HomeSliderPaginationProps } from '@widgets/HomeSlider/types'
import { type FC } from 'react'

export const HomeSliderPagination: FC<HomeSliderPaginationProps> = ({
  onGoTo,
  slidesIndex,
  selectedSlideIndex,
}) => {
  return (
    <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
      {slidesIndex.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onGoTo(index)}
          className={`h-2 w-2 rounded-full transition-colors ${
            selectedSlideIndex === index ? 'bg-primary' : 'bg-white'
          }`}
          aria-label={`Перейти к слайду ${index + 1}`}
        />
      ))}
    </div>
  )
}
