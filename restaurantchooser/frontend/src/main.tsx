import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom';
import router from './router.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* This error wants a specific interface to adjust types */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
