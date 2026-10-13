export interface ConfigurationRatePickProps {
  tariffs: {
    perMinute: number
    perDay: number
  }
}

export type RateType = 'perMinute' | 'perDay'
