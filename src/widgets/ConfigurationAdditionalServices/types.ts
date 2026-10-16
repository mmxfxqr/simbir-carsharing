import type { AdditionalService } from '@entities/Car/types'

export interface ConfigurationAdditionalServicesProps {
  additionalServices: {
    fullTank: AdditionalService
    childSeat: AdditionalService
    rightHandDrive: AdditionalService
  }
}
