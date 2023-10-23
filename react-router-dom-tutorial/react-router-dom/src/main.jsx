import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import App from './App.jsx'
import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './error-page';
import './index.css'
import Contact, {loader as contactLoader, action as deleteAction, contactAction} from './routes/contact';
import EditContact, { action as editAction } from "./routes/edit";
import Index from './routes/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          /* the rest of the routes */
        ],
      },
      // {
      //   path: "contacts/:contactId",
      //   element: <Contact />,
      //   loader: contactLoader,
      //   action: contactAction
      //   // here it is giving some warning related to Outlet
      //   // children: [
      //   //   {
      //   //     path: "destroy",
      //   //     action: deleteAction,
      //   //     errorElement: <div>Oops! There was an Error</div>
      //   //   }
      //   // ]
      // },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: deleteAction,
        errorElement: <div>Oops! There was an Error</div>
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
