import { useAppDispatch, useAppSelector } from '@app/store'
import {
  selectOrderAdditionalServices,
  setAdditionalServices,
  setSelectedServicesCost,
} from '@entities/Order'
import type { ConfigurationAdditionalServicesProps } from '@widgets/ConfigurationAdditionalServices/types'

export const useConfigurationAdditionalServices = ({
  additionalServices,
}: ConfigurationAdditionalServicesProps) => {
  const dispatch = useAppDispatch()
  const selectedAditionalServices = useAppSelector(
    selectOrderAdditionalServices,
  )
  const { childSeat, fullTank, rightHandDrive } = additionalServices

  const services = [fullTank, childSeat, rightHandDrive]

  const calculateServicesCost = (
    selectedServices: string[],
    services: { name: string; cost: number }[],
  ) => {
    return services.reduce(
      (total, service) =>
        selectedServices.includes(service.name) ? total + service.cost : total,
      0,
    )
  }

  const handleServiceChange = (name: string, checked: boolean) => {
    const currentServices = selectedAditionalServices ?? []
    let nextSevices
    if (checked) {
      nextSevices = currentServices.includes(name)
        ? currentServices
        : [...currentServices, name]
    } else {
      nextSevices = currentServices.filter(
        (serviceName) => serviceName !== name,
      )
    }

    const nextCost = calculateServicesCost(nextSevices, services)

    dispatch(setAdditionalServices(nextSevices))
    dispatch(setSelectedServicesCost(nextCost))
  }

  return {
    services,
    handleServiceChange,
    selectedAditionalServices,
  }
}
