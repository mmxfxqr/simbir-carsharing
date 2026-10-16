import type { CarCardProps } from '@widgets/CarGrid/types'
import type { FC } from 'react'
import { twMerge } from 'tailwind-merge'

export const CarCard: FC<CarCardProps> = ({
  cost,
  image,
  model,
  brand,
  category,
  config,
  onCardClick,
  isSelected,
}) => {
  return (
    <div
      className={twMerge(
        'hover:border-dark flex h-56 w-92.25 min-w-0 flex-col border border-white p-4 max-lg:max-w-64 max-sm:w-auto max-sm:max-w-56',
        isSelected && 'border-primary hover:border-primary',
      )}
      onClick={() =>
        onCardClick({ brand, category, config, cost, image, model })
      }
    >
      <h1 className="text-dark text-lg font-normal">{model}</h1>
      <h1 className="text-gray mb-9 text-sm font-normal">{cost}</h1>
      <div className="flex justify-end">
        <img
          src={image}
          alt={model}
          className="mb-2 block max-h-29 w-full max-w-[256px] object-contain max-lg:max-w-50"
        />
      </div>
    </div>
  )
}
