import styled from 'styled-components';
import { BREAKPOINTS } from '../styles/breakpoints';

export const CarouselBox = styled.div`
  display: relative;
  width: 100vw;
  height: 380px;
  margin-top: 10px;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    max-width: 480px;
    max-height: 480px;
    width: 480px;
    height: 480px;
  }
  & .carousel.carousel-slider {
    overflow: visible;
  }
  .carousel .control-dots li.dot {
    box-shadow: none;
    background-color: var(--light);
    width: 10px;
    height: 10px;
    margin: 0 2.5px;
    &.slected {
      background-color: var(--light);
      box-shadow: inset 0px 3px 6px var(--secondary);
    }
  }
  & > div {
    width: 100%;
    height: 100%;
    & > .carousel .control-dots {
      // circles
      position: absolute;
      z-index: 1;
      bottom: -32px;
      @media screen and (min-width: ${BREAKPOINTS.md}px) {
        display: none;
      }
    }
    & > div > div ul {
      & li {
        // image cards
        width: 100%;
        height: 100;
        padding: 3.5px;
        &:first-child {
          padding-left: 5%;
        }
        &:last-child {
          padding-right: 11%;
        }
        @media screen and (min-width: ${BREAKPOINTS.md}px) {
          padding: 0;
        }
        & img {
          display: block;
          overflow: hidden;
          border-radius: 5px;
          width: auto;
          @media screen and (min-width: ${BREAKPOINTS.md}px) {
            display: block;
            margin: 0;
            overflow: hidden;
            border-radius: 0;
            width: auto;
          }
        }
      }
    }
  }
`;
