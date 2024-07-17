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
import SendMoney from './Pages/SendMoney.jsx';
import Cashout from './Pages/Cashout.jsx';
import Cashin from './assets/Cashin.jsx';
import TransactionManage from './Pages/Agent/TransactionManage.jsx';
import AgentTransaction from './Pages/Agent/AgentTransaction.jsx';
import UserManagement from './Pages/Admin/UserManagement.jsx';
import AllTransaction from './Pages/Admin/AllTransaction.jsx';

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
      },
      {
        path: "/sendmoney",
        element: <SendMoney></SendMoney>
      },
      {
        path: "/cashout",
        element: <Cashout></Cashout>
      },
      {
        path: "/cashin",
        element: <Cashin></Cashin>
      },
      //for agent
      {
        path: "/transaction",
        element: <TransactionManage></TransactionManage>
      },
      {
        path: "/history",
        element: <AgentTransaction></AgentTransaction>
      },
      //Admin Route
      {
        path: "/usermanagement",
        element: <UserManagement></UserManagement>
      },
      {
        path: "/alltransaction",
        element: <AllTransaction></AllTransaction>
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
