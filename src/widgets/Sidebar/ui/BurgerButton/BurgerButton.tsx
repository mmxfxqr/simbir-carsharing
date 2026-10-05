import type { FC } from 'react'
import type { BurgerButtonProps } from './types'

export const BurgerButton: FC<BurgerButtonProps> = ({
  onBurgerClick,
  isOpen,
}) => {
  return (
    <button className="px-4" onClick={onBurgerClick}>
      <img
        src={isOpen ? '/sidebar/close-sidebar.svg' : '/sidebar/burger.svg'}
        alt="Menu"
      />
    </button>
  )
}
