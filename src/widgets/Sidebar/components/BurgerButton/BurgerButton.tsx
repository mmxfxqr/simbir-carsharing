import React from 'react'

interface Props {
  onBurgerClick: () => void
}

export const BurgerButton: React.FC<Props> = ({onBurgerClick}) => {
  return (
    <button className="cursor" onClick={onBurgerClick}>
      <img src={'/public/burger.svg'} alt="Menu" />
    </button>
  )
}
