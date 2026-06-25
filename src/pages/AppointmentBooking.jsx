import CTA from '../components/CTA.jsx'
import VisualMockup from '../components/VisualMockup.jsx'

function AppointmentBooking() {
  return (
    <>
      <section className="page-hero split-hero">
        <div>
          <p className="eyebrow navy">Appointment Booking</p>
          <h1>Move callers from enquiry to scheduled appointment without delay.</h1>
          <p>VirtualDxB receptionists can manage appointment requests, collect intake details, confirm availability, and hand off bookings.</p>
        </div>
        <VisualMockup type="calendar" />
      </section>
      <section className="section detail-panel">
        <div>
          <p className="eyebrow navy">Calendar workflow</p>
          <h2>Booking rules tailored to your business.</h2>
        </div>
        <div>
          <p>We follow your availability, service areas, job types, intake questions, cancellation rules, and confirmation process. Your team receives clear booking details and customer context.</p>
          <ul className="feature-list">
            <li>Appointment requests captured from calls and messages</li>
            <li>Reminders and confirmation handoff based on your process</li>
            <li>Useful for contractors, clinics, consultants, realtors, and service teams</li>
          </ul>
        </div>
      </section>
      <section className="section stats-strip">
        <article><strong>Request</strong><span>Caller shares service need, location, and preferred time.</span></article>
        <article><strong>Book</strong><span>Receptionist follows your calendar and availability rules.</span></article>
        <article><strong>Handoff</strong><span>Your team receives booking details and customer context.</span></article>
      </section>
      <CTA title="Let callers book while your team stays focused." text="Share your calendar process and appointment rules. We will build the receptionist flow around them." />
    </>
  )
}

export default AppointmentBooking
