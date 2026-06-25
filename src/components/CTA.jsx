import { Link } from 'react-router-dom'

function CTA({ eyebrow = 'Plan your coverage', title, text, action = 'Talk to us', to = '/contact' }) {
  return (
    <section className="section cta-panel" aria-label={eyebrow}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="btn primary" to={to}>{action}</Link>
    </section>
  )
}

export default CTA
