import React from 'react'

interface Props {
  onBurgerClick: () => void
  isOpen: boolean
}

export const BurgerButton: React.FC<Props> = ({onBurgerClick, isOpen}) => {
  return (
    <button className="px-4" onClick={onBurgerClick}>
      <img
        src={isOpen ? '/public/close-sidebar.svg' : '/public/burger.svg'}
        alt="Menu"
      />
    </button>
  )
}
