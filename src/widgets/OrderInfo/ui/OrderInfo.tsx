import { Button } from '@shared/ui/Button'
import { OrderCost } from '@widgets/OrderInfo/ui/OrderCost'
import type { FC } from 'react'

import { OrderInfoList } from '@widgets/OrderInfo/ui/OrderInfoList'
import { useOrderInfo } from '@widgets/OrderInfo/hooks/useOrderInfo'
import { useTranslation } from 'react-i18next'

export const OrderInfo: FC = () => {
  const { t } = useTranslation()
  const { cost, currentStep, handleNextStepClick, orderState } = useOrderInfo()

  return (
    <div className="flex w-full max-w-[320px] flex-col border-l border-white pt-8 pl-8">
      <h1 className="text-dark mb-6.5 text-[18px] font-medium">
        {t('Your order:')}
      </h1>
      <div>
        <OrderInfoList
          location={orderState.location}
          model={orderState.model}
        />

        {cost && <OrderCost cost={cost} />}
        <Button
          className="w-full"
          disabled={!currentStep?.isComplete(orderState)}
          onClick={handleNextStepClick}
        >
          {t(`${currentStep?.buttonText}`)}
        </Button>
      </div>
    </div>
  )
}
