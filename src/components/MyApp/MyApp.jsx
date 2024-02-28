import Navbar from "../Navbar/Navbar";
import OpenNavbar from "../OpenNavbar/OpenNavbar";
import { NavbarContext } from "../../context/NavbarContext";
import { useContext } from "react";

export default function MyApp() {
  const { isOpen } = useContext(NavbarContext);

  return (
    <div className="principalContainer">
      <Navbar />
      {isOpen && <OpenNavbar />}
    </div>
  );
}
