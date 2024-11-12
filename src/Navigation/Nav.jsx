import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import "./Nav.css"

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search-input" placeholder="Search Your Shoes" />
      </div>
      <div className="profile-container">
        <a href="#">
          <CiHeart className="nav-icons" />
        </a>
        <a href="#">
          <CiShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <CiUser className="nav-icons" />
        </a>
      </div>
    </nav>
  )
}

export default Nav