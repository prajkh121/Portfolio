import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => setIsCollapsed(!isCollapsed);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        padding: "15px 30px",
        background: "linear-gradient(90deg, #e0c3fc, #8ec5fc)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        fontWeight: 600,
        fontSize: "18px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold fs-3"
          to="/"
          style={{ color: "#1a1a1a" }}
        >
          Portfolio
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          style={{ color: "#1a1a1a" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${
            !isCollapsed ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav text-center">
            {["about", "skills", "projects", "experience", "contact"].map(
              (page) => (
                <li className="nav-item" key={page}>
                  <Link
                    className="nav-link mx-3"
                    to={`/${page}`}
                    onClick={toggleNavbar}
                    style={{
                      color: "#1a1a1a",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
