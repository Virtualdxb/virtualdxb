import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { footerColumns } from '../data/siteContent.js'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Logo />
        <p>Professional virtual receptionist, call answering, appointment booking, live chat, and message support for global businesses.</p>
      </div>
      <div className="footer-columns">
        {footerColumns.map(([title, links]) => (
          <div className="footer-column" key={title}>
            <strong>{title}</strong>
            {links.map(([label, href]) => (
              href.startsWith('mailto:')
                ? <a href={href} key={label}>{label}</a>
                : <Link to={href} key={label}>{label}</Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
