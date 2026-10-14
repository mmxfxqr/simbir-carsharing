export const formatRentDuration = (totalMinutes: number): string => {
  const days = Math.floor(totalMinutes / (24 * 60))
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60)
  const minutes = totalMinutes % 60

  return (
    [
      days > 0 ? `${days}д` : '',
      hours > 0 ? `${hours}ч` : '',
      minutes > 0 ? `${minutes}м` : '',
    ]
      .filter(Boolean)
      .join(' ') || '0м'
  )
}
