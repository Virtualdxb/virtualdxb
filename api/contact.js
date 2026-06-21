/* global process */

import nodemailer from 'nodemailer'

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

  if (
    !process.env.ZOHO_SMTP_USER ||
    !process.env.ZOHO_SMTP_PASS ||
    !process.env.ZOHO_SMTP_HOST ||
    !process.env.ZOHO_SMTP_PORT
  ) {
    return response.status(500).json({ error: 'Zoho SMTP configuration is not complete' })
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
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: Number(process.env.ZOHO_SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: 'VirtualDxB Website <hello@virtualdxb.com>',
      to: recipientEmail,
      replyTo: email,
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
    })

    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('Zoho SMTP error:', error)
    return response.status(500).json({
      error: 'Unable to send enquiry through Zoho SMTP',
      details: error instanceof Error ? error.message : String(error),
    })
  }
}
