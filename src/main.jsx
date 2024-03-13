import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AllProjects from './Components/AllProjects.jsx'
import Contact from './sections/Contact.jsx'
import Home from './sections/Home.jsx'
import Contactinfo from './Components/Contactinfo.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path: '/allprojects', element: <AllProjects />
      },
      {
        path: '/contact', element: <Contactinfo />
      }
    ],
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
)

