import type { BurgerButtonProps } from './types'
import { type FC } from 'react'

export const BurgerButton: FC<BurgerButtonProps> = ({
  onBurgerClick,
  isOpen,
}) => {
  return (
    <button className="px-4" onClick={onBurgerClick}>
      <img src={isOpen ? '/close-sidebar.svg' : '/burger.svg'} alt="Menu" />
    </button>
  )
}
