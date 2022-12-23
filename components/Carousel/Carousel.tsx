import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { TImage } from '../../utils/types';
import Image from 'next/image';
import {
  ArrowButton,
  CarouselBox,
  ImageWrapper,
  Placeholder,
  StyledCarousel,
  StyledImage,
} from './Carousel.styled';
import { BREAKPOINTS } from '../../styles/breakpoints';
import useWindowSize from '../../hooks/useWindowSize';
import LeftArrowIcon from '../../public/images/chevron-left.svg';
import RightArrowIcon from '../../public/images/chevron-right.svg';

export function HorizCarousel({
  images,
  onChange = () => null,
  selected,
}: {
  images: TImage[];
  onChange?: (index: number) => void;
  selected?: number;
}) {
  const [dynamicProps, setDynamicProps] = useState<{ selectedItem?: number }>(
    {}
  );

  const winWidth = useWindowSize().width;
  const width = winWidth && winWidth < BREAKPOINTS.md ? winWidth : 480;

  return (
    <CarouselBox>
      {!images || (images.length === 0 && <Placeholder />)}
      {images && (
        <StyledCarousel
          onChange={onChange}
          axis="horizontal"
          autoPlay={false}
          showStatus={false}
          showThumbs={false}
          centerMode={winWidth && winWidth < BREAKPOINTS.md ? true : false}
          centerSlidePercentage={95}
          renderArrowPrev={RenderPrev}
          renderArrowNext={RenderNext}
          selectedItem={selected}
          // {...dynamicProps}
        >
          {images.map((e, i) => {
            const height = (e.height * width) / e.width;
            return (
              <ImageWrapper key={i}>
                <StyledImage
                  src={e.src}
                  alt="product preview"
                  width={width}
                  height={height}
                  priority
                />
              </ImageWrapper>
            );
          })}
        </StyledCarousel>
      )}
    </CarouselBox>
  );
}

function RenderPrev(
  clickHandler: () => void,
  hasPrev: boolean,
  label: string
): React.ReactNode {
  return (
    <ArrowButton
      pos="left"
      type="button"
      onClick={clickHandler}
      disabled={!hasPrev}
    >
      <LeftArrowIcon fill="currentColor" />
    </ArrowButton>
  );
}

function RenderNext(
  clickHandler: () => void,
  hasPrev: boolean,
  label: string
): React.ReactNode {
  return (
    <ArrowButton
      pos="right"
      type="button"
      onClick={clickHandler}
      disabled={!hasPrev}
    >
      <RightArrowIcon fill="currentColor" />
    </ArrowButton>
  );
}
