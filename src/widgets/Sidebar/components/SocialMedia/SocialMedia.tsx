import {InstagramIcon} from './InstagramIcon'
import {FacebookIcon} from './FacebookIcon'
import React from 'react'
import {TelegramIcon} from './TelegramIcon'

interface Props {
  className?: string
}

export const SocialMedia: React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
      <div className="flex gap-4 ">
        <button className="text-white hover:text-primary transition-colors">
          <TelegramIcon />
        </button>
        <button className="text-white hover:text-primary transition-colors">
          <FacebookIcon />
        </button>
        <button className="text-white hover:text-primary transition-colors">
          <InstagramIcon />
        </button>
      </div>
    </div>
  )
}
