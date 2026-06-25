import CTA from '../components/CTA.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import VisualMockup from '../components/VisualMockup.jsx'
import { Link } from 'react-router-dom'
import { allServices, serviceRoutes, unsplashImages } from '../data/siteContent.js'

function Services() {
  return (
    <>
      <section className="page-hero split-hero">
        <div>
          <p className="eyebrow navy">Services</p>
          <h1>Virtual receptionist services for real business coverage.</h1>
          <p>VirtualDxB handles customer moments that interrupt owners, sales teams, technicians, and office managers.</p>
        </div>
        <VisualMockup type="image" image={unsplashImages.services} />
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow navy">Service desk</p>
          <h2>Detailed coverage for calls, messages, bookings, and lead intake.</h2>
        </div>
        <div className="service-grid service-grid-large">
          {allServices.map(([title, text, icon], index) => <ServiceCard title={title} text={text} icon={icon} index={index} key={title} />)}
        </div>
      </section>
      <section className="section split-section">
        <VisualMockup type="summary" />
        <div>
          <p className="eyebrow navy">Message delivery</p>
          <h2>Clean summaries your team can act on quickly.</h2>
          <p>Every workflow is built around useful handoff: caller details, reason for calling, urgency, appointment requests, transfer outcome, and next action. Summaries can be sent by WhatsApp and email.</p>
          <ul className="feature-list">
            <li>Lead qualification details captured consistently</li>
            <li>Urgent requests routed by your escalation rules</li>
            <li>Notes formatted for fast team follow-up</li>
          </ul>
        </div>
      </section>
      <section className="section route-card-section">
        <div className="section-heading compact-heading">
          <p className="eyebrow navy">Explore</p>
          <h2>Detailed service pages</h2>
        </div>
        <div className="route-card-grid">
          {serviceRoutes.map(([title, to, text, icon]) => (
            <Link className="route-card reveal" to={to} key={to}>
              <span className="card-icon small-icon">{icon}</span>
              <strong>{title}</strong>
              <span>{text}</span>
            </Link>
          ))}
        </div>
      </section>
      <CTA title="Need a receptionist workflow built around your team?" text="Combine call answering, messages, transfers, after-hours coverage, overflow support, and WhatsApp or email summaries into one service plan." />
    </>
  )
}

export default Services
