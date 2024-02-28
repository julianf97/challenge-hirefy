import Logo from "./Logo/Logo";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import "./navbar.css"

export default function Navbar() {

  return (
    <nav className="contenedorNavbar">
      <div className="contenedorInternoNavbar">
        <Logo/>
        <HamburgerIcon/>
      </div>
    </nav>
  )
}
