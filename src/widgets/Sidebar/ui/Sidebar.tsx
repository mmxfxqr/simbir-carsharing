import { sideBarItems } from '@widgets/Sidebar/config/sideBarItems'
import { BurgerButton } from '@widgets/Sidebar/ui/BurgerButton'
import { LanguageButton } from '@widgets/Sidebar/ui/LanguageButton'
import { SocialMedia } from '@widgets/Sidebar/ui/SocialMedia'
import { FacebookIcon } from '@widgets/Sidebar/ui/SocialMedia/FacebookIcon'
import { InstagramIcon } from '@widgets/Sidebar/ui/SocialMedia/InstagramIcon'
import { TelegramIcon } from '@widgets/Sidebar/ui/SocialMedia/TelegramIcon'
import { useState, type FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Sidebar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const socialMediaIcons = [TelegramIcon, FacebookIcon, InstagramIcon]
  const { t } = useTranslation()
  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev)
  }

  if (!isOpen) {
    return (
      <div className="bg-dark inset-y-0 flex h-full w-16 flex-col items-center justify-between pt-8 pb-4 text-white max-md:fixed max-md:inset-auto max-md:top-4 max-md:left-4 max-md:z-30 max-md:h-12 max-md:w-12 max-md:bg-[#FFF] max-md:p-0 max-md:text-black">
        <BurgerButton onBurgerClick={handleBurgerClick} isOpen={isOpen} />
        <div className="max-md:hidden">
          <LanguageButton />
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className="fixed inset-0 z-10 bg-[#151B1F] opacity-81"
        onClick={() => setIsOpen(false)}
      />
      <div className="bg-dark fixed inset-y-0 left-0 z-20 flex w-[50vw] flex-col pb-4 text-white max-md:w-full">
        <div className="absolute top-8 left-0 max-md:top-5 max-md:left-5">
          <BurgerButton onBurgerClick={handleBurgerClick} isOpen={isOpen} />
        </div>

        <div className="mt-20 ml-7 flex h-full flex-col sm:mt-0 sm:justify-center md:ml-24.25 xl:ml-32">
          <div className="flex w-full max-w-140 flex-col text-[22px] md:text-[28px] lg:text-[32px]">
            {sideBarItems.map((item, id) => (
              <a
                key={id}
                className="hover:text-primary text-white transition-colors"
              >
                {t(`${item}`).toUpperCase()}
              </a>
            ))}
          </div>

          <SocialMedia className="mt-9.5" icons={socialMediaIcons} />
          <div className="absolute hidden max-md:bottom-5 max-md:left-5 max-md:flex">
            <LanguageButton />
          </div>
        </div>
      </div>
    </>
  )
}
