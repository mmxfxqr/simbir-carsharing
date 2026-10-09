import type { CarCardProps } from '@widgets/CarGrid/types'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'

export const CarCard: FC<CarCardProps> = ({
  cost,
  image,
  model,
  brand,
  onCardClick,
  isSelected,
}) => {
  return (
    <div
      className={twMerge(
        'hover:border-dark flex h-56 w-92.25 flex-col border border-white p-4',
        isSelected && 'border-primary hover:border-primary',
      )}
      onClick={() => onCardClick(brand, model)}
    >
      <h1 className="text-dark text-[18px] font-normal">{model}</h1>
      <h1 className="text-gray mb-9 text-[14px] font-normal">{cost}</h1>
      <div className="flex justify-end">
        <img src={image} className="mb-2 max-h-29 max-w-[256px]" />
      </div>
    </div>
  )
}
