import { Button } from '@shared/ui/Button'
import type { ConfirmModalProps } from '../types'
import type { FC } from 'react'
import { createPortal } from 'react-dom'

export const ConfirmModal: FC<ConfirmModalProps> = ({
  onCancelClick,
  onConfirmClick,
}) => {
  return createPortal(
    <>
      <div
        className="fixed inset-0 z-10 bg-[#fff] opacity-90"
        onClick={onCancelClick}
      />
      <div className="fixed top-1/2 left-1/2 z-20 flex h-full max-h-39.25 w-full max-w-101.25 -translate-x-1/2 -translate-y-1/2 flex-col gap-8 bg-[#fff] p-6">
        <h1 className="text-dark text-center text-2xl">Подтвердить заказ</h1>
        <div className="flex gap-4">
          <Button className="w-full max-w-44.25" onClick={onConfirmClick}>
            Подтвердить
          </Button>
          <Button
            className="w-full max-w-41"
            onClick={onCancelClick}
            variant="danger"
          >
            Вернуться
          </Button>
        </div>
      </div>
    </>,
    document.body,
  )
}
