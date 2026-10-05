import type { SocialMediaProps } from './types'
import type { FC } from 'react'

export const SocialMedia: FC<SocialMediaProps> = ({ className, icons }) => {
  return (
    <div className={className}>
      <div className="flex gap-4 ">
        {icons.map((Icon, id) => (
          <button
            key={id}
            className="text-white hover:text-primary transition-colors"
          >
            <Icon />
          </button>
        ))}
      </div>
    </div>
  )
}
