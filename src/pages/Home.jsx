import { Link } from 'react-router-dom'
import heroImage from '../assets/virtualdxb-dubai-hero.png'
import CTA from '../components/CTA.jsx'
import PricingCard from '../components/PricingCard.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import VisualMockup from '../components/VisualMockup.jsx'
import { countries, howSteps, industries, pricingPlans, serviceCards, unsplashImages } from '../data/siteContent.js'

function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-media" src={heroImage || unsplashImages.home} alt="Premium virtual reception operations for global businesses" width="1536" height="864" fetchPriority="high" decoding="async" />
        <div className="hero-overlay"></div>
        <div className="hero-content reveal">
          <p className="eyebrow">Global virtual reception company</p>
          <h1>Never Miss Another Customer Call</h1>
          <p className="hero-subhead">Professional virtual receptionists for growing businesses across the USA, UK, UAE, Canada, and Australia.</p>
          <div className="hero-actions">
            <Link className="btn primary" to="/contact">Book Free Consultation</Link>
            <Link className="btn secondary" to="/pricing">View Pricing</Link>
          </div>
          <div className="trust-row" aria-label="Countries served">
            {countries.map((country) => <span key={country}>{country}</span>)}
          </div>
        </div>
        <div className="hero-visual-stack">
          <VisualMockup type="dashboard" />
          <VisualMockup type="call" />
        </div>
      </section>

      <section className="section trust-strip" aria-label="Countries served">
        {countries.map((country) => <span className="reveal" key={country}>{country}</span>)}
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow navy">Professional first impressions</p>
          <h2>A reception team for calls, chats, bookings, and customer follow-up.</h2>
          <p>VirtualDxB gives growing businesses a polished front desk without hiring in-house reception staff. Start with call answering, add bookings and lead qualification, then expand into live chat or after-hours coverage.</p>
        </div>
        <VisualMockup type="image" image={unsplashImages.home} />
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow navy">Services Preview</p>
          <h2>Core receptionist coverage for everyday customer enquiries.</h2>
        </div>
        <div className="service-grid">
          {serviceCards.slice(0, 4).map(([title, text, icon], index) => <ServiceCard title={title} text={text} icon={icon} index={index} key={title} />)}
        </div>
        <Link className="section-link" to="/services">View all services</Link>
      </section>

      <section className="section navy-section compact-band">
        <div className="section-heading">
          <p className="eyebrow">How It Works Preview</p>
          <h2>From setup to live call handling in a clear workflow.</h2>
        </div>
        <div className="steps">
          {howSteps.slice(0, 3).map(([title, text], index) => (
            <article className="step-card reveal" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Link className="section-link light" to="/how-it-works">See the full process</Link>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow navy">Industries Preview</p>
          <h2>Built for businesses where missed calls become missed revenue.</h2>
        </div>
        <div className="industry-grid">
          {industries.slice(0, 6).map(([industry, text]) => (
            <article className="industry-card reveal" key={industry}>
              <span>{industry.slice(0, 2).toUpperCase()}</span>
              <h3>{industry}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <Link className="section-link" to="/industries">Explore industries</Link>
      </section>

      <section className="section pricing-section">
        <div className="section-heading">
          <p className="eyebrow navy">Pricing Preview</p>
          <h2>Simple monthly plans for professional call coverage.</h2>
        </div>
        <div className="pricing-grid preview-pricing">
          {pricingPlans.slice(0, 3).map(([name, price, volume, features], index) => (
            <PricingCard name={name} price={price} volume={volume} features={features} featured={index === 1} key={name} />
          ))}
        </div>
        <Link className="section-link" to="/pricing">Compare all plans</Link>
      </section>

      <section className="section split-section dashboard-showcase">
        <VisualMockup type="summary" align="left" />
        <div>
          <p className="eyebrow">Dashboard showcase</p>
          <h2>See calls, bookings, transfers, and messages as a single reception workflow.</h2>
          <p>VirtualDxB is designed to make handoffs clear. Your team can receive concise call outcomes, caller intent, appointment requests, and next steps without listening to every conversation.</p>
        </div>
      </section>

      <section className="section testimonials">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>Designed for companies that need to sound established from the first ring.</h2>
        </div>
        <div className="testimonial-grid">
          <article className="testimonial-card reveal"><p>"Calls are answered professionally and our team receives useful notes instead of vague voicemail messages."</p><strong>Service company owner</strong></article>
          <article className="testimonial-card reveal"><p>"The booking workflow made our admin process calmer during busy periods."</p><strong>Clinic operations lead</strong></article>
          <article className="testimonial-card reveal"><p>"Warm transfers and message summaries helped us respond faster to serious enquiries."</p><strong>Real estate team manager</strong></article>
        </div>
      </section>

      <section className="section comparison-section">
        <div className="section-heading">
          <p className="eyebrow navy">Why VirtualDxB</p>
          <h2>Premium reception support without adding a front desk payroll.</h2>
        </div>
        <div className="comparison-grid">
          <article>
            <strong>Typical missed-call setup</strong>
            <ul>
              <li>Voicemail after hours</li>
              <li>Slow callbacks during busy periods</li>
              <li>Inconsistent lead notes</li>
            </ul>
          </article>
          <article className="featured-comparison">
            <strong>VirtualDxB reception layer</strong>
            <ul>
              <li>Calls answered in your company name</li>
              <li>Bookings, transfers, and lead qualification</li>
              <li>WhatsApp and email summaries for fast follow-up</li>
            </ul>
          </article>
        </div>
      </section>

      <CTA
        title="Ready to sound established from the first ring?"
        text="Tell us your call volume, countries served, business hours, and routing needs. We will recommend a practical reception setup."
        action="Start with VirtualDxB"
      />
    </>
  )
}

export default Home
