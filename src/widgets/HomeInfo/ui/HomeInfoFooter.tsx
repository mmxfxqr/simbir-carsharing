import type { FC } from 'react'

export const HomeInfoFooter: FC = () => {
  return (
    <div className="max-md:bg-dark flex justify-between max-md:mt-auto max-md:flex-col-reverse max-md:items-end max-md:py-4 max-md:pr-4">
      <h1 className="text-gray">© 2016-2019 «Need for drive»</h1>
      <h1 className="max-md:text-primary">8 (495) 234-22-44</h1>
    </div>
  )
}
