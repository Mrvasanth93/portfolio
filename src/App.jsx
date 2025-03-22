import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/home'
import About from './pages/About/about'
import Skills from './pages/skills/skills'
import Contact from './pages/contact/contact'
import Footer from './pages/compononts/footer'
import Nav from './pages/compononts/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
