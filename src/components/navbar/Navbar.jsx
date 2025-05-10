import { useState } from "react";
import { menuIcon } from "../../helper/iconData";
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from "./Navbar.style";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, setUser } = useAuthContext();
  const [toggle, setToggle] = useState(false);
  const logOut = () => {
    setUser(false);
    handleClose()
  };
  const handleClose = ()=>{
    setToggle(false)
  }
  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">Mkap Libraray</Logo>
      <HamburgerIcon onClick={() => setToggle(!toggle)}>
        {menuIcon}
      </HamburgerIcon>
      <Menu showMenu={toggle}>
        <MenuLink onClick={handleClose} to="/">Home</MenuLink>
        <MenuLink onClick={handleClose} to="/about">About</MenuLink>
        {user ? (
          <MenuLink to="/login" onClick={logOut}>
            Logout
          </MenuLink>
        ) : (
          <>
            <MenuLink onClick={handleClose} to="/login">Login</MenuLink>
            <MenuLink onClick={handleClose} to="/register">Register</MenuLink>
          </>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
