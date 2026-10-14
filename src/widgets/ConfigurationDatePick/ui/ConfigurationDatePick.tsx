import { Input } from '@shared/ui/Input/ui/Input'
import { useConfigurationRatePick } from '@widgets/ConfigurationRatePick/hooks/useConfigurationRatePick'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const ConfigurationDatePick: FC = () => {
  const { t } = useTranslation()
  const { fromDate, setFromDate, setToDate, toDate } =
    useConfigurationRatePick()

  return (
    <div>
      <h1 className="text-dark mb-4 text-[14px] font-light">
        {t('Rental date')}
      </h1>
      <div className="text-dark flex w-fit flex-col gap-3 text-[14px] font-light">
        <Input
          label={t('fromDate')}
          mask="00.00.0000 00:00"
          isLabeled
          placeholder={t('Enter the date and time')}
          value={fromDate}
          onAccept={setFromDate}
          onClearClick={() => setFromDate('')}
        />

        <Input
          label={t('toDate')}
          mask="00.00.0000 00:00"
          isLabeled
          value={toDate}
          placeholder={t('Enter the date and time')}
          onAccept={setToDate}
          onClearClick={() => setToDate('')}
        />
      </div>
    </div>
  )
}
