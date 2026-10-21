const DATE_PATTERN = /^(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})$/

export const stringDateToDate = (value: string): Date | null => {
  const match = value.match(DATE_PATTERN)

  if (!match) return null

  const [, day, month, year, hours, minutes] = match

  const date = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hours),
    Number(minutes),
  )

  if (
    date.getFullYear() !== Number(year) ||
    date.getMonth() !== Number(month) - 1 ||
    date.getDate() !== Number(day) ||
    date.getHours() !== Number(hours) ||
    date.getMinutes() !== Number(minutes)
  ) {
    return null
  }

  return date
}

type DateValidationResult = {
  isValid: boolean
  error: string | null
}

export const validateRentalDates = (
  fromDate: string,
  toDate: string,
): DateValidationResult => {
  const startDate = stringDateToDate(fromDate)
  const endDate = stringDateToDate(toDate)
  const now = new Date()

  if (startDate && startDate < now) {
    return {
      isValid: false,
      error: 'Нельзя забронировать автомобиль на прошедшее время',
    }
  }

  if (startDate && endDate && endDate < startDate) {
    return {
      isValid: false,
      error: 'Дата окончания не может быть раньше даты начала',
    }
  }

  return { isValid: true, error: null }
}
