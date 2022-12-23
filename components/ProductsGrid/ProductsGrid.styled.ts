import Image from 'next/image';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    flex-direction: row;
    gap: 96px;
  }
`;

export const GridItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
`;

export const ItemImage = styled(Image)`
  width: 250px;
  height: auto;
  border-radius: 5px;
`;

export const ItemCaption = styled.h5`
  font-size: 24px;
`;
