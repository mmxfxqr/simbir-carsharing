import React, {useState} from 'react'
import {LanguageButton} from '@/widgets/Sidebar/components/LanguageButton'
import {BurgerButton} from '@/widgets/Sidebar/components/BurgerButton'

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="bg-dark max-w-16 w-full min-h-full pt-8 pb-4 flex flex-col items-center justify-between">
      <BurgerButton onBurgerClick={() => setIsOpen(!isOpen)} />
      <LanguageButton />
    </div>
  )
}
