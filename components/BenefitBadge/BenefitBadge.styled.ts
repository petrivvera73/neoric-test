import Image from 'next/image';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const BadgeWrapper = styled.div`
  width: auto;
  display: flex;
  gap: 25px 8px;
  justify-content: center;
  align-items: center;
`;

export const BadgeImage = styled(Image)`
  width: auto;
  height: 48px;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    height: 57px;
  }
`;

export const BadgeTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    font-size: 18px;
  }
`;

export const BadgeSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--secondary);
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    font-size: 18px;
  }
`;
