import { useAppSelector } from '@app/store'
import {
  selectOrderCost,
  selectOrderLocation,
  selectOrderCar,
  selectOrderRentDuration,
  selectOrderColor,
  selectOrderCostRange,
  selectOrderRent,
  selectOrderAdditionalServices,
} from '@entities/Order'

import { getLastPathSegment } from '@shared/lib/getLastPathSegment'
import { ORDER_STEPS } from '@widgets/OrderInfo/config/orderSteps'
import { useLocation, useNavigate } from 'react-router-dom'

export const useOrderInfo = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const currentPath = getLastPathSegment(pathname)

  const location = useAppSelector(selectOrderLocation)
  const car = useAppSelector(selectOrderCar)
  const color = useAppSelector(selectOrderColor)
  const rentDuration = useAppSelector(selectOrderRentDuration)
  const selectedRate = useAppSelector(selectOrderRent)
  const selectedAdditionalServices = useAppSelector(
    selectOrderAdditionalServices,
  )
  const model = car ? `${car.brand}, ${car.model}` : null

  const orderState = {
    location,
    model,
    color,
    rentDuration,
    selectedRate,
    selectedAdditionalServices,
  }

  const cost = useAppSelector(selectOrderCost)
  const costRange = useAppSelector(selectOrderCostRange)

  const currentStep = ORDER_STEPS.find(
    (step) => getLastPathSegment(step.path) === currentPath,
  )

  const handleNextStepClick = () => {
    if (!currentStep) return
    navigate(currentStep.nextPath)
  }

  return {
    orderState,
    cost,
    costRange,
    handleNextStepClick,
    currentStep,
  }
}
