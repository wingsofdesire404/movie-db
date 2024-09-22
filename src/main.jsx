import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <div> Home</div>
      }, 

      {
        path: "/movies",
        element: <div> Movies</div>
      },

      {
        path: "/shows",
        element: <div> Shows</div>
      },

      {
        path: "/search",
        element: <div> Search</div>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
