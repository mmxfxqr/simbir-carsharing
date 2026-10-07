import { RootLayout } from '@app/layouts/RootLayout'
import { HomePage } from '@pages/HomePage'
import { OrderPage } from '@pages/OrderPage'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '/order',
          element: <OrderPage />,
        },
      ],
    },
  ],
  {
    basename: '/simbir-carsharing',
  },
)
