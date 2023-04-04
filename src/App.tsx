import { useState } from 'react'
import { Navbar } from './components/navbar'
import { Outlet } from 'react-router-dom'
import Global from "../styles"
import { Footer } from './components/footer'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    <Footer/>
    <Global/>
    </>
    
  )
}

export default App
