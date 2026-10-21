import { useAppDispatch, useAppSelector } from '@app/store'
import {
  selectOrderFromDate,
  selectOrderToDate,
  setFromDate,
  setRentDuration,
  setRentDurationMinutes,
  setToDate,
} from '@entities/Order'
import { formatRentDuration } from '../lib/formatRentDuration'
import { parseDate } from '../lib/parseDate'
import { validateRentalDates } from '../lib/isDateIntervalValid'

const MS_PER_SECOND = 1000
const SECONDS_PER_MINUTE = 60

export const useConfigurationDatePick = () => {
  const dispatch = useAppDispatch()
  const fromDate = useAppSelector(selectOrderFromDate)
  const toDate = useAppSelector(selectOrderToDate)

  const clearRentDuration = () => {
    dispatch(setRentDuration(null))
    dispatch(setRentDurationMinutes(null))
  }

  const clearFromDate = () => {
    dispatch(setFromDate(''))
    clearRentDuration()
  }

  const clearToDate = () => {
    dispatch(setToDate(''))
    clearRentDuration()
  }

  const updateRentDuration = (nextFromDate: string, nextToDate: string) => {
    if (!nextFromDate || !nextToDate) {
      clearRentDuration()
      
      return
    }

    const startDate = parseDate(nextFromDate)
    const endDate = parseDate(nextToDate)

    if (!startDate || !endDate) {
      clearRentDuration()

      return
    }

    const durationMs = endDate.getTime() - startDate.getTime()
    const rentDuration = Math.floor(
      durationMs / (MS_PER_SECOND * SECONDS_PER_MINUTE),
    )

    if (rentDuration < 0) {
      clearRentDuration()

      return
    }

    dispatch(setRentDurationMinutes(rentDuration))
    dispatch(setRentDuration(formatRentDuration(rentDuration)))
  }

  const handleSetToDate = (nextToDate: string) => {
    if (!nextToDate) {
      clearToDate()

      return
    }

    const validation = validateRentalDates(fromDate || '', nextToDate)

    if (!validation.isValid) {
      alert(validation.error)
      clearToDate()

      return
    }

    dispatch(setToDate(nextToDate))
    updateRentDuration(fromDate || '', nextToDate)
  }

  const handleSetFromDate = (nextFromDate: string) => {
    if (!nextFromDate) {
      clearFromDate()

      return
    }

    const validation = validateRentalDates(nextFromDate, toDate || '')

    if (!validation.isValid) {
      alert(validation.error)

      return
    }

    dispatch(setFromDate(nextFromDate))
    updateRentDuration(nextFromDate, toDate || '')
  }

  return {
    fromDate,
    toDate,
    handleSetFromDate,
    handleSetToDate,
  }
}
