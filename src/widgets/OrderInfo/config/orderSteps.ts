import { RoutePath } from '@app/config/routePath'
import type { OrderStepState } from '@widgets/OrderInfo/types'

export const ORDER_STEPS = [
  {
    path: RoutePath.Location,
    nextPath: RoutePath.Model,
    buttonText: 'Choose a model',
    isComplete: ({ location }: OrderStepState) => Boolean(location),
  },
  {
    path: RoutePath.Model,
    nextPath: RoutePath.Configuration,
    buttonText: 'Configuration',
    isComplete: ({ model }: OrderStepState) => Boolean(model),
  },
  {
    path: RoutePath.Configuration,
    nextPath: RoutePath.Total,
    buttonText: 'Total',
    isComplete: ({ color, rentDuration, selectedRate }: OrderStepState) =>
      Boolean(color && rentDuration && selectedRate),
  },
]
