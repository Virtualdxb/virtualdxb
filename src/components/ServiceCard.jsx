function ServiceCard({ title, text, icon, index }) {
  return (
    <article className="service-card reveal" style={{ '--delay': `${index * 45}ms` }}>
      <span className="card-icon">{icon || String(index + 1).padStart(2, '0')}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default ServiceCard
