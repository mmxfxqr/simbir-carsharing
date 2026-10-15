import { useAppDispatch } from '@app/store'
import { setRentDuration, setRentDurationMinutes } from '@entities/Order'
import { formatRentDuration } from '@widgets/ConfigurationDatePick/lib/formatRentDuration'
import { parseDate } from '@widgets/ConfigurationDatePick/lib/parseDate'
import { useState } from 'react'

export const useConfigurationDatePick = () => {
  const [fromDate, setFromDate] = useState<string>('')
  const [toDate, setToDate] = useState<string>('')
  const dispatch = useAppDispatch()

  const updateRentDuration = (nextFromDate: string, nextToDate: string) => {
    if (!nextFromDate || !nextToDate) return
    const startDate = parseDate(nextFromDate)
    const endDate = parseDate(nextToDate)
    if (!startDate || !endDate) return
    const durationMs = endDate.getTime() - startDate.getTime()
    const rentDuration = Math.floor(durationMs / (1000 * 60))
    if (rentDuration < 0) return
    dispatch(setRentDurationMinutes(rentDuration))
    dispatch(setRentDuration(formatRentDuration(rentDuration)))
  }
  const handleSetToDate = (toDate: string) => {
    setToDate(toDate)
    updateRentDuration(fromDate, toDate)
  }
  const handleSetFromDate = (fromDate: string) => {
    setFromDate(fromDate)
    updateRentDuration(fromDate, toDate)
  }
  const clearRentDuration = () => {
    dispatch(setRentDuration(null))
    dispatch(setRentDurationMinutes(null))
  }
  const handleClearFromDate = () => {
    handleSetFromDate('')
    clearRentDuration()
  }
  const handleClearToDate = () => {
    handleSetToDate('')
    clearRentDuration()
  }

  return {
    fromDate,
    toDate,
    handleSetFromDate,
    handleSetToDate,
    handleClearFromDate,
    handleClearToDate,
  }
}
