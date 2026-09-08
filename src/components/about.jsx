function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">
        <span className="text-muted">02.</span> About Me
      </h2>

      <div className="about-content">
        <div className="about-text">
          <p>
Systems & Networks Administrator with 3 years of hands-on experience in infrastructure management, server administration, and international IT support. Holding a Degree in Computer Networks & Telecommunications, I specialize in maintaining high-availability environments, optimizing network performance, and automating system workflows.          </p>
          
          <p>
My career has led me to work across diverse technical environments, from deploying and monitoring virtualized architectures to providing Level 1 & 2 support for major international corporations (Haier, Groupe SEB, Altex). I thrive on diagnosing complex technical issues, implementing secure configurations, and ensuring seamless operational continuity.          </p>

            <p> Driven by continuous learning, I am constantly exploring cloud technologies, DevOps practices, and infrastructure automation. I value clean documentation, ITIL best practices, and effective communication in multicultural and fast-paced engineering teams.          </p>

          <p className="tech-intro">Here are a few technologies and tools I work with:</p>
          
          <ul className="skills-list">
            <li>Linux (Debian/Ubuntu)</li>
            <li>Windows Server / Active Directory</li>
            <li>VMware / Proxmox / Docker</li>
            <li>TCP/IP / VLANs / Firewalls / VPN</li>
            <li>Bash / Python / PowerShell</li>
            <li>Ticketing / ITIL / Monitoring</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;