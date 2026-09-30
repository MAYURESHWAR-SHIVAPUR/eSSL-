import React, { useState } from 'react'
import Approuter from "./routes/Approuter"
import Error from './pages/Error'

const App = () => {
  const [size, _] = useState(window.innerWidth >= 1023)
  return (
    <>
      {size ? <Approuter /> : <Error />}
    </>
  )
}

export default App
