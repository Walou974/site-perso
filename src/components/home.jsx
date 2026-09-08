function Home( { clickedButton } ) {

    const setActiveSection = (section) => {
        if (clickedButton) {
            clickedButton(section);
        }
    };
  return (
    <section className="home-container">
      {/* Terminal Command Prompt */}
      <div className="terminal-badge">
        <span className="status-dot"></span>
        <span>~/portfolio $ cat intro.txt</span>
      </div>

      {/* Hero Title */}
      <h1 className="hero-title">
        Hi, I'm <span className="highlight-text">Mael Albany</span>
      </h1>

      <p className="hero-subtitle">
Systems & Network Administrator      </p>

      {/* Description */}
      <p className="hero-description">
Building resilient infrastructures and secure network systems. Specializing in Linux & Windows server administration, cloud technologies, and ITIL-compliant service management for mission-critical operations.      </p>

      {/* Action Buttons */}
      <div className="hero-buttons">
        <a className="btn btn-primary" onClick={() => setActiveSection('projects')}>
          view-systems-logs        </a>
        <a className="btn btn-secondary" onClick={() => setActiveSection('contact')}>
          send-support-ticket        </a>
      </div>
    </section>
  );
}

export default Home;