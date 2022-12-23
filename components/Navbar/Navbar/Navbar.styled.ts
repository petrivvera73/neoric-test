import styled from 'styled-components';
import { BREAKPOINTS } from '../../../styles/breakpoints';

interface MenuProps {
  open?: boolean;
}

export const NavbarWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 0 15px;
  border-bottom: 0.5px solid var(--light);
  gap: 8px;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    padding: 0 64px;
    height: 96px;
  }
`;

export const NavbarBlock = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 15px 0;
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  padding: 4px;
  border: none;
  color: var(--secondary);
  background-color: transparent;
  cursor: pointer;
  &:focus {
    border: none;
    outline: none;
  }
  &:hover {
    background-color: var(--lightest);
  }
`;

export const ShopperButton = styled(IconButton)`
  margin-left: auto;
`;

export const MenuToggle = styled(IconButton)`
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    display: none;
  }
`;

export const MenuBackdrop = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #ffffff8f;
`;

export const Menu = styled.ul<MenuProps>`
  position: absolute;
  top: 72px;
  right: ${(p) => (p.open ? '0' : '-101%')};
  display: flex;
  flex-direction: column;
  z-index: 11;
  background-color: var(--bg);
  border: 0.5px solid var(--light);
  transition: all 250ms;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    position: static;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border: none;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: 64px;
  text-align: center;
  color: var(--dark);
  font-size: 16;
  &:not(:last-child) {
    border-bottom: 0.5px solid var(--light);
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
      border: none;
    }
  }
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    width: auto;
    height: auto;
    padding: 24px 0;
    white-space: nowrap;
  }
`;
