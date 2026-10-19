import type { UseInputSelectProps } from '../types'
import { useEffect, useRef, useState } from 'react'

export const useInputSelect = ({
  onSelect,
  variants,
  defaultValue,
}: UseInputSelectProps) => {
  const [value, setValue] = useState<string>(defaultValue || '')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (variants.includes(value)) handleSubmit(value)
  }, [value, variants])

  const filteredVariants = variants?.filter((variant) =>
    variant.toLowerCase().includes(value.toLowerCase()),
  )

  const handleClearClick = () => {
    setValue('')
    inputRef.current?.focus()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value.trim() && e.currentTarget.value !== '') return

    setValue(e.currentTarget.value)
  }

  const handleSubmit = (variant: string) => {
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
    handleSubmit,
    handleBlur,
    handleFocus,
  }
}
