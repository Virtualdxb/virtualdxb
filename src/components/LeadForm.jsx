import { useState } from 'react'
import { callVolumeOptions, contactServices } from '../data/siteContent.js'

function LeadForm() {
  const [status, setStatus] = useState('idle')
  const isLoading = status === 'loading'

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          company: data.get('company'),
          service: data.get('service'),
          callVolume: data.get('callVolume'),
          message: data.get('message'),
        }),
      })

      if (!response.ok) {
        throw new Error('Unable to send enquiry')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <input type="text" name="name" placeholder="Full name" aria-label="Full name" required disabled={isLoading} />
        <input type="email" name="email" placeholder="Business email" aria-label="Business email" required disabled={isLoading} />
      </div>
      <div className="form-grid">
        <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" required disabled={isLoading} />
        <input type="text" name="company" placeholder="Company name" aria-label="Company name" disabled={isLoading} />
      </div>
      <select name="service" aria-label="Service need" defaultValue="" disabled={isLoading}>
        <option value="" disabled>How can VirtualDxB help you?</option>
        {contactServices.map((service) => <option key={service} value={service}>{service}</option>)}
      </select>
      <select name="callVolume" aria-label="Estimated monthly call volume" defaultValue="" disabled={isLoading}>
        <option value="" disabled>Estimated Monthly Call Volume</option>
        {callVolumeOptions.map((volume) => <option key={volume} value={volume}>{volume}</option>)}
      </select>
      <textarea name="message" rows="5" placeholder="What should VirtualDxB handle for you?" aria-label="Message" required disabled={isLoading}></textarea>
      <button className="btn primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Sending enquiry...' : 'Send enquiry'}
      </button>
      {status === 'success' && (
        <p className="form-note" role="status">Thank you. Your enquiry has been received.</p>
      )}
      {status === 'error' && (
        <p className="form-note" role="alert">Something went wrong. Please try again in a moment.</p>
      )}
      {status === 'idle' && (
        <p className="form-note">Enquiries are sent securely to VirtualDxB.</p>
      )}
    </form>
  )
}

export default LeadForm
