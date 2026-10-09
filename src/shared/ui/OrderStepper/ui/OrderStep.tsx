import clsx from 'clsx'
import type { FC } from 'react'
import stepArr from '@assets/order/step-arr.svg'
import { getLastPathSegment } from '@shared/lib/getLastPathSegment'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { OrderStepProps } from '@shared/ui/OrderStepper/types'


export const OrderStep: FC<OrderStepProps> = ({ order, isLast }) => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const currentStep = getLastPathSegment(pathname)
  

  return (
    <div className="mr-4 flex items-center gap-4">
      <h1
        className={clsx(
          'text-sm font-bold',
          currentStep === order.toLowerCase() ? 'text-primary' : 'text-gray',
        )}
      >
        {t(`${order}`)}
      </h1>
      <img src={stepArr} className={clsx('h-2 w-1.5', isLast && 'hidden')} />
    </div>
  )
}
