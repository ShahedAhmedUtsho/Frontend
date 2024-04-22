import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Root from './Routes/Root.jsx';
import MongoDB from './Components/MongoDB/MongoDB.jsx';
import About from './Components/About/About.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/mongodb",
        loader:()=>fetch('http://localhost:3000/dbusers'),
        element: <MongoDB></MongoDB>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
