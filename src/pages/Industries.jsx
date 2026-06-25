import CTA from '../components/CTA.jsx'
import VisualMockup from '../components/VisualMockup.jsx'
import { industries, unsplashImages } from '../data/siteContent.js'

function Industries() {
  return (
    <>
      <section className="page-hero split-hero">
        <div>
          <p className="eyebrow navy">Industries</p>
          <h1>Reception support for field teams, service brands, ecommerce, and small businesses.</h1>
          <p>VirtualDxB is built for teams that need calls answered while they are serving customers, managing jobs, closing deals, or shipping orders.</p>
        </div>
        <VisualMockup type="image" image={unsplashImages.industries} />
      </section>
      <section className="section">
        <div className="industry-grid">
          {industries.map(([industry, text]) => (
            <article className="industry-card reveal" key={industry}>
              <span>{industry.slice(0, 2).toUpperCase()}</span>
              <h3>{industry}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section split-section">
        <div>
          <p className="eyebrow navy">Country coverage</p>
          <h2>Support for businesses serving global customer bases.</h2>
          <p>VirtualDxB is designed for companies that need a professional voice across multiple regions, including the USA, UK, UAE, Canada, and Australia.</p>
        </div>
        <VisualMockup type="summary" />
      </section>
      <section className="section detail-panel">
        <div>
          <p className="eyebrow navy">Use cases</p>
          <h2>Capture more enquiries without distracting your team.</h2>
        </div>
        <div>
          <p>HVAC, plumbing, electrical, cleaning, moving, and contractor teams can use VirtualDxB for estimate requests, urgent calls, appointment intake, overflow support, and after-hours messages.</p>
          <p>Realtors, ecommerce teams, and small businesses can use the same reception workflow for lead intake, order questions, callback requests, and scheduled follow-up.</p>
        </div>
      </section>
      <CTA title="Match reception coverage to your industry." text="Tell us your trade, service area, and common caller questions. We will shape the script around your business." />
    </>
  )
}

export default Industries
