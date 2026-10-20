import type { TotalOrderServiceConfig } from "@entities/Order/types"

export const TOTAL_ORDER_SERVICES = {
  FULL_TANK: 'Full tank',
  CHILD_SEAT: 'Child seat',
  RIGHT_HAND_DRIVE: 'Right-hand drive',
} as const

export const TOTAL_ORDER_SERVICE_CONFIG = {
  [TOTAL_ORDER_SERVICES.FULL_TANK]: {
    labelValue: 'Order fuel',
    value: '100%',
  },
  [TOTAL_ORDER_SERVICES.CHILD_SEAT]: {
    labelValue: 'Child seat',
    value: 'Yes',
  },
  [TOTAL_ORDER_SERVICES.RIGHT_HAND_DRIVE]: {
    labelValue: 'Right-hand drive',
    value: 'Yes',
  },
} satisfies TotalOrderServiceConfig
