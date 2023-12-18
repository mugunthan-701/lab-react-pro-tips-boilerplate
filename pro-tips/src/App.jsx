import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './About'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import './App.css'
import Registration from './Registration'
import Contact from './Contact'
import Home from './Home'

function App() {
  return (
    <div id='main'>
      
      <Navbar>
       
      </Navbar>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
          <Route path='/About' element={<About />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App
