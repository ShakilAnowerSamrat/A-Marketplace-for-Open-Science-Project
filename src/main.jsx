import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
 
import { ThemeProvider } from "@material-tailwind/react";
import router from './routes/Route';
import { RouterProvider } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    
      {/* <App /> */}
    </ThemeProvider>
  </React.StrictMode>,
)
