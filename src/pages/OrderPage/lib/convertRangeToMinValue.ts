import type { Nullable } from '@shared/types'

export const convertRangeToMinValue = (range: Nullable<string>) => {
  if (range) {
    const minValue = range.match(/\d[\d\s]*/)?.[0]

    return minValue ? Number(minValue.replace(/\s/g, '')) : 0
  }

  return
}
