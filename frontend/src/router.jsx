import { createBrowserRouter } from "react-router-dom";

import App, { loader as appLoader } from "./App";
import { Home, Auth, ErrorPage, Community, EmergencyServices, AboutUs, Profile } from "./containers";
import { authAction, profileLoader  } from "./containers";
import { Dashboard, MedicalRecord } from './components';
import {  } from './components';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      loader: appLoader,
      children: [
        {
          path: 'home',
          element: <Home />,
          loader: profileLoader,
          children: [
            {
              path: 'dashboard',
              element: <Dashboard />,
            },
            {
              path: 'medical-record',
              element: <MedicalRecord />,
            },
            {
              path: 'nutrition'
            },
            {
              path: 'workout',
            },
            {
              path: 'appointments-and-medications',
            },
            {
              path: 'chat'
            }
          ]
        },
        {
            path: 'auth',
            element: <Auth />,
            action: authAction
        },
        {
          path: 'community',
          element: <Community />
        },
        {
          path: 'emergency-services',
          element: <EmergencyServices />
        },
        {
          path: 'about-us',
          element: <AboutUs />
        },
        {
          path: 'profile/:id',
          element: <Profile />
        }
      ]
    }
  ])

export default router;