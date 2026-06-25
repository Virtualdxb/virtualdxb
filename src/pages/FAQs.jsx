import CTA from '../components/CTA.jsx'
import VisualMockup from '../components/VisualMockup.jsx'
import { faqs } from '../data/siteContent.js'

function FAQs() {
  return (
    <>
      <section className="page-hero split-hero">
        <div>
          <p className="eyebrow navy">FAQs</p>
          <h1>Detailed answers before you switch on VirtualDxB.</h1>
          <p>Review common questions about call forwarding, global coverage, after-hours answering, call recording, message summaries, and booking support.</p>
        </div>
        <VisualMockup type="summary" />
      </section>
      <section className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow navy">Questions</p>
          <h2>What teams ask before starting.</h2>
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
      <CTA title="Still need a specific answer?" text="Send your use case and we will respond with the right reception setup." />
    </>
  )
}

export default FAQs
