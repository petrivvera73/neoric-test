import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const BenefitsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BenefitsListContainer = styled.div`
  margin: 36px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 24px;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    width: 100%;
    max-width: ${BREAKPOINTS.lg}px;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 25px;
  }
`;
