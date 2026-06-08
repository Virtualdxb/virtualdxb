import { useEffect, useState } from 'react'
import heroImage from './assets/virtualdxb-dubai-hero.png'
import './App.css'

const services = [
  ['24/7 Phone Answering', 'Dedicated call handling for leads, clients, and urgent customer requests at any hour.'],
  ['Virtual Receptionist', 'A polished UAE front-desk presence without hiring a full in-house reception team.'],
  ['WhatsApp Support', 'Fast customer replies, lead capture, follow-ups, and message routing through WhatsApp.'],
  ['Live Chat Support', 'Website chat coverage that helps visitors get answers before they leave.'],
  ['Appointment Booking', 'Calendar coordination, confirmation details, and booking updates sent to your team.'],
  ['Customer Communication', 'Message taking, email notifications, escalation notes, and structured handovers.'],
]

const stats = [
  ['24/7', 'Coverage for UAE businesses'],
  ['AED 1K+', 'Premium monthly service tier'],
  ['8+', 'Reception and support workflows'],
  ['0', 'Missed opportunities by design'],
]

const trust = ['UAE business hours and after-hours', 'Arabic and English workflow ready', 'Lead capture and escalation', 'WhatsApp-first customer support']

const steps = [
  ['01', 'Map your customer flow', 'We define greetings, call scripts, WhatsApp rules, booking logic, and escalation paths.'],
  ['02', 'Launch your virtual desk', 'VirtualDxB becomes your reception layer for calls, chats, messages, and appointments.'],
  ['03', 'Receive clear handovers', 'Your team gets concise customer notes, booking details, and priority alerts by email.'],
]

const industries = ['Real Estate', 'Medical Clinics', 'Legal Firms', 'Hospitality', 'E-commerce', 'Business Consulting', 'Salons & Spas', 'Corporate Offices']

const pricing = [
  ['Essential', 'AED 299', 'For lean teams that need professional coverage.', ['Business-hours answering', 'Message taking', 'Email notifications', 'Appointment requests']],
  ['Signature', 'AED 499', 'For growing UAE businesses that need 24/7 response.', ['24/7 phone answering', 'Virtual receptionist', 'WhatsApp support', 'Live chat support', 'Priority escalation']],
  ['Custom', 'Custom AED', 'For high-volume operations and multi-location teams.', ['Dedicated workflow design', 'Multi-channel coverage', 'VIP response rules', 'CRM-ready handovers']],
]

const testimonials = [
  ['VirtualDxB changed how our clients experience us. The first impression is sharper, faster, and more premium.', 'Nadia R.', 'Real Estate Director'],
  ['Our clinic reception became calmer within the first week. Calls, WhatsApp messages, and booking requests are handled properly.', 'Dr. Kareem A.', 'Clinic Founder'],
  ['It feels like a senior front-desk team, not a basic answering service. The handovers are clear and professional.', 'Omar H.', 'Managing Partner'],
]

const faqs = [
  ['Is VirtualDxB available 24/7?', 'Yes. Our Prestige and Signature plans are built for 24/7 phone answering and customer communication coverage.'],
  ['Can you handle WhatsApp support?', 'Yes. We manage WhatsApp responses, lead capture, booking requests, follow-ups, and escalation messages.'],
  ['Do you work with UAE appointment-based businesses?', 'Yes. Clinics, real estate teams, consultants, salons, and service companies can use our booking workflows.'],
  ['Can the service feel like our own team?', 'Yes. We align greetings, tone, scripts, escalation rules, and handover formats to your business.'],
]

const formSubmitEmail = 'virtualdxb.business@gmail.com'
const formSubmitAction = `https://formsubmit.co/${formSubmitEmail}`
const formSubmitAjaxAction = `https://formsubmit.co/ajax/${formSubmitEmail}`
const whatsAppNumber = '971500000000'

function Logo() {
  return (
    <a className="logo" href="#hero" aria-label="VirtualDxB home">
      <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 4L57 18V46L32 60L7 46V18L32 4Z" />
        <path className="logo-base" d="M17 45H47" />
        <path className="logo-tower" d="M21 43V28H27V43" />
        <path className="logo-tower" d="M30 43V18L35 14L40 18V43" />
        <path className="logo-tower" d="M43 43V25H49V43" />
      </svg>
      <span className="logo-copy">
        <strong>VirtualDxB</strong>
        <small>Your UAE Virtual Reception Team</small>
      </span>
    </a>
  )
}

function SkylineDivider() {
  return (
    <div className="skyline-divider" aria-hidden="true">
      <svg viewBox="0 0 1440 170" preserveAspectRatio="none">
        <path d="M0 142H70V112H102V74H126V112H168V96H204V54H228V22H244V54H262V142H322V88H350V58H372V88H410V118H452V66H490V34H510V66H538V142H604V104H632V78H656V104H704V40H722V18H738V40H756V142H830V94H862V70H890V94H936V116H982V52H1012V18H1032V52H1064V142H1128V106H1160V76H1188V106H1238V62H1262V38H1280V62H1302V142H1440V170H0V142Z" />
      </svg>
    </div>
  )
}

function LeadForm() {
  const [status, setStatus] = useState('idle')
  const [errorDetails, setErrorDetails] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    if (data.get('_honey')) {
      return
    }

    setStatus('loading')
    setErrorDetails(null)

    try {
      const response = await fetch(formSubmitAjaxAction, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })
      const responseText = await response.text()
      let responseBody = responseText

      try {
        responseBody = responseText ? JSON.parse(responseText) : null
      } catch {
        responseBody = responseText
      }

      console.log('FormSubmit response', {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText,
        body: responseBody,
      })

      if (!response.ok) {
        const message =
          responseBody?.message ||
          responseBody?.error ||
          responseBody?.errors?.join?.(', ') ||
          responseText ||
          response.statusText ||
          'Unable to send enquiry'

        throw new Error(message, { cause: { status: response.status, body: responseBody } })
      }

      form.reset()
      setStatus('success')
    } catch (error) {
      console.error('FormSubmit submission failed', error)
      setErrorDetails({
        statusCode: error.cause?.status || 'Network error',
        message: error.message || 'Unable to send enquiry',
      })
      setStatus('error')
    }
  }

  const isLoading = status === 'loading'

  return (
    <form action={formSubmitAction} method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New VirtualDxB website enquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />
      <div className="form-grid">
        <input type="text" name="name" placeholder="Full name" aria-label="Full name" required disabled={isLoading} />
        <input type="email" name="email" placeholder="Business email" aria-label="Business email" required disabled={isLoading} />
      </div>
      <div className="form-grid">
        <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" required disabled={isLoading} />
        <input type="text" name="company" placeholder="Company name" aria-label="Company name" disabled={isLoading} />
      </div>
      <select name="service" aria-label="Service need" defaultValue="" disabled={isLoading}>
        <option value="" disabled>Primary service needed</option>
        {services.map(([service]) => <option key={service} value={service}>{service}</option>)}
      </select>
      <textarea name="message" rows="5" placeholder="What should VirtualDxB handle for you?" aria-label="Message" required disabled={isLoading}></textarea>
      <button className="btn primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Sending enquiry...' : 'Send enquiry'}
      </button>
      {status === 'success' && (
        <p className="form-note" role="status">Thank you. Your enquiry has been received.</p>
      )}
      {status === 'error' && (
        <p className="form-note" role="alert">
          Submission failed. Status: {errorDetails?.statusCode}. Error: {errorDetails?.message}
        </p>
      )}
      {status === 'idle' && (
        <p className="form-note">Enquiries are sent securely to {formSubmitEmail}.</p>
      )}
    </form>
  )
}

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.14 },
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <header className="nav">
        <Logo />
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-cta" href="#contact">Talk to us</a>
      </header>

      <section className="hero" id="hero">
        <img className="hero-media" src={heroImage} alt="Dubai skyline and premium UAE business reception operations" width="1536" height="864" fetchPriority="high" decoding="async" />
        <div className="hero-overlay"></div>
        <div className="hero-content reveal">
          <p className="eyebrow">VirtualDxB</p>
          <h1>Never Miss a Customer Call Again</h1>
          <p className="hero-subhead">
            24/7 phone answering, WhatsApp support, live chat, appointment booking and customer communication
            services for UAE businesses.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">Start premium coverage</a>
            <a className="btn secondary" href="#pricing">View AED pricing</a>
          </div>
          <div className="trust-row" aria-label="Trust badges">
            {trust.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="hero-panel reveal delay-1" aria-label="UAE business statistics">
          <p>UAE business reception dashboard</p>
          <div className="stat-grid">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section intro-strip">
        <div>
          <p className="eyebrow navy">Built for premium first impressions</p>
          <h2>Your reception team, modernized for UAE customer expectations.</h2>
        </div>
        <p>
          VirtualDxB gives founders, clinics, real estate teams, consultants, and service businesses the customer
          response quality expected from a premium UAE company.
        </p>
      </section>

      <SkylineDivider />

      <section className="section cta-strip" aria-label="Premium reception call to action">
        <div>
          <p className="eyebrow navy">Reception quality audit</p>
          <h2>Find out how many customer enquiries your team is leaking.</h2>
        </div>
        <a className="btn primary" href="#contact">Request a response audit</a>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow navy">Services</p>
          <h2>High-touch support across every customer channel.</h2>
        </div>
        <div className="service-grid">
          {services.map(([title, text], index) => (
            <article className="service-card reveal" style={{ '--delay': `${index * 60}ms` }} key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-panel" aria-label="VirtualDxB premium setup">
        <div>
          <p className="eyebrow">Premium setup</p>
          <h2>Install a Dubai-grade reception experience in days, not months.</h2>
          <p>We align your scripts, appointment rules, WhatsApp response flow, and escalation process before your coverage goes live.</p>
        </div>
        <a className="btn primary" href="#contact">Design my workflow</a>
      </section>

      <section className="section navy-section" id="how">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>From setup to live customer handling in a refined workflow.</h2>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step-card reveal" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="industries">
        <div className="section-heading">
          <p className="eyebrow navy">Industries we serve</p>
          <h2>For businesses where every missed enquiry has a cost.</h2>
        </div>
        <div className="industry-grid">
          {industries.map((industry) => <span className="reveal" key={industry}>{industry}</span>)}
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="section-heading">
          <p className="eyebrow navy">Pricing</p>
          <h2>Premium AED plans for serious customer response.</h2>
        </div>
        <div className="pricing-grid">
          {pricing.map(([name, price, desc, features], index) => (
            <article className={`price-card reveal ${index === 1 ? 'featured' : ''}`} key={name}>
              {index === 1 && <span className="plan-badge">Most selected</span>}
              <h3>{name}</h3>
              <strong>{price}</strong>
              <p>{desc}</p>
              <ul>
                {features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a className="btn price-btn" href="#contact">Request this plan</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonials" id="testimonials">
        <div className="section-heading">
          <p className="eyebrow">Testimonials</p>
          <h2>Designed for companies that want to sound established from the first call.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([quote, name, role]) => (
            <article className="testimonial-card reveal" key={name}>
              <p>"{quote}"</p>
              <strong>{name}</strong>
              <span>{role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="section-heading">
          <p className="eyebrow navy">FAQ</p>
          <h2>What UAE teams ask before switching on VirtualDxB.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details className="faq-item reveal" key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Build a premium UAE reception team without hiring one.</h2>
            <p>
              Share your channels, opening hours, call volume, and customer journey. We will recommend the right
              VirtualDxB setup.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className="footer">
        <Logo />
        <p>Premium phone answering, WhatsApp support, live chat, appointment booking, and customer communication for UAE businesses.</p>
      </footer>

      <a
        className="whatsapp-float"
        href={`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent('Hello VirtualDxB, I would like to discuss virtual reception support for my UAE business.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with VirtualDxB on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3.5C9.1 3.5 3.5 9 3.5 15.8c0 2.2.6 4.3 1.6 6.1L3.8 28l6.3-1.2c1.8 1 3.8 1.5 5.9 1.5 6.9 0 12.5-5.5 12.5-12.3S22.9 3.5 16 3.5Zm0 22.3c-1.9 0-3.7-.5-5.2-1.5l-.4-.2-3.7.7.8-3.6-.2-.4c-1.1-1.6-1.6-3.5-1.6-5.4 0-5.5 4.6-10 10.3-10s10.3 4.5 10.3 10-4.6 10.4-10.3 10.4Zm5.8-7.5c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.3 2.4 3.7 5.9 5.1.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.5Z" />
        </svg>
      </a>
    </main>
  )
}

export default App
