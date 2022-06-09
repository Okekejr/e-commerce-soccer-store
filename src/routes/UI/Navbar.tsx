import React, { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/contexts";
import { signOutUser } from "../../utils/firebase/firebase";
import "./Navbar.css";
import logoImage from "../../assets/Logo.svg";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <nav className="navbar">
        <img className="logoImage" src={logoImage} alt="Companylogo" />
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <li className="first">
            <Link className="page" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="page" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="page" to="/contact">
              Contact
            </Link>
          </li>
          {currentUser ? (
            <li>
              <span className="page" onClick={signOutUser}>
                {''}
                SIGN OUT {''}
              </span>
            </li>
          ) : (
            <li>
              <Link className="page" to="/auth">
                SIGN IN
              </Link>
            </li>
          )}
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
      <Outlet />
    </div>
  );
}
