import { RadioButton } from '@shared/ui/RadioButton'
import type { ConfigurationColorListProps } from '@widgets/ConfigurationColorList/types'
import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const ConfigurationColorList: FC<ConfigurationColorListProps> = ({
  colors,
}) => {
  const { t } = useTranslation()
  const [selectedFilter, setSelectedFilter] = useState<string>('')
  const colorOptions = [t('Any'), ...colors.map((color) => color.name)]

  return (
    <div>
      <h1 className="text-dark mb-4 text-[14px] font-light">{t('Color')}</h1>
      <div className="flex gap-4">
        {colorOptions.map((color) => (
          <RadioButton
            key={color}
            label={color}
            name="color"
            checked={selectedFilter === color}
            onChange={() => setSelectedFilter(color)}
          />
        ))}
      </div>
    </div>
  )
}
