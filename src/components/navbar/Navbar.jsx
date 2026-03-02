import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </div>
    </nav>
  );
}