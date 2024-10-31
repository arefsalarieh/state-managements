import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/layout/Layout'
import MainPage from './pages/mainPage/MainPage'
import ChangeValue from './pages/changeValue/changeValue'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<MainPage/>
        },
        {
          path:'changeValue',
          element:<ChangeValue/>
        },        
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
