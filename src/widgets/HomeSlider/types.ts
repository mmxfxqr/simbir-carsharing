export interface HomeSliderNavigationButtonsProps {
  handleGoToPrevClick: () => void
  handleGoToNextClick: () => void
}
export interface HomeSliderPaginationProps {
  handleGoTo: (index: number) => void
  slidesIndex: number[]
  selectedSlideIndex: number
}
