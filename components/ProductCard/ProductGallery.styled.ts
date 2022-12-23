import Image from 'next/image';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const GalleryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const VerticalGallery = styled.div`
  display: none;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    display: flex;
    position: relative;
    margin: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    overflow: visible;
  }
`;

export const ScrollButton = styled.button`
  display: none;
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    position: absolute;
    top: -32px;
    left: 50%;
    transform: translateX(-50%);
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
    &:focus,
    &:hover {
      background-color: var(--lightest);
    }
    &:disabled {
      color: var(--light);
    }
  }
`;

export const ScrollDownButton = styled(ScrollButton)`
  @media screen and (min-width: ${BREAKPOINTS.md}px) {
    top: unset;
    bottom: -32px;
  }
`;

export const PreviewContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  & img {
    object-fit: cover;
  }
`;

export const PreviewImage = styled(Image)`
  display: block;
  position: relative;
  overflow: hidden;
  width: auto;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
`;
