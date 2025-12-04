import { useState } from 'react'
import reactLogo from './assets/vector.png'
import viteLogo from '/vite.svg'
import './App.css'

import LandingPage from './pages/LandingPage'
import ServicePage from './pages/ServicePage'
import ProcessPage from './pages/processPage'
import Contact from './Components/Contact'
import FooterBlock from './Components/FooterBlock'
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPage/>
    <ServicePage/>
    <ProcessPage/>
    < Contact/>
    <Footer/>
    </>
  )
}

export default App
