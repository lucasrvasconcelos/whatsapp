import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './pages/_default-layout'
import { Chat } from './pages/chat/page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    // errorElement: <ErroPage />,
    errorElement: <span>🔥 Futura página de erro</span>,
    children: [
      {
        path: '/',
        element: <Chat />,
      },
    ],
  },
])
