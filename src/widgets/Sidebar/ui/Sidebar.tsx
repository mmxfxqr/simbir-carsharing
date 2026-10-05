import { sideBarItems } from '@widgets/Sidebar/config/sideBarItems'
import { BurgerButton } from '@widgets/Sidebar/ui/BurgerButton'
import { LanguageButton } from '@widgets/Sidebar/ui/LanguageButton'
import { SocialMedia } from '@widgets/Sidebar/ui/SocialMedia'
import { FacebookIcon } from '@widgets/Sidebar/ui/SocialMedia/FacebookIcon'
import { InstagramIcon } from '@widgets/Sidebar/ui/SocialMedia/InstagramIcon'
import { TelegramIcon } from '@widgets/Sidebar/ui/SocialMedia/TelegramIcon'
import { useState, type FC } from 'react'

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const socialMediaIcons = [TelegramIcon, FacebookIcon, InstagramIcon]

  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev)
  }

  if (!isOpen) {
    return (
      <div className="bg-dark w-16 inset-y-0 pt-8 pb-4 flex flex-col items-center justify-between">
        <BurgerButton onBurgerClick={handleBurgerClick} isOpen={isOpen} />
        <LanguageButton />
      </div>
    )
  }
  return (
    <>
      <div
        className="fixed inset-0 bg-[#151B1F] z-10 opacity-81"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed inset-y-0 left-0 bg-dark w-[50vw] pb-4 flex flex-col z-20">
        <div className="absolute top-8 left-0">
          <BurgerButton onBurgerClick={handleBurgerClick} isOpen={isOpen} />
        </div>

        <div className="flex flex-col  h-full ml-7 md:ml-24.25 xl:ml-32 mt-20  sm:justify-center sm:mt-0">
          <div className="flex flex-col  w-full max-w-140 text-[22px] lg:text-[32px] md:text-[28px] ">
            {sideBarItems.map((item, id) => (
              <a
                key={id}
                className=" text-white hover:text-primary transition-colors "
              >
                {item}
              </a>
            ))}
          </div>

          <SocialMedia className="mt-9.5" icons={socialMediaIcons} />
        </div>
      </div>
    </>
  )
}
