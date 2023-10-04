import { useState } from 'react'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'


function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
