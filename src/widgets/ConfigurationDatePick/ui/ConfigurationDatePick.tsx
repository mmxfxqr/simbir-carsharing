import { Input } from '@shared/ui/Input/ui/Input'
import { useConfigurationDatePick } from '../hooks/useConfigurationDatePick'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const ConfigurationDatePick: FC = () => {
  const { t } = useTranslation()
  const {
    fromDate,
    toDate,
    handleSetFromDate,
    handleSetToDate,
    handleClearFromDate,
    handleClearToDate,
  } = useConfigurationDatePick()

  return (
    <div>
      <h1 className="text-dark mb-4 text-sm font-light max-sm:text-xs">
        {t('Rental date')}
      </h1>
      <div className="text-dark flex w-fit flex-col gap-3 text-sm font-light max-sm:text-xs">
        <Input
          containerClassname="max-sm:max-w-30"
          label={t('fromDate')}
          mask="00.00.0000 00:00"
          isLabeled
          placeholder={t('Enter the date and time')}
          value={fromDate}
          onAccept={handleSetFromDate}
          onClearClick={handleClearFromDate}
        />

        <Input
          containerClassname="max-sm:max-w-30"
          label={t('toDate')}
          mask="00.00.0000 00:00"
          isLabeled
          value={toDate}
          placeholder={t('Enter the date and time')}
          onAccept={handleSetToDate}
          onClearClick={handleClearToDate}
        />
      </div>
    </div>
  )
}
