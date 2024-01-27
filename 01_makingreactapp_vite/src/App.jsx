import { useState } from 'react'
import Demo from "./Demo.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>creating react app through vite</h1>
      <Demo/>
    </>
  )
}

export default App
