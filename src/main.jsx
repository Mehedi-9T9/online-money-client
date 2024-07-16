import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Login from './Pages/Login.jsx';
import Balance from './Pages/Balance.jsx';
import Overview from './Pages/Overview.jsx';
import Rejister from './Pages/Rejister.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Overview></Overview>
      },
      {
        path: "/balance",
        element: <Balance></Balance>
      }

    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/rejister",
    element: <Rejister></Rejister>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
