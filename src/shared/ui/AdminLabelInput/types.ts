import type { InputHTMLAttributes } from 'react'

export interface AdminInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string
  isDisabled?: boolean
}
