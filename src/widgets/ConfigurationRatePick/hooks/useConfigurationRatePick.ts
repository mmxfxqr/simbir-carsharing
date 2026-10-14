import { useAppDispatch } from '@app/store'
import { setRentDuration, setRentDurationMinutes } from '@entities/Order'
import { formatRentDuration } from '@widgets/ConfigurationDatePick/lib/formatRentDuration'
import { parseDate } from '@widgets/ConfigurationDatePick/lib/parseDate'
import { useEffect, useState } from 'react'

export const useConfigurationRatePick = () => {
  const [fromDate, setFromDate] = useState<string>('')
  const [toDate, setToDate] = useState<string>('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!fromDate || !toDate) return

    const startDate = parseDate(fromDate)
    const endDate = parseDate(toDate)

    if (!startDate || !endDate) return

    const durationMs = endDate.getTime() - startDate.getTime()
    const rentDuration = Math.floor(durationMs / (1000 * 60))

    if (rentDuration < 0) return
    dispatch(setRentDurationMinutes(rentDuration))
    dispatch(setRentDuration(formatRentDuration(rentDuration)))
  }, [fromDate, toDate])

  return { fromDate, setFromDate, toDate, setToDate }
}
