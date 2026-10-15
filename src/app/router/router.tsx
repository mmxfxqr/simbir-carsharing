import { AppConfig } from '@app/config/appConfig'
import { RoutePath } from '@app/config/routePath'
import { RootLayout } from '@app/layouts/RootLayout'
import { ConfigurationGuard, ModelGuard } from '@app/router/guards'
import { ConfigurationPage } from '@pages/ConfigurationPage'
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
              element: <Navigate to={RoutePath.Location} replace />,
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
            {
              element: <ConfigurationGuard />,
              children: [
                {
                  path: RoutePath.Configuration,
                  element: <ConfigurationPage />,
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
