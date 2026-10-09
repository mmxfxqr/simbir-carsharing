import type { UseInputSelectProps } from '../types'
import { useRef, useState } from 'react'

export const useInputSelect = ({ onSelect, variants }: UseInputSelectProps) => {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredVariants = variants?.filter((variant) =>
    variant.toLowerCase().includes(value.toLowerCase()),
  )
  const handleClearClick = () => {
    setValue('')
    inputRef.current?.focus()
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const handleSelect = (variant: string) => {
    setValue(variant)
    onSelect(variant)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  return {
    value,
    inputRef,
    isFocused,
    filteredVariants,
    handleClearClick,
    handleChange,
    handleSelect,
    handleBlur,
    handleFocus,
  }
}
