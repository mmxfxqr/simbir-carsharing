export const parseDate = (value: string): Date | null => {
  const [datePart, timePart] = value.split(' ')

  if (!datePart || !timePart) return null

  const [day, month, year] = datePart.split('.').map(Number)
  const [hours, minutes] = timePart.split(':').map(Number)

  if (!day || !month || !year || hours === undefined || minutes === undefined) {
    return null
  }

  const date = new Date(year, month - 1, day, hours, minutes)

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day ||
    date.getHours() !== hours ||
    date.getMinutes() !== minutes
  ) {
    return null
  }

  return date
}

