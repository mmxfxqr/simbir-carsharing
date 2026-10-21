import { AppConfig } from '@app/config/appConfig'
import { AdminRoutePath, RoutePath } from '@app/config/routePath'
import { AdminLayout } from '@app/layouts/AdminLayout'
import { RootLayout } from '@app/layouts/RootLayout'
import { ConfigurationGuard, ModelGuard, TotalGuard } from '@app/router/guards'
import { AdminLoginPage } from '@pages/AdminLoginPage'
import { AdminRegistrationPage } from '@pages/AdminRegistrationPage'
import { ConfigurationPage } from '@pages/ConfigurationPage'
import { HomePage } from '@pages/HomePage'
import { LocationPage } from '@pages/LocationPage'
import { ModelPage } from '@pages/ModelPage'
import { OrderPage } from '@pages/OrderPage'
import { TotalPage } from '@pages/TotalPage'
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
            {
              element: <TotalGuard />,
              children: [
                {
                  path: RoutePath.Total,
                  element: <TotalPage />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        {
          path: AdminRoutePath.Login,
          element: <AdminLoginPage />,
        },
        {
          path: AdminRoutePath.Registration,
          element: <AdminRegistrationPage />,
        },
      ],
    },
  ],
  {
    basename: AppConfig.baseUrl,
  },
)
