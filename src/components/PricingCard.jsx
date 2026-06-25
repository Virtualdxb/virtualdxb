import { Link } from 'react-router-dom'

function PricingCard({ name, price, volume, features, featured = false }) {
  return (
    <article className={`price-card glass-card reveal ${featured ? 'featured' : ''}`}>
      {featured && <span className="plan-badge">Most selected</span>}
      <h3>{name}</h3>
      <strong>{price}</strong>
      <p className="plan-volume">{volume}</p>
      <ul>
        {features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      <Link className="btn price-btn" to="/contact">Request this plan</Link>
    </article>
  )
}

export default PricingCard
