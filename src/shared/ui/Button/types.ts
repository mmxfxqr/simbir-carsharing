import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  className?: string
  isLoading?: boolean
}

export type ButtonVariant = 'primary' | 'secondary' | 'danger'
