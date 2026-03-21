import { NavLink } from "react-router"

export default function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Home
      </NavLink>

      <span className="separator">|</span>

      <NavLink to="/feedback" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Feedback
      </NavLink>

      <span className="separator">|</span>

      <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Contact
      </NavLink>

      <span className="separator">|</span>

      <NavLink to="/blogs" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Blogs
      </NavLink>

    </nav>
  )
}