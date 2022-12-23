import Image from 'next/image';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../../styles/breakpoints';

export const LogoImage = styled(Image)`
  width: 128px;
  height: auto;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    width: 164px;
    height: auto;
  }
`;
