import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Testcomponent } from '@/testComponent'

function App() {
  const [count, setCount] = useState(0)
  const { VITE_TEST } = import.meta.env
  console.log(import.meta.env)

  return (
    <>
      <h1>{VITE_TEST}</h1>
      <Testcomponent />
    </>
  )
}

export default App
