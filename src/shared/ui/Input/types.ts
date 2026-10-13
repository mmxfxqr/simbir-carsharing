import type { InputHTMLAttributes, ReactNode, RefObject } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string
  isDisabled?: boolean
  isLabeled?: boolean
  inputRef?: RefObject<HTMLInputElement | null>
  onClearClick?: () => void
  mask?: string
  onAccept?: (value: string) => void
}

export interface InputClearButtonProps {
  onClick?: () => void
}
export interface LabeledInputProps {
  label: string
  children: ReactNode
}
