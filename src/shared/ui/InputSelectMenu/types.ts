import type { InputHTMLAttributes, RefObject } from 'react'

export interface SelectProps {
  classname?: string
  label: string
  variants: string[]
  onSelect: (value: string) => void
  defaultValue?: string
  isDisabled?: boolean
}
export interface InputSelectionFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: string
  isDisabled?: boolean
  inputRef: RefObject<HTMLInputElement | null>
  onClearClick: () => void
}
export interface UseInputSelectProps {
  variants: string[]
  onSelect: (value: string) => void
}
export interface DropDownProps {
  filteredVariants: string[]
  onSelect: (variant: string) => void
}
