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
import Home from './pages/Home.jsx'
import Movies from './pages/movies/movies.jsx'
import Shows from './pages/shows/shows.jsx'
import Search from './pages/search/search.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }, 

      {
        path: "/movies",
        element: <Movies/>
      },

      {
        path: "/shows",
        element: <Shows/>
      },

      {
        path: "/search",
        element: <Search/>
      },
    ]
  }
]);

import { ChakraProvider, ColorModeScript, Show } from '@chakra-ui/react'
import theme from '../theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
  </ChakraProvider>
  </StrictMode>

)
