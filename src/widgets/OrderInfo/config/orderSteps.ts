import { RoutePath } from '@app/config/routePath'
import type { OrderStepState } from '@widgets/OrderInfo/types'

export const ORDER_STEPS = [
  {
    path: RoutePath.Location,
    nextPath: RoutePath.Model,
    buttonText: 'Выбрать модель',
    isComplete: ({ location }: OrderStepState) => Boolean(location),
  },
  {
    path: RoutePath.Model,
    nextPath: RoutePath.Configuration,
    buttonText: 'Дополнительно',
    isComplete: ({ model }: OrderStepState) => Boolean(model),
  },
]
