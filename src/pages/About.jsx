import CTA from '../components/CTA.jsx'
import VisualMockup from '../components/VisualMockup.jsx'
import { countries, unsplashImages } from '../data/siteContent.js'

function About() {
  return (
    <>
      <section className="page-hero split-hero">
        <div>
          <p className="eyebrow">About VirtualDxB</p>
          <h1>Premium reception support for businesses that need every enquiry handled well.</h1>
          <p>VirtualDxB helps growing companies create a reliable front desk experience across calls, messages, bookings, and live chat without building a full internal reception team.</p>
        </div>
        <VisualMockup type="image" image={unsplashImages.about} />
      </section>
      <section className="section split-section">
        <VisualMockup type="dashboard" align="left" />
        <div>
          <p className="eyebrow">Operating standard</p>
          <h2>Built around clear handoffs, calm callers, and fast follow-up.</h2>
          <p>We focus on the practical details that shape customer experience: how calls are greeted, what questions are asked, who receives transfers, and how quickly your team receives the summary.</p>
          <ul className="feature-list">
            <li>Professional scripts matched to your brand voice</li>
            <li>Reception workflows for service, sales, and support teams</li>
            <li>Global positioning across {countries.join(', ')}</li>
          </ul>
        </div>
      </section>
      <section className="section stats-strip">
        <article><strong>Global</strong><span>Reception workflows for five core markets.</span></article>
        <article><strong>Premium</strong><span>White-glove tone without unnecessary complexity.</span></article>
        <article><strong>Practical</strong><span>Built for real calls, bookings, transfers, and summaries.</span></article>
      </section>
      <CTA title="Create a front desk that feels like your own team." text="Tell us how customers reach you today. We will recommend a reception workflow that fits your team." />
    </>
  )
}

export default About
