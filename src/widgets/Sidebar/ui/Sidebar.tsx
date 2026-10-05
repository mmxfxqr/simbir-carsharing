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
      <div className="bg-dark inset-y-0 flex w-16 flex-col items-center justify-between pt-8 pb-4">
        <BurgerButton onBurgerClick={handleBurgerClick} isOpen={isOpen} />
        <LanguageButton />
      </div>
    )
  }
  return (
    <>
      <div
        className="fixed inset-0 z-10 bg-[#151B1F] opacity-81"
        onClick={() => setIsOpen(false)}
      />
      <div className="bg-dark fixed inset-y-0 left-0 z-20 flex w-[50vw] flex-col pb-4">
        <div className="absolute top-8 left-0">
          <BurgerButton onBurgerClick={handleBurgerClick} isOpen={isOpen} />
        </div>

        <div className="mt-20 ml-7 flex h-full flex-col sm:mt-0 sm:justify-center md:ml-24.25 xl:ml-32">
          <div className="flex w-full max-w-140 flex-col text-[22px] md:text-[28px] lg:text-[32px]">
            {sideBarItems.map((item, id) => (
              <a
                key={id}
                className="hover:text-primary text-white transition-colors"
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
