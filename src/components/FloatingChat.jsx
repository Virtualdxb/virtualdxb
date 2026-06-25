import { Link } from 'react-router-dom'

function FloatingChat() {
  return (
    <Link className="floating-consultation" to="/contact" aria-label="Chat with us">
      <span className="floating-tooltip" role="tooltip">Send your enquiry through the VirtualDxB contact form.</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 5.5A3.5 3.5 0 0 1 8 2h8a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 16 15h-4.4l-4.2 3.15A1 1 0 0 1 5.8 17.35V15A3.5 3.5 0 0 1 4.5 12.3v-6.8Zm3.5-1.5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 8 13h.8a1 1 0 0 1 1 1v1.35l2.8-2.1A1 1 0 0 1 13.2 13H16a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 16 4H8Zm.5 3.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1H13a1 1 0 1 1 0 2H9.5a1 1 0 0 1-1-1Z" />
      </svg>
      <span>Chat with us</span>
    </Link>
  )
}

export default FloatingChat
