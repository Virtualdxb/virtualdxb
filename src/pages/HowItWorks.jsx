import CTA from '../components/CTA.jsx'
import VisualMockup from '../components/VisualMockup.jsx'
import { detailedSteps, howSteps } from '../data/siteContent.js'

function HowItWorks() {
  return (
    <>
      <section className="page-hero split-hero">
        <div>
          <p className="eyebrow navy">How It Works</p>
          <h1>Setup, routing, scripts, answering, notes, recordings, and reporting.</h1>
          <p>VirtualDxB becomes your reception layer through a structured setup process that keeps your brand voice and operating rules clear.</p>
        </div>
        <VisualMockup type="dashboard" />
      </section>
      <section className="section navy-section">
        <div className="steps steps-three">
          {howSteps.map(([title, text], index) => (
            <article className="step-card reveal" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow navy">Full workflow</p>
          <h2>From first setup call to reliable daily handoffs.</h2>
        </div>
        <div className="process-grid">
          {detailedSteps.map(([title, text], index) => (
            <article className="process-card reveal" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section detail-panel">
        <div>
          <p className="eyebrow navy">Operational clarity</p>
          <h2>Every call follows a defined path.</h2>
        </div>
        <div>
          <p>We document what counts as urgent, who receives transfers, what information should be captured, where appointment requests go, and when recordings or reports should be reviewed.</p>
          <ul className="feature-list">
            <li>Scripted answering in your company name</li>
            <li>Lead and appointment notes delivered quickly</li>
            <li>Reporting and recordings where available and appropriate</li>
          </ul>
        </div>
      </section>
      <CTA title="Build your answering workflow before the next missed call." text="Share your current phone setup and customer journey. We will map a reception process that fits how your team actually works." />
    </>
  )
}

export default HowItWorks
