import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const CardWrapper = styled.div`
  width: 100%;
  background-color: transparent;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    width: auto;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    width: auto;
    margin: 40px auto;
    padding: 0 25px;
    flex-direction: row;
    max-width: ${BREAKPOINTS.lg}px;
  }
`;
