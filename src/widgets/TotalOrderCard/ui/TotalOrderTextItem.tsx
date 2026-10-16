import type { TotalOrderTextItemProps } from '@widgets/TotalOrderCard/types'
import type { FC } from 'react'

export const TotalOrderTextItem: FC<TotalOrderTextItemProps> = ({
  labelValue,
  value,
}) => {
  return (
    <div className="flex text-sm font-light max-lg:text-xs">
      <h1 className="mr-1 font-bold">{labelValue}</h1>
      {value}
    </div>
  )
}
