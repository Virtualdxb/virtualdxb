import LeadForm from '../components/LeadForm.jsx'
import VisualMockup from '../components/VisualMockup.jsx'
import { unsplashImages } from '../data/siteContent.js'

function Contact() {
  return (
    <>
      <section className="page-hero split-hero">
        <div>
          <p className="eyebrow navy">Contact</p>
          <h1>Build a professional reception team without hiring one.</h1>
          <p>Share your call volume, target countries, business hours, booking process, and message delivery preferences.</p>
        </div>
        <VisualMockup type="image" image={unsplashImages.contact} />
      </section>
      <section className="section contact">
        <div className="contact-method-grid">
          <a href="mailto:hello@virtualdxb.com"><span>Main contact</span><strong>hello@virtualdxb.com</strong></a>
          <a href="mailto:sales@virtualdxb.com"><span>Sales</span><strong>sales@virtualdxb.com</strong></a>
          <a href="mailto:careers@virtualdxb.com"><span>Careers</span><strong>careers@virtualdxb.com</strong></a>
        </div>
        <div className="contact-card">
          <div>
            <p className="eyebrow">Start your setup</p>
            <h2>Tell us what VirtualDxB should handle.</h2>
            <p>
              We will review your channels, opening hours, call volume, and customer journey before recommending the right reception workflow.
            </p>
            <div className="contact-email-list" aria-label="VirtualDxB email contacts">
              <a href="mailto:hello@virtualdxb.com"><span>Main contact</span>hello@virtualdxb.com</a>
              <a href="mailto:sales@virtualdxb.com"><span>Sales</span>sales@virtualdxb.com</a>
              <a href="mailto:careers@virtualdxb.com"><span>Careers</span>careers@virtualdxb.com</a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  )
}

export default Contact
