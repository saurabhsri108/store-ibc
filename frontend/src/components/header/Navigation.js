import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-list active">
          <Link to="/" className="nav-list-item">
            Home
          </Link>
        </li>
        <li className="nav-list">
          <Link to="/" className="nav-list-item">
            About
          </Link>
        </li>
        <li className="nav-list">
          <Link to="/" className="nav-list-item">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
