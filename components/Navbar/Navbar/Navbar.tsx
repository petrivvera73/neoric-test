import Image from 'next/image';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import ShopperIcon from '../../../public/images/shopper.svg';
import MenuIcon from '../../../public/images/menu.svg';
import {
  Menu,
  MenuBackdrop,
  MenuItem,
  MenuToggle,
  NavbarBlock,
  NavbarWrapper,
  ShopperButton,
} from './Navbar.styled';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <NavbarWrapper>
        <NavbarBlock>
          <Link href="/">
            <Logo />
          </Link>
        </NavbarBlock>
        <Menu open={menuOpen}>
          <MenuItem>Neon Armbrand™</MenuItem>
          <MenuItem>Größentabelle</MenuItem>
          <MenuItem>Versand</MenuItem>
          <MenuItem>Kontakt</MenuItem>
        </Menu>
        <NavbarBlock>
          <ShopperButton>
            <ShopperIcon width={24} height={24} />
          </ShopperButton>
          <MenuToggle onClick={toggleMenu}>
            <MenuIcon width={18} height={18} />
          </MenuToggle>
        </NavbarBlock>
      </NavbarWrapper>
      {menuOpen && <MenuBackdrop onClick={closeMenu} />}
    </>
  );
}
