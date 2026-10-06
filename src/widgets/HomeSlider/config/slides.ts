import slider1 from '@assets/slider/slider-1.png'
import slider2 from '@assets/slider/slider-2.png'
import slider3 from '@assets/slider/slider-3.png'
import slider4 from '@assets/slider/slider-4.png'

export interface SlideProps {
  id: number
  path: string
  title: string
  desc: string
  buttonGradient: string
}

export const slides: SlideProps[] = [
  {
    id: 1,
    path: slider1,
    title: 'Free parking',
    desc: 'Leave your car in paid city parking lots and permitted spaces without violating traffic rules, as well as at airports.',
    buttonGradient: 'bg-linear-to-r from-[#13493F] to-[#0C7B1B]',
  },
  {
    id: 2,
    path: slider2,
    title: 'Insurance',
    desc: 'Full car insurance',
    buttonGradient: 'bg-linear-to-r from-[#132949] to-[#0C7B67]',
  },
  {
    id: 3,
    path: slider3,
    title: 'Fuel',
    desc: 'A full tank at any gas station in the city at our expense',
    buttonGradient: 'bg-linear-to-r from-[#493013] to-[#7B0C3B]',
  },
  {
    id: 4,
    path: slider4,
    title: 'Maintenance',
    desc: 'The car undergoes weekly maintenance',
    buttonGradient: 'bg-linear-to-r from-[#281349] to-[#720C7B]',
  },
]
