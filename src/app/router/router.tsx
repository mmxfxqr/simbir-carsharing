import { RootLayout } from '@app/layouts/RootLayout'
import { HomePage } from '@pages/HomePage'
import { LocationPage } from '@pages/LocationPage'
import { OrderPage } from '@pages/OrderPage'
import { createBrowserRouter, Navigate } from 'react-router-dom'

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
          path: 'order',
          element: <OrderPage />,
          children: [
            {
              index: true,
              element: <Navigate to={'location'} replace />,
            },
            {
              path: 'location',
              element: <LocationPage />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/simbir-carsharing',
  },
)
