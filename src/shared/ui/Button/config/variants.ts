import type { ButtonVariant } from '@shared/ui/Button/types'

export const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary',
  danger: 'bg-linear-to-r from-[#493013] to-[#7B0C3B]',
  secondary:
    'bg-admin-primary text-admin-white max-h-7.25 text-[11.5px] rounded-[4px]',
}
