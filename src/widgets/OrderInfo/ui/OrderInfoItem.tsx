import type { OrderInfoItemProps } from '@widgets/OrderInfo/types'
import type { FC } from 'react'

export const OrderInfoItem: FC<OrderInfoItemProps> = ({ title, value }) => {
  return (
    <div className="mb-8 flex items-end text-[14px] font-light">
      <h1 className="text-dark">{title}</h1>
      <div className="border-b-gray mx-3 flex-1 gap-3 border-b border-dotted" />
      <h1 className="text-gray max-w-25.25 leading-4">{value}</h1>
    </div>
  )
}
