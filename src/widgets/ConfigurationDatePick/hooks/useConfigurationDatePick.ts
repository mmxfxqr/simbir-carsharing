import { useAppDispatch, useAppSelector } from '@app/store'
import {
  selectOrderFromDate,
  setFromDate,
  setRentDuration,
  setRentDurationMinutes,
} from '@entities/Order'
import { formatRentDuration } from '../lib/formatRentDuration'
import { parseDate } from '../lib/parseDate'
import { useState } from 'react'

export const useConfigurationDatePick = () => {
  const MS_PER_SECOND = 1000
  const SECONDS_PER_MINUTE = 60

  const [toDate, setToDate] = useState<string>('')
  const dispatch = useAppDispatch()
  const fromDate = useAppSelector(selectOrderFromDate)

  const updateRentDuration = (nextFromDate: string, nextToDate: string) => {
    if (!nextFromDate || !nextToDate) return
    const startDate = parseDate(nextFromDate)
    const endDate = parseDate(nextToDate)
    if (!startDate || !endDate) return
    const durationMs = endDate.getTime() - startDate.getTime()
    const rentDuration = Math.floor(
      durationMs / (MS_PER_SECOND * SECONDS_PER_MINUTE),
    )
    if (rentDuration < 0) return
    dispatch(setRentDurationMinutes(rentDuration))
    dispatch(setRentDuration(formatRentDuration(rentDuration)))
  }

  const handleSetToDate = (toDate: string) => {
    setToDate(toDate)
    updateRentDuration(fromDate || '', toDate)
  }

  const handleSetFromDate = (fromDate: string) => {
    setFromDate(fromDate)
    dispatch(setFromDate(fromDate))
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
