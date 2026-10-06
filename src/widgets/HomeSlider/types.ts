export interface HomeSliderNavigationButtonsProps {
  onGoToPrevClick: () => void
  onGoToNextClick: () => void
}
export interface HomeSliderPaginationProps {
  onGoTo: (index: number) => void
  slidesIndex: number[]
  selectedSlideIndex: number
}
