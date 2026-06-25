import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link className="logo" to="/" aria-label="VirtualDxB - Global Virtual Reception Company">
      <span className="logo-monogram" aria-hidden="true">VD</span>
      <span className="logo-copy">
        <strong>VirtualDxB</strong>
        <small>GLOBAL VIRTUAL RECEPTION TEAM</small>
      </span>
    </Link>
  )
}

export default Logo
