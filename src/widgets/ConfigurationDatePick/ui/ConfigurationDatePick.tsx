import { Input } from '@shared/ui/Input/ui/Input'
import { useState, type FC } from 'react'

export const ConfigurationDatePick: FC = () => {
  const [fromDate, setFromDate] = useState<string>('')
  const [toDate, setToDate] = useState<string>('')

  return (
    <div>
      <h1 className="text-dark mb-4 text-[14px] font-light">Дата аренды</h1>
      <div className="text-dark flex w-fit flex-col gap-3 text-[14px] font-light">
        <Input
          label="C"
          mask="00.00.0000 00:00"
          isLabeled
          placeholder="Введите дату и время"
          value={fromDate}
          onAccept={setFromDate}
          onClearClick={() => setFromDate('')}
        />

        <Input
          label="По"
          mask="00.00.0000 00:00"
          isLabeled
          value={toDate}
          placeholder="Введите дату и время"
          onAccept={setToDate}
          onClearClick={() => setToDate('')}
        />
      </div>
    </div>
  )
}
