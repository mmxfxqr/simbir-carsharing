import { RateType, type Tariffs } from '@widgets/ConfigurationRatePick/types'

export const calculateRentDurationCost = (
  durationMinutes: number,
  rate: RateType,
  tariffs: Tariffs,
) => {
  return rate === RateType.PerMinute
    ? durationMinutes * tariffs.perMinute
    : Math.ceil(durationMinutes / 1440) * tariffs.perDay
}
