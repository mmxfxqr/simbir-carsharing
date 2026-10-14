import { useAppDispatch, useAppSelector } from '@app/store'
import type { CarColor } from '@entities/Car/types'
import {
  selectOrderColorCost,
  selectOrderCost,
  setColorCost,
  setCost,
  setSelectedColor,
} from '@entities/Order'
import type { TFunction } from 'i18next'
import { useState } from 'react'

export const useConfigurationColorList = (t: TFunction, colors: CarColor[]) => {
  const dispatch = useAppDispatch()
  const cost = useAppSelector(selectOrderCost)
  const colorCost = useAppSelector(selectOrderColorCost)
  const [selectedFilter, setSelectedFilter] = useState<string>('')
  const colorOptions = [t('Any'), ...colors.map((color) => color.name)]
  const handleRadioClick = (color: string) => {
    setSelectedFilter(color)
    dispatch(setSelectedColor(color))
    dispatchCost(color)
  }
  const dispatchCost = (color: string) => {
    const colorObj = colors.find((c) => c.name === color)
    if (colorObj && cost) {
      dispatch(setColorCost(colorObj.extraCost))
      dispatch(setCost(cost - (colorCost ?? 0) + colorObj.extraCost))
    }
  }

  return {
    selectedFilter,
    colorOptions,
    handleRadioClick,
  }
}
