function Card({ id, title, description, tags, gitLink, liveDemoLink, nb }) {
  return (
    <div className="card-content">
      <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
        <span style={{ color: '#ff5f56' }}>●</span>
        <span style={{ color: '#ffbd2e' }}>●</span>
        <span style={{ color: '#27c93f' }}>●</span>
      </div>
      <div className="card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="card-tag">[{tag}]</span>
        ))}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-links">
        {gitLink && (
          <a href={gitLink} target="_blank" rel="noopener noreferrer" className="card-link">
            [GitHub]
          </a>
        )}
        {liveDemoLink && (
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer" className="card-link">
            [Live Demo]
          </a>
        )}
      </div>
      <div className="card-footer">
        <span className="card-number">{id}/{nb}</span>
      </div>
    </div>
  );
}

export default Card;