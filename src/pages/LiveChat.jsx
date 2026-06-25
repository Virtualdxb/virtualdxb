import CTA from '../components/CTA.jsx'
import VisualMockup from '../components/VisualMockup.jsx'

function LiveChat() {
  return (
    <>
      <section className="page-hero split-hero">
        <div>
          <p className="eyebrow navy">Live Chat</p>
          <h1>Website chat handling that turns visitor questions into qualified enquiries.</h1>
          <p>VirtualDxB can support website visitors, capture lead details, answer common questions, and send instant summaries to your team.</p>
        </div>
        <VisualMockup type="chat" />
      </section>
      <section className="section detail-panel">
        <div>
          <p className="eyebrow navy">Website chat support</p>
          <h2>Respond while interest is still high.</h2>
        </div>
        <div>
          <p>Live chat support helps visitors get answers before they leave your website. Receptionists can capture names, contact details, service needs, location, and urgency before routing the enquiry.</p>
          <ul className="feature-list">
            <li>Lead capture from high-intent visitors</li>
            <li>Common question handling based on your guidance</li>
            <li>Instant summaries by email or WhatsApp workflow</li>
          </ul>
        </div>
      </section>
      <section className="section stats-strip">
        <article><strong>Capture</strong><span>Collect visitor name, contact details, and service need.</span></article>
        <article><strong>Qualify</strong><span>Ask the right follow-up questions before handoff.</span></article>
        <article><strong>Summarize</strong><span>Send clear lead notes to your team quickly.</span></article>
      </section>
      <CTA title="Add live chat to your reception coverage." text="Give visitors a faster path from question to booked call, quote request, or team follow-up." />
    </>
  )
}

export default LiveChat
