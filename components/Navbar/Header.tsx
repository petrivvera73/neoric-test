import { StyledHeader, TopperClaim } from './Header.styled';
import Navbar from './Navbar/Navbar';

export default function Header() {
  return (
    <StyledHeader>
      <TopperClaim>Heute Versandkostenfrei</TopperClaim>
      <Navbar />
    </StyledHeader>
  );
}
