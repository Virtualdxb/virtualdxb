/* global process */

const recipientEmail = 'hello@virtualdxb.com'

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({ error: 'RESEND_API_KEY is not configured' })
  }

  const { name, email, phone, company, service, callVolume, message } = request.body || {}

  if (!name || !email || !phone || !message) {
    return response.status(400).json({ error: 'Name, email, phone, and message are required' })
  }

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Company', company],
    ['Service', service],
    ['Estimated Monthly Call Volume', callVolume],
    ['Message', message],
  ]

  const htmlRows = rows
    .map(([label, value]) => `
      <tr>
        <td style="padding:12px 14px;border:1px solid #e8dcc0;font-weight:700;color:#0f172a;">${label}</td>
        <td style="padding:12px 14px;border:1px solid #e8dcc0;color:#111827;">${escapeHtml(value)}</td>
      </tr>
    `)
    .join('')

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'VirtualDxB Website <onboarding@resend.dev>',
        to: recipientEmail,
        reply_to: email,
        subject: 'New VirtualDxB Website Enquiry',
        html: `
          <div style="font-family:Arial,sans-serif;background:#fffdf8;padding:24px;">
            <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e8dcc0;border-radius:8px;overflow:hidden;">
              <div style="background:#0f172a;color:#ffffff;padding:22px 24px;">
                <h1 style="margin:0;font-size:22px;">New VirtualDxB Website Enquiry</h1>
              </div>
              <table style="width:100%;border-collapse:collapse;">
                ${htmlRows}
              </table>
            </div>
          </div>
        `,
      }),
    })

    const result = await resendResponse.json().catch(() => ({}))

    if (!resendResponse.ok) {
      const error = result.message || result.error || 'Resend failed to send enquiry'
      console.error('Resend error:', error)
      return response.status(resendResponse.status).json({
        error,
        details: result,
      })
    }

    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('Resend error:', error)
    return response.status(500).json({
      error: 'Unable to send enquiry through Resend',
      details: error instanceof Error ? error.message : String(error),
    })
  }
}
