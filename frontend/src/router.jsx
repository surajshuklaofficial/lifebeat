import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import { Home, EmailVerification, Hero } from './pages';
import { emailVerifyAction } from './pages';
import { ErrorPage, Community } from "./layout";
import { headLoader } from "./layout";
import { Dashboard, Profile, Auth } from "./components";
import { authAction, profileLoader, profileAction, dashboardLoader, dashboardAction } from "./components";


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <Hero />},
        {
          path: '/auth',
          element: <Auth />,
          action: authAction
        },
        { 
          path: '/home',
          element: <Home />,
          errorElement: <ErrorPage />, 
          loader: headLoader,
          children: [
            { index:true, element: <Dashboard />, loader: dashboardLoader, action: dashboardAction},
            {
              path: 'dashboard',
              element: <Dashboard />,
              loader: dashboardLoader,
              action: dashboardAction
            },
            {
              path: 'medical-records',
              element: <h1>Medical Record</h1>
            },
            {
              path: 'appointments',
            },
            {
              path: 'profile/:id/:name',
              element: <Profile />,
              loader: profileLoader,
              action: profileAction
            }
          ]
        },
        {
          path: '/community',
          element: <Community />,
          loader: headLoader
        },
        {
          path: '/verify-email',
          element: <EmailVerification />,
          loader: emailVerifyAction
        }
      ]
    },
  ])

export default router;