import { AppConfig } from '@app/config/appConfig'
import { RoutePath } from '@app/config/routePath'
import { RootLayout } from '@app/layouts/RootLayout'
import { ModelGuard } from '@app/router/guards/ModelGuard'
import { HomePage } from '@pages/HomePage'
import { LocationPage } from '@pages/LocationPage'
import { ModelPage } from '@pages/ModelPage'
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
          path: RoutePath.Order,
          element: <OrderPage />,
          children: [
            {
              index: true,
              element: <Navigate to={'location'} replace />,
            },
            {
              path: RoutePath.Location,
              element: <LocationPage />,
            },
            {
              element: <ModelGuard />,
              children: [
                {
                  path: RoutePath.Model,
                  element: <ModelPage />,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  {
    basename: AppConfig.baseUrl,
  },
)
