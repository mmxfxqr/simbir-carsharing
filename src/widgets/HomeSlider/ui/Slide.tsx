import { Button } from '@shared/ui/Button'
import type { SlideProps } from '@widgets/HomeSlider/config/slides'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

export const Slide: FC<SlideProps> = ({
  id,
  title,
  desc,
  path,
  buttonGradient,
}) => {
  const { t } = useTranslation()

  return (
    <div key={id} className="relative h-full min-w-0 flex-[0_0_100%]">
      <img src={path} alt={title} className="h-full w-full object-cover" />

      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black" />

      <div className="absolute top-59.25 left-1/2 max-w-123.75 -translate-x-1/2">
        <h1 className="mb-2 text-[40px] font-medium text-white">
          {t(`${title}`)}
        </h1>

        <p className="text-gray mb-8 text-[24px] leading-[90%] font-light">
          {t(`${desc}`)}
        </p>

        <Button className={`w-full max-w-41 ${buttonGradient}`}>
          {t('More Details')}
        </Button>
      </div>
    </div>
  )
}
