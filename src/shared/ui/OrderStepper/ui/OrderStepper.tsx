import { orderSteps } from '../config/orderSteps'
import type { FC } from 'react'
import stepArr from '@assets/order/step-arr.svg'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { useLocation } from 'react-router-dom'
import { getLastPathSegment } from '@shared/lib/getLastPathSegment'

export const OrderStepper: FC = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const currentStep = getLastPathSegment(pathname)

  return (
    <div className="flex border-y border-[#EEE] py-2 pl-16">
      {orderSteps.map((order, index) => (
        <div className="mr-4 flex items-center gap-4" key={index}>
          <h1
            className={clsx(
              'text-sm font-bold',
              currentStep === order.toLowerCase()
                ? 'text-primary'
                : 'text-gray',
            )}
          >
            {t(`${order}`)}
          </h1>
          <img
            src={stepArr}
            className={clsx(
              'h-2 w-1.5',
              index === orderSteps.length - 1 && 'hidden',
            )}
          />
        </div>
      ))}
    </div>
  )
}
