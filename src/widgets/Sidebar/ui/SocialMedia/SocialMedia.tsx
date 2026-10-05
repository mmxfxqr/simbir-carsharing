import { InstagramIcon } from './InstagramIcon'
import { FacebookIcon } from './FacebookIcon'
import { type FC } from 'react'
import { TelegramIcon } from './TelegramIcon'
import type { SocialMediaProps } from './types'

export const SocialMedia: FC<SocialMediaProps> = ({ className }) => {
  const iconButtonsArray = [TelegramIcon, FacebookIcon, InstagramIcon]

  return (
    <div className={className}>
      <div className="flex gap-4 ">
        {iconButtonsArray.map((Icon, id) => (
          <button
            key={id}
            className="text-white hover:text-primary transition-colors "
          >
            <Icon />
          </button>
        ))}
      </div>
    </div>
  )
}
