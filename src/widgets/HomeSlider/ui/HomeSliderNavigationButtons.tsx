import { navigationButtonAtr } from '@widgets/HomeSlider/config/navigationButtons'
import type { HomeSliderNavigationButtonsProps } from '@widgets/HomeSlider/types'
import clsx from 'clsx'
import type { FC } from 'react'

export const HomeSliderNavigationButtons: FC<
  HomeSliderNavigationButtonsProps
> = ({ handleGoToNextClick, handleGoToPrevClick }) => {
  return (
    <>
      {navigationButtonAtr.map((button, index) => (
        <button
          key={index}
          className={clsx(
            'hover:bg-primary/20 absolute top-0 z-5 flex h-full w-16 items-center justify-center',
            button.position,
          )}
          onClick={
            button.direction === 'prev'
              ? handleGoToPrevClick
              : handleGoToNextClick
          }
        >
          <img src={button.image} alt={button.alt} />
        </button>
      ))}
    </>
  )
}
