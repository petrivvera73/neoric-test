import logo from '../../../public/images/logo.png';
import { LogoImage } from './Logo.styled';

export default function Logo() {
  return <LogoImage src={logo} alt="logo" width={195} height={47} />;
}
