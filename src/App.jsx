import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Projects from './components/projects.jsx'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Services from './components/services.jsx'
import Contact from './components/contacts.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app-container">
      <Header className="site-header" navbarSelectedSection={activeSection} navbarOnSectionChange={setActiveSection} />

      {activeSection === 'home' && (
        <div className="site-body">
          <Home clickedButton={setActiveSection} />
        </div>
      )}

      {activeSection === 'projects' && (
          <Projects />

      )}

      {activeSection === 'about' && (
        <div className="site-body">
          <About />
        </div>
      )}

      {activeSection === 'services' && (
        <div className="site-body">
          <Services />
        </div>
      )}

      {activeSection === 'contact' && (
        <div className="site-body">
          <Contact />
        </div>
      )}
      <Footer />
    </div>
  )
}

export default App
