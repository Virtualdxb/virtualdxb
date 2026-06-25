export const navLinks = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Industries', '/industries'],
  ['Pricing', '/pricing'],
  ['Contact', '/contact'],
]

export const serviceRoutes = [
  ['Call Recording', '/call-recording', 'Quality monitoring and review where recording is available and legally allowed.', 'REC'],
  ['Live Chat', '/live-chat', 'Website visitor support, lead capture, and fast message summaries.', 'CHAT'],
  ['Appointment Booking', '/appointment-booking', 'Calendar booking, appointment requests, reminders, and handoff notes.', 'BOOK'],
]

export const countries = ['USA', 'UK', 'UAE', 'Canada', 'Australia']

export const unsplashImages = {
  home: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
  services: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80',
  industries: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  pricing: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
  about: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  contact: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
}

export const serviceCards = [
  ['Virtual receptionist', 'A polished front desk presence without hiring full-time reception staff.', 'VR'],
  ['Live call answering', 'Professional receptionists answer in your company name and follow your call flow.', 'CALL'],
  ['Message taking', 'Caller details, urgency, reason for calling, and next steps captured clearly.', 'MSG'],
  ['Warm call transfer', 'Priority callers introduced and routed to the right person with context.', 'XFER'],
  ['Appointment booking', 'Receptionists handle appointment requests using your calendar rules.', 'BOOK'],
  ['Lead qualification', 'We capture need, location, intent, and follow-up priority before handoff.', 'LEAD'],
]

export const allServices = [
  ...serviceCards,
  ['Overflow call answering', 'Backup coverage when your team is busy, unavailable, or handling seasonal demand.', 'FLOW'],
  ['After-hours answering', 'Capture new enquiries outside business hours before competitors respond.', '24H'],
  ['Live chat support', 'Prompt visitor support, lead capture, and routing before prospects leave.', 'CHAT'],
  ['Call recording', 'Quality monitoring and review where available, enabled, and legally appropriate.', 'REC'],
  ['WhatsApp/email summaries', 'Call notes, lead details, bookings, and action items delivered quickly.', 'SUM'],
  ['Dedicated numbers', 'Dedicated numbers may be available depending on country, coverage, and setup.', 'NUM'],
  ['Call forwarding', 'Forward calls from existing numbers where supported so customers keep using your number.', 'FWD'],
]

export const howSteps = [
  ['Map the workflow', 'We document your greeting, hours, locations, services, booking rules, transfer list, and escalation process.'],
  ['Route your calls', 'Calls are forwarded from an existing number where supported, or routed through a dedicated number where available.'],
  ['Answer and hand off', 'VirtualDxB answers, takes messages, qualifies leads, books appointments, transfers urgent calls, and sends summaries.'],
]

export const detailedSteps = [
  ['Setup', 'We document your business hours, greeting, service areas, internal contacts, booking rules, and escalation process.'],
  ['Call routing', 'Calls are forwarded from an existing number where supported, or routed through a dedicated number where available.'],
  ['Scripts', 'Receptionists follow custom scripts, intake questions, transfer rules, and brand tone guidelines.'],
  ['Answering', 'VirtualDxB answers as your front desk, takes messages, qualifies leads, transfers urgent calls, and books appointments.'],
  ['Notes', 'Your team receives concise summaries with caller details, appointment requests, next steps, and priority level.'],
  ['Recordings and reporting', 'Where enabled and compliant, recordings and activity reporting help review performance and missed opportunities.'],
]

export const industries = [
  ['HVAC', 'Emergency calls, quote requests, and seasonal overflow.'],
  ['Plumbers', 'Urgent jobs, service areas, estimates, and appointment intake.'],
  ['Electricians', 'Safety-sensitive requests, callbacks, and booking triage.'],
  ['Realtors', 'Buyer calls, showing requests, seller leads, and follow-up notes.'],
  ['Cleaning Companies', 'New bookings, reschedules, property details, and recurring service enquiries.'],
  ['Contractors', 'Project enquiries, site visit requests, and priority call routing.'],
  ['Moving Companies', 'Quote requests, dates, locations, inventory notes, and follow-ups.'],
  ['Ecommerce', 'Order questions, callbacks, delivery issues, and support handoffs.'],
  ['Small Businesses', 'General reception coverage without hiring a full-time receptionist.'],
]

export const pricingPlans = [
  ['Starter', '$49/month', '50 calls', ['Live call answering', 'Message taking', 'Email summaries', 'Call forwarding setup guidance']],
  ['Growth', '$99/month', '150 calls', ['Everything in Starter', 'Appointment booking', 'Lead qualification', 'WhatsApp and email summaries', 'Overflow support']],
  ['Professional', '$179/month', '300 calls', ['Everything in Growth', 'Warm transfers', 'After-hours answering options', 'Call recording where available', 'Priority workflow setup']],
]

export const customPlan = ['Custom', 'Custom plan', 'Flexible call volume', ['Dedicated workflow design', 'Multi-market coverage', 'Dedicated numbers where available', 'Advanced reporting', 'Custom escalation rules']]

export const faqs = [
  ['Do you serve global clients?', 'Yes. VirtualDxB supports businesses serving customers in the USA, UK, UAE, Canada, and Australia.'],
  ['Can I keep my existing business number?', 'In many cases, yes. You can forward calls from your existing number where supported. Dedicated numbers may also be available by market.'],
  ['Can you answer after hours?', 'Yes. After-hours answering can be configured based on your plan, required coverage, and escalation rules.'],
  ['Can you transfer urgent calls?', 'Yes. Warm transfers can route priority callers to the right team member with context before the handoff.'],
  ['Do you provide call recordings?', 'Call recording depends on availability, setup, and local consent requirements. We can help configure an appropriate workflow where supported.'],
  ['How are messages delivered?', 'Message summaries can be delivered by email and WhatsApp, including caller details, notes, booking requests, and required next steps.'],
  ['Can you book appointments?', 'Yes. Receptionists can follow your booking rules, calendar process, intake questions, and handoff requirements.'],
  ['Is this a replacement for an in-house receptionist?', 'For many small and growing businesses, yes. Others use VirtualDxB for overflow, after-hours, or specialist lead intake coverage.'],
]

export const pricingFaqs = [
  ['Can I change plans later?', 'Yes. Start with the call volume that fits today, then move up as call volume or coverage needs grow.'],
  ['Are local numbers included?', 'Local number and forwarding availability depends on the country, provider, and setup requirements.'],
  ['Are recordings included?', 'Call recording is available only where supported and legally appropriate. We can discuss options during setup.'],
]

export const contactServices = [
  'Virtual Receptionist',
  'Live Call Answering',
  'Message Taking',
  'Warm Call Transfers',
  'Appointment Booking',
  'Lead Qualification',
  'After-Hours Answering',
  'Overflow Call Answering',
  'Call Recording',
  'Live Chat Support',
  'WhatsApp and Email Summaries',
  'Dedicated Numbers',
  'Call Forwarding',
  'Custom Requirements',
]

export const callVolumeOptions = [
  'Less than 100 calls',
  '100-250 calls',
  '250-500 calls',
  '500+ calls',
  'Not Sure',
]

export const footerColumns = [
  ['Services', [['Virtual receptionist', '/services'], ['Call answering', '/services'], ['Live chat', '/live-chat'], ['Appointment booking', '/appointment-booking']]],
  ['Industries', [['HVAC', '/industries'], ['Realtors', '/industries'], ['Contractors', '/industries'], ['Ecommerce', '/industries']]],
  ['Company', [['About', '/about'], ['How it works', '/how-it-works'], ['Pricing', '/pricing'], ['FAQ', '/faq'], ['Contact', '/contact']]],
  ['Contact', [['hello@virtualdxb.com', 'mailto:hello@virtualdxb.com'], ['sales@virtualdxb.com', 'mailto:sales@virtualdxb.com'], ['careers@virtualdxb.com', 'mailto:careers@virtualdxb.com']]],
  ['Countries', [['USA', '/industries'], ['UK', '/industries'], ['UAE', '/industries'], ['Canada', '/industries'], ['Australia', '/industries']]],
]
