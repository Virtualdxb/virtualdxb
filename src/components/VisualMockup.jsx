function VisualMockup({ type = 'dashboard', image, align = 'right' }) {
  if (type === 'image') {
    return (
      <div className={`visual-card image-visual ${align === 'left' ? 'image-left' : ''} reveal`}>
        <img src={image} alt="VirtualDxB professional business reception environment" loading="lazy" />
        <div className="image-float-card">
          <strong>VirtualDxB desk</strong>
          <span>Calls, bookings, chat, and summaries in one workflow</span>
        </div>
      </div>
    )
  }

  if (type === 'call') {
    return (
      <div className="visual-card call-visual reveal">
        <div className="visual-label">Live reception</div>
        <div className="phone-frame">
          <span className="status-dot"></span>
          <p>Incoming call</p>
          <strong>+1 415 018 2040</strong>
          <small>New HVAC estimate request</small>
          <div className="call-actions">
            <span>Answer</span>
            <span>Transfer</span>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'recording') {
    return (
      <div className="visual-card recording-visual reveal">
        <div className="visual-label">Quality review</div>
        <div className="recording-header">
          <span></span>
          <strong>Call recording</strong>
          <small>02:48</small>
        </div>
        <div className="waveform">
          {Array.from({ length: 18 }).map((_, index) => <i key={index}></i>)}
        </div>
        <p>Quality review ready</p>
      </div>
    )
  }

  if (type === 'chat') {
    return (
      <div className="visual-card chat-visual reveal">
        <div className="visual-label">Live chat</div>
        <div className="chat-bubble incoming">Do you serve my area?</div>
        <div className="chat-bubble outgoing">Yes. May I take your postcode and service need?</div>
        <div className="chat-summary">
          <strong>Lead captured</strong>
          <span>Email and WhatsApp summary sent</span>
        </div>
      </div>
    )
  }

  if (type === 'calendar') {
    return (
      <div className="visual-card calendar-visual reveal">
        <div className="visual-label">Appointment desk</div>
        <div className="calendar-top">
          <strong>Booking calendar</strong>
          <span>Today</span>
        </div>
        <div className="calendar-grid">
          {['09:00', '10:30', '12:00', '14:00', '16:30', '18:00'].map((time, index) => (
            <span className={index === 3 ? 'selected' : ''} key={time}>{time}</span>
          ))}
        </div>
        <p>Site visit confirmed</p>
      </div>
    )
  }

  if (type === 'coverage') {
    return (
      <div className="visual-card coverage-visual reveal">
        <div className="visual-label">Global coverage</div>
        {['USA', 'UK', 'UAE', 'Canada', 'Australia'].map((country) => <span key={country}>{country}</span>)}
      </div>
    )
  }

  if (type === 'summary') {
    return (
      <div className="visual-card summary-visual reveal">
        <div className="visual-label">Message summary</div>
        <div className="summary-card">
          <strong>Lead summary</strong>
          <span>Name: Sarah M.</span>
          <span>Need: Plumbing repair</span>
          <span>Priority: Same day</span>
          <span>Sent to: WhatsApp + email</span>
        </div>
      </div>
    )
  }

  if (type === 'contact') {
    return (
      <div className="visual-card contact-visual reveal">
        <div className="visual-label">Consultation request</div>
        <div>
          <strong>New enquiry</strong>
          <span>Call volume: 150/month</span>
        </div>
        <div>
          <strong>Services</strong>
          <span>Calls, bookings, transfers</span>
        </div>
        <div>
          <strong>Delivery</strong>
          <span>Email and WhatsApp summaries</span>
        </div>
      </div>
    )
  }

  return (
    <div className="visual-card dashboard-visual reveal">
      <div className="visual-label">Reception dashboard</div>
      <div className="dashboard-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="dashboard-grid">
        <div>
          <strong>18</strong>
          <span>Calls answered</span>
        </div>
        <div>
          <strong>7</strong>
          <span>Bookings</span>
        </div>
        <div>
          <strong>4</strong>
          <span>Warm transfers</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Notes sent</span>
        </div>
      </div>
      <div className="dashboard-note">
        <strong>Priority lead</strong>
        <span>Transferred with call context</span>
      </div>
    </div>
  )
}

export default VisualMockup
