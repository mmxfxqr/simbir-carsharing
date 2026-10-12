import { useAppSelector } from '@app/store'
import {
  selectOrderCost,
  selectOrderLocation,
  selectOrderModel,
} from '@entities/Order'
import { getLastPathSegment } from '@shared/lib/getLastPathSegment'
import { ORDER_STEPS } from '@widgets/OrderInfo/config/orderSteps'
import { useLocation, useNavigate } from 'react-router-dom'

export const useOrderInfo = () => {
  const navigate = useNavigate()
  const location = useAppSelector(selectOrderLocation)
  const model = useAppSelector(selectOrderModel)
  const orderState = { location, model }
  const cost = useAppSelector(selectOrderCost)
  const { pathname } = useLocation()
  const currentPath = getLastPathSegment(pathname)

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
    handleNextStepClick,
    currentStep,
  }
}
