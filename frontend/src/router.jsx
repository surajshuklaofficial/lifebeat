import { createBrowserRouter, Navigate } from "react-router-dom";

import App from "./App";
import { ErrorPage, Community } from "./layout";
import { headLoader } from "./layout";
import { Dashboard, Profile, Auth } from "./components";
import { authAction, profileLoader, profileAction } from "./components";
import { Home } from './containers';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />
    },
    { 
      path: '/home',
      element: <Home />,
      errorElement: <ErrorPage />, 
      loader: headLoader,
      children: [
        { index:true, element: <Dashboard />},
        {
          path: 'dashboard',
          element: <Dashboard />
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
      path: '/auth',
      element: <Auth />,
      action: authAction
    },
    {
      path: '/community',
      element: <Community />,
      loader: headLoader
    }
  ])

export default router;