import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const ProductInfoWrapper = styled.div`
  width: 88%;
  margin: 8px auto;
  box-shadow: 0px 3px 20px #00000029;
  border: 1px solid var(--light);
  padding: 25px 12px;
  border-radius: 5px;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    padding: 18px 25px 25px;
    width: 650px;
  }
  @media screen and (min-width: ${BREAKPOINTS.lg}px) {
    padding: 18px 25px 25px;
    width: 475px;
  }
`;

export const Title = styled.h5`
  font-size: 22px;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export const Price = styled.p`
  margin-top: 18px;
  font-size: 16px;
  font-weight: 600;
`;

export const OldPrice = styled.span`
  text-decoration: line-through;
`;

export const ActualPrice = styled.span`
  display: inline-block;
  margin-left: 16px;
  color: var(--accent);
`;

export const SmallText = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 10px;
  font-weight: 500;
`;

export const Circle = styled.span`
  display: inline-block;
  background-color: var(--green);
  height: 16px;
  width: 16px;
  border-radius: 9px;
  position: relative;
  transform: translateY(2px);
  margin-right: 4px;
`;

export const GreenOption = styled.p`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  color: var(--green);
`;

export const Button = styled.button`
  margin-top: 32px;
  background-color: var(--accent);
  border-radius: 3px;
  border: none;
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: var(--inverted);
`;
