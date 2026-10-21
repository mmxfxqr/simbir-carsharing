import { RadioButton } from '@shared/ui/RadioButton'
import { useConfigurationColorList } from '../hooks/useConfigurationColorList'
import type { ConfigurationColorListProps } from '../types'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const ConfigurationColorList: FC<ConfigurationColorListProps> = ({
  colors,
}) => {
  const { t } = useTranslation()
  const { colorOptions, handleRadioClick, selectedFilter } =
    useConfigurationColorList(t, colors)

  return (
    <div>
      <h1 className="text-dark mb-4 text-sm font-light max-sm:text-xs">
        {t('Color')}
      </h1>
      <div className="flex gap-4 max-md:flex-col max-sm:gap-2">
        {colorOptions.map((color) => (
          <RadioButton
            key={color}
            label={color}
            name="color"
            checked={selectedFilter === color}
            onChange={() => handleRadioClick(color)}
          />
        ))}
      </div>
    </div>
  )
}
