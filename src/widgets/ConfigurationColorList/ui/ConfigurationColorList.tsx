import { RadioButton } from '@shared/ui/RadioButton'
import type { ConfigurationColorListProps } from '@widgets/ConfigurationColorList/types'
import { useState, type FC } from 'react'

export const ConfigurationColorList: FC<ConfigurationColorListProps> = ({
  colors,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('')
  const colorOptions = ['Любой', ...colors.map((color) => color.name)]

  return (
    <div>
      <h1 className="text-dark mb-4 text-[14px] font-light">Цвет</h1>
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
