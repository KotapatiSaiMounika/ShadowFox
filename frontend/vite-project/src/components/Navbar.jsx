import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "glass" : ""}`}>
        <div className="nav-inner">
          <div className="logo" onClick={() => navigate("/")}>
  <img src={Logo} alt="Sakthi Dental Clinic Logo" />
</div>

          <div className="links">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/treatments"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Treatments
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>

              <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              FAQ
            </NavLink>

          </div>

          <button
            className="appointment-btn"
            onClick={() => navigate("/contact#appointment")}
          >
            Fix an Appointment
          </button>

          <div className="menu-icon" onClick={() => setOpen(true)}>
            ☰
          </div>
        </div>
      </nav>

      {open && (
        <>
          <div className="overlay" onClick={() => setOpen(false)}></div>

          <div className="sidebar">
            <div className="close" onClick={() => setOpen(false)}>
              ✕
            </div>

            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/treatments"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Treatments
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/faq"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              FAQ
            </NavLink>

            <button
              className="mobile-appointment"
              onClick={() => {
                navigate("/contact#appointment");
                setOpen(false);
              }}
            >
              Fix an Appointment
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;