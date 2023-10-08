import { useState } from 'react'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'


function App() {
  

  // max-w-screen-2xl
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
