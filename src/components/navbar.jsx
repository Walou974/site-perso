function Navbar({ selectedSection, onSelectSection }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home" onClick={() => onSelectSection('home')} className={selectedSection === 'home' ? 'active' : ''}>Home</a></li>
        <li className="navbar-item"><a href="#projects" onClick={() => onSelectSection('projects')} className={selectedSection === 'projects' ? 'active' : ''}>Projects</a></li>
        <li className="navbar-item"><a href="#about" onClick={() => onSelectSection('about')} className={selectedSection === 'about' ? 'active' : ''}>About</a></li>
        <li className="navbar-item"><a href="#services" onClick={() => onSelectSection('services')} className={selectedSection === 'services' ? 'active' : ''}>Services</a></li>
        <li className="navbar-item"><a href="#contact" onClick={() => onSelectSection('contact')} className={selectedSection === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;