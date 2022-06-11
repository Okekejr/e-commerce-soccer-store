import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import { UserContext } from "../../contexts/contexts";
import { CartContext } from "../../contexts/cartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import "./Navbar.css";
import logoImage from "../../assets/Logo.svg";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
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
          {currentUser ? (
            <li>
              <span className="page" onClick={signOutUser}>
                {""}
                SIGN OUT {""}
              </span>
            </li>
          ) : (
            <li>
              <Link className="page" to="/auth">
                SIGN IN
              </Link>
            </li>
          )}
          <li>
            <CartIcon />
          </li>
        </ul>
        {isCartOpen && <CartDropDown />}
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
