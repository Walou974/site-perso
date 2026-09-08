function Services() {
  const servicesList = [
  {
    number: "01",
    title: "System & Cloud Administration",
    description: "Configuration, maintenance, and deployment of Linux and Windows server environments. Focus on OS security, user identity management (Active Directory, LDAP), and virtualized infrastructure management to ensure maximum uptime.",
    tags: ["Debian/Ubuntu", "Windows Server", "Active Directory", "VMware / Proxmox", "Docker"]
  },
  {
    number: "02",
    title: "Network & Security Infrastructure",
    description: "Designing and maintaining secure corporate network topologies. Setup and management of switches, routers, VPN connections, and firewalls to secure traffic, segment networks (VLANs), and streamline communication.",
    tags: ["TCP/IP", "VLANs", "Firewalls", "VPN", "DNS/DHCP"]
  },
  {
    number: "03",
    title: "IT Support & Automation",
    description: "Level 1 & 2 international IT support, incident diagnosis, and ITIL-compliant ticket resolution. Automation of repetitive system tasks and routine maintenance using custom scripting.",
    tags: ["Bash / Python", "PowerShell", "ITIL", "Monitoring", "N1/N2 Support"]
  },
  {
    number: "04",
    title: "Monitoring & High Availability",
    description: "Implementation of real-time monitoring tools and alerting solutions to track server health and network metrics. Proactive management to prevent downtime and optimize resource usage.",
    tags: ["Zabbix / Nagios", "Grafana", "Log Analysis", "Alerting", "SLA Management"]
  },
  {
    number: "05",
    title: "Data Protection & Backup Solutions",
    description: "Designing, testing, and maintaining automated backup routines and disaster recovery plans (DRP). Ensuring data integrity, compliance, and swift recovery in case of system failures.",
    tags: ["Veeam Backup", "DRP / Disaster Recovery", "Raid Configuration", "Data Integrity"]
  }
];

  return (
    <section id="services" className="services-section">
      <h2 className="section-title">
        <span className="text-muted">03.</span> Services
      </h2>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-header">
              <span className="service-number">{service.number}</span>
              <h3 className="service-title">{service.title}</h3>
            </div>
            <p className="service-description">{service.description}</p>
            <div className="service-tags">
              {service.tags.map((tag, tIndex) => (
                <span key={tIndex} className="service-tag">[{tag}]</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;