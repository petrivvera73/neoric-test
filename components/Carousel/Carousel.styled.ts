import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--light);
`;

export const CarouselBox = styled.div`
  display: relative;
  width: 100vw;
  height: 380px;
  margin-top: 5px;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    max-width: 480px;
    max-height: 480px;
    width: 480px;
    height: 480px;
  }
`;

export const StyledCarousel = styled(Carousel)`
  &.carousel.carousel-slider {
    overflow: visible;
  }
  & .slider .slide {
    padding: 3.5px;
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
      padding: 0;
    }
    &:first-child {
      padding-left: 5%;
      @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-left: 0;
      }
    }
    &:last-child {
      padding-right: 10%;
      @media screen and (min-width: ${BREAKPOINTS.md}px) {
        padding-right: 0;
      }
    }
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
  & .carousel {
    overflow: visible;
  }
  & .carousel .control-dots {
    position: absolute;
    z-index: 1;
    bottom: -32px;
    @media screen and (min-width: ${BREAKPOINTS.md}px) {
      display: none;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 350px;
  border-radius: 5px;
  overflow: hidden;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    max-height: 480px;
    border-radius: 0;
  }
  & img {
    object-fit: cover;
  }
`;

export const StyledImage = styled(Image)`
  display: block;
  position: relative;
  overflow: hidden;
  width: auto;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    display: block;
    margin: 0;
    width: auto;
    height: auto;
  }
`;

interface ArrowButtonProps {
  pos?: 'left' | 'right';
}

export const ArrowButton = styled.button<ArrowButtonProps>`
  display: none;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    position: absolute;
    bottom: -32px;
    left: 50%;
    transform: translateX(${(p) => (p.pos === 'left' ? '-30px' : '6px')});
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 12px;
    color: var(--main);
    background-color: transparent;
    cursor: pointer;
    &:hover {
      color: var(--accent);
    }
    &:disabled {
      color: var(--light);
    }
  }
`;
