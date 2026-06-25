import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { navLinks } from '../data/siteContent.js'

function Header() {
  return (
    <header className="nav">
      <Logo />
      <nav className="nav-links" aria-label="Primary navigation">
        {navLinks.map(([label, href]) => (
          <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to={href} key={href} end={href === '/'}>
            {label}
          </NavLink>
        ))}
      </nav>
      <Link className="nav-cta" to="/contact">Talk to us</Link>
    </header>
  )
}

export default Header
