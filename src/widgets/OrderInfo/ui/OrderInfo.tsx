import { Button } from '@shared/ui/Button'
import { OrderCost } from './OrderCost'
import type { FC } from 'react'

import { OrderInfoList } from './OrderInfoList'
import { useOrderInfo } from '../hooks/useOrderInfo'
import { useTranslation } from 'react-i18next'

export const OrderInfo: FC = () => {
  const { t } = useTranslation()
  const { totalCost, costRange, currentStep, handleNextStepClick, orderState } =
    useOrderInfo()

  return (
    <div className="flex w-full max-w-[320px] flex-col border-l border-white pt-8 pl-8 max-sm:pl-4">
      <h1 className="text-dark mb-6.5 text-lg font-medium max-sm:mb-2 max-sm:text-sm">
        {t('Your order:')}
      </h1>
      <div>
        <OrderInfoList
          location={orderState.location}
          model={orderState.model}
          color={orderState.color}
          rentDuration={orderState.rentDuration}
          selectedRate={orderState.selectedRate}
          selectedAdditionalServices={orderState.selectedAdditionalServices}
        />

        {costRange && <OrderCost cost={totalCost ? totalCost : costRange} />}
        <Button
          className="max-xl: mx-auto w-full max-xl:max-w-36 max-xl:text-sm"
          disabled={!currentStep?.isComplete(orderState)}
          onClick={handleNextStepClick}
        >
          {t(`${currentStep?.buttonText}`)}
        </Button>
      </div>
    </div>
  )
}
