import { useAppDispatch, useAppSelector } from '@app/store'
import {
  selectOrderCost,
  selectOrderSelectedServicesCost,
  setAdditionalServices,
  setCost,
  setSelectedServicesCost,
} from '@entities/Order'
import type { ConfigurationAdditionalServicesProps } from '@widgets/ConfigurationAdditionalServices/types'
import { useEffect, useMemo, useState } from 'react'

export const useConfigurationAdditionalServices = ({
  additionalServices,
}: ConfigurationAdditionalServicesProps) => {
  const dispatch = useAppDispatch()
  const cost = useAppSelector(selectOrderCost)
  const additionalCostState = useAppSelector(selectOrderSelectedServicesCost)
  const { childSeat, fullTank, rightHandDrive } = additionalServices

  const services = [fullTank, childSeat, rightHandDrive]

  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const selectedServicesCost = useMemo(() => {
    return services.reduce((total, service) => {
      return selectedServices.includes(service.name)
        ? total + service.cost
        : total
    }, 0)
  }, [selectedServices, additionalServices])

  useEffect(() => {
    if (!cost) return
    dispatch(setAdditionalServices(selectedServices))
    dispatch(setCost(cost - (additionalCostState ?? 0) + selectedServicesCost))
    dispatch(setSelectedServicesCost(selectedServicesCost))
  }, [dispatch, selectedServices, selectedServicesCost])

  const handleServiceChange = (name: string, checked: boolean) => {
    setSelectedServices((prev) => {
      if (checked) {
        return prev.includes(name) ? prev : [...prev, name]
      }

      return prev.filter((serviceName) => serviceName !== name)
    })
  }

  return {
    services,
    handleServiceChange,
    selectedServices,
  }
}
