import { RadioButton } from '@shared/ui/RadioButton'
import type { ConfigurationColorListProps } from '@widgets/ConfigurationColorList/types'
import type { FC } from 'react'

export const ConfigurationColorList: FC<ConfigurationColorListProps> = ({ colors }) => {
  return (
    <div>
      <h1 className="text-dark mb-4 text-[14px] font-light">Цвет</h1>
      <div className="flex gap-4">
        <RadioButton label="Любой" />
        {colors.map((color) => (
          <RadioButton label={color.name} />
        ))}
      </div>
    </div>
  )
}
