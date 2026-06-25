import CTA from '../components/CTA.jsx'
import VisualMockup from '../components/VisualMockup.jsx'

function CallRecording() {
  return (
    <>
      <section className="page-hero split-hero">
        <div>
          <p className="eyebrow navy">Call Recording</p>
          <h1>Review customer conversations where recording is available and appropriate.</h1>
          <p>Call recording can help with quality monitoring, training, lead review, booking verification, and customer service improvement.</p>
        </div>
        <VisualMockup type="recording" />
      </section>
      <section className="section stats-strip">
        <article><strong>Review</strong><span>Understand caller intent and call outcomes.</span></article>
        <article><strong>Improve</strong><span>Refine scripts, questions, and handoff quality.</span></article>
        <article><strong>Verify</strong><span>Check appointment details and customer requests.</span></article>
      </section>
      <section className="section detail-panel">
        <div>
          <p className="eyebrow navy">Quality monitoring</p>
          <h2>Use recordings to improve how calls are handled.</h2>
        </div>
        <div>
          <p>When enabled, recordings can help owners and managers understand call quality, customer objections, missed details, and opportunities to improve scripts or follow-up.</p>
          <ul className="feature-list">
            <li>Review lead quality and customer intent</li>
            <li>Verify appointment details and call outcomes</li>
            <li>Support receptionist training and quality checks</li>
          </ul>
        </div>
      </section>
      <section className="section detail-panel">
        <div>
          <p className="eyebrow navy">Consent and compliance</p>
          <h2>Recording depends on market rules and setup.</h2>
        </div>
        <div>
          <p>Call recording availability depends on location, number setup, platform support, and consent requirements. VirtualDxB can discuss an appropriate workflow, but businesses should confirm their legal obligations in each country or state where calls are handled.</p>
        </div>
      </section>
      <CTA title="Want call recording in your reception workflow?" text="Tell us the countries you serve and how you plan to use recordings so we can discuss availability and setup." />
    </>
  )
}

export default CallRecording
