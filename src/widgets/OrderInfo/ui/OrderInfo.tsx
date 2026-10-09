import { RoutePath } from '@app/config/routePath'
import { useAppSelector } from '@app/store'
import { selectOrderLocation } from '@entities/Order'
import { Button } from '@shared/ui/Button'
import { OrderInfoItem } from '@widgets/OrderInfo/ui/OrderInfoItem'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderInfo: FC = () => {
  const navigate = useNavigate()
  const location = useAppSelector(selectOrderLocation)
  const handleNextStepClick = () => {
    navigate(`${RoutePath.Model}`)
  }

  return (
    <div className="flex w-full max-w-71.75 flex-col">
      <h1 className="text-dark mb-6.5 text-[18px] font-medium">Ваш заказ:</h1>
      <div>
        <OrderInfoItem title="Пункт выдачи" value={location} />
        <Button
          className="w-full"
          disabled={!location}
          onClick={handleNextStepClick}
        >
          Выбрать модель
        </Button>
      </div>
    </div>
  )
}
