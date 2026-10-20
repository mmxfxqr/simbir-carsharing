import type { ValueOf } from '@shared/types'

export interface Tariffs {
  perMinute: number
  perDay: number
}
export interface ConfigurationRatePickProps {
  tariffs: Tariffs
}

export const RateType = {
  PerMinute: 'perMinute',
  PerDay: 'perDay',
} as const

export type RateType = ValueOf<typeof RateType>
