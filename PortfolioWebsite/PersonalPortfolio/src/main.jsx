import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Bio from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Bio/>
    <Skills/>
    <Projects/>
    <Contact/>
   
  </React.StrictMode>,
)
