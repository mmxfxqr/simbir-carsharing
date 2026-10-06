import type { FC } from 'react'
import type { BurgerButtonProps } from './types'
import { MenuIcon } from '@widgets/Sidebar/ui/BurgerButton/MenuIcon'

export const BurgerButton: FC<BurgerButtonProps> = ({
  onBurgerClick,
  isOpen,
}) => {
  return (
    <button className="px-4 max-md:p-0" onClick={onBurgerClick}>
      <MenuIcon isOpen={isOpen} />
    </button>
  )
}
