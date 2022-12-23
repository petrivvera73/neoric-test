import Image from 'next/image';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const Caption = styled.h5`
  font-size: 16px;
  font-weight: 400;
`;

export const Grid = styled.div`
  margin: 32px 0;
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
    gap: 32px;
    padding: 0 32px;
  }
  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    width: 100%;
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
