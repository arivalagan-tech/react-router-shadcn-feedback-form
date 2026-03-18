import { Link } from "react-router"

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/feedback">Feedback</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}