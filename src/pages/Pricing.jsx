import CTA from '../components/CTA.jsx'
import PricingCard from '../components/PricingCard.jsx'
import VisualMockup from '../components/VisualMockup.jsx'
import { customPlan, pricingFaqs, pricingPlans, unsplashImages } from '../data/siteContent.js'

function Pricing() {
  return (
    <>
      <section className="page-hero split-hero">
        <div>
          <p className="eyebrow navy">Pricing</p>
          <h1>Plans for small teams, growing teams, and custom call volume.</h1>
          <p>Choose a monthly plan based on expected call volume, then add workflow needs like bookings, transfers, after-hours answering, or reporting.</p>
        </div>
        <VisualMockup type="image" image={unsplashImages.pricing} />
      </section>
      <section className="section pricing-section">
        <div className="pricing-grid">
          {pricingPlans.map(([name, price, volume, features], index) => (
            <PricingCard name={name} price={price} volume={volume} features={features} featured={index === 1} key={name} />
          ))}
        </div>
        <p className="pricing-note">Local number and forwarding availability depends on country, provider, and technical setup.</p>
      </section>
      <section className="section custom-plan-panel">
        <div>
          <p className="eyebrow navy">Custom plan</p>
          <h2>{customPlan[1]} for multi-market or high-volume operations.</h2>
          <p>Use a tailored plan when your team needs custom scripts, higher call volume, dedicated escalation rules, or multi-country routing.</p>
        </div>
        <ul className="feature-list">
          {customPlan[3].map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
      <section className="section faq-section pricing-faqs">
        <div className="section-heading">
          <p className="eyebrow navy">Pricing FAQs</p>
          <h2>Common plan questions.</h2>
        </div>
        <div className="faq-list">
          {pricingFaqs.map(([question, answer]) => (
            <details className="faq-item reveal" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <CTA title="Not sure which plan fits?" text="Send your estimated call volume and coverage needs. We will recommend a practical starting plan." />
    </>
  )
}

export default Pricing
