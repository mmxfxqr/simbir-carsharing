import { RoutePath } from '@app/config/routePath'
import { useAppDispatch, useAppSelector } from '@app/store'
import {
  selectOrderTotalCost,
  selectOrderLocation,
  selectOrderCar,
  selectOrderRentDuration,
  selectOrderColor,
  selectOrderCostRange,
  selectOrderSelectedRate,
  selectOrderAdditionalServices,
  selectOrderState,
  setOrder,
  selectOrder,
  clearOrder,
} from '@entities/Order'

import { getLastPathSegment } from '@shared/lib/getLastPathSegment'
import { ORDER_STEPS } from '@widgets/OrderInfo/config/orderSteps'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useOrderInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const currentPath = getLastPathSegment(pathname)

  const dispatch = useAppDispatch()
  const orderInfo = useAppSelector(selectOrderState)
  const order = useAppSelector(selectOrder)
  const location = useAppSelector(selectOrderLocation)
  const car = useAppSelector(selectOrderCar)
  const color = useAppSelector(selectOrderColor)
  const rentDuration = useAppSelector(selectOrderRentDuration)
  const selectedRate = useAppSelector(selectOrderSelectedRate)
  const selectedAdditionalServices = useAppSelector(
    selectOrderAdditionalServices,
  )
  const totalCost = useAppSelector(selectOrderTotalCost)
  const costRange = useAppSelector(selectOrderCostRange)
  const model = car ? `${car.brand}, ${car.model}` : null
  const isOrderCreated = Boolean(order)

  const orderState = {
    location,
    model,
    color,
    rentDuration,
    selectedRate,
    selectedAdditionalServices,
  }

  const currentStep = ORDER_STEPS.find(
    (step) => getLastPathSegment(step.path) === currentPath,
  )

  const handleNextStepClick = () => {
    if (!currentStep) return
    if (currentStep.nextPath) navigate(currentStep.nextPath)
    if (currentStep.path === RoutePath.Total) {
      if (isOrderCreated) {
        handleCancelOrder()
        navigate(RoutePath.Location)

        return
      }

      handleModalOpen()
    }
  }
  const handleCreateOrder = () => {
    const orderNumber = `RU${Math.floor(100000000 + Math.random() * 900000000)}`
    console.log(`Заказ номер ${orderNumber}`)
    dispatch(setOrder({ id: orderNumber, ...orderInfo }))
    handleModalClose()
  }

  const handleCancelOrder = () => {
    dispatch(clearOrder())
  }

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return {
    isModalOpen,
    handleCreateOrder,
    handleModalClose,
    isOrderCreated,
    orderState,
    totalCost,
    costRange,
    handleNextStepClick,
    currentStep,
  }
}
