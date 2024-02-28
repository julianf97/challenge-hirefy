import { useContext } from "react";
import { NavbarContext } from "../../../context/NavbarContext";
import Hamburger from 'hamburger-react';

export default function HamburgerIcon() {
  const { isOpen, handleClickOpen, handleExitNavbar } = useContext(NavbarContext);

  return (
    <div className="contenedorHamburger">
      <Hamburger
        onToggle={(toggled) => {
          if (toggled) {
            handleClickOpen();
          } else {
            handleExitNavbar();
          }
        }}
        size={25}
        color="#fff"
        rounded
        toggled={isOpen}
      />
    </div>
  );
}
