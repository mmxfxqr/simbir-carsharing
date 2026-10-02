import React, {useState} from 'react'
import {LanguageButton} from '@/widgets/Sidebar/components/LanguageButton'
import {BurgerButton} from '@/widgets/Sidebar/components/BurgerButton'
import {SocialMedia} from '@/widgets/Sidebar/components/SocialMedia'
import {sideBarItems} from '@/entities/sideBarItems'

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return isOpen ? (
    <>
      <div
        className="fixed inset-0 bg-[#151B1F] z-1 opacity-81"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed inset-y-0 left-0 bg-dark w-[50vw] pb-4 flex flex-col z-10">
        <div className="absolute top-8 left-0">
          <BurgerButton
            onBurgerClick={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
          />
        </div>

        <div className="flex flex-col  h-full ml-7 md:ml-24.25 xl:ml-32 mt-20  sm:justify-center sm:mt-0">
          <div className="flex flex-col  w-full max-w-140 text-[22px] lg:text-[32px] md:text-[28px] ">
            {sideBarItems.map((item) => (
              <a className=" text-white hover:text-primary transition-colors ">
                {item}
              </a>
            ))}
          </div>

          <SocialMedia className="mt-9.5" />
        </div>
      </div>
    </>
  ) : (
    <div className="bg-dark w-16 inset-y-0 pt-8 pb-4 flex flex-col items-center justify-between">
      <BurgerButton onBurgerClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <LanguageButton />
    </div>
  )
}
