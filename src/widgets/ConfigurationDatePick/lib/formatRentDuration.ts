const MINUTES_IN_HOUR = 60
const HOURS_IN_DAY = 24
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR

export const formatRentDuration = (totalMinutes: number): string => {
  const days = Math.floor(totalMinutes / MINUTES_IN_DAY)
  const hours = Math.floor((totalMinutes % MINUTES_IN_DAY) / MINUTES_IN_HOUR)
  const minutes = totalMinutes % MINUTES_IN_HOUR

  return [
    days > 0 ? `${days}д` : '',
    hours > 0 ? `${hours}ч` : '',
    minutes > 0 ? `${minutes}м` : '',
  ]
    .filter(Boolean)
    .join(' ')
}
