import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { TImage } from '../utils/types';
import Image from 'next/image';
import { CarouselBox } from './Carousel.styled';
import { BREAKPOINTS } from '../styles/breakpoints';
import useWindowSize from '../hooks/useWindowSize';

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

  if (selected) {
    setDynamicProps((params) => ({ ...params, selectedItem: selected }));
  }

  return (
    <CarouselBox>
      {images && (
        <Carousel
          onChange={onChange}
          axis="horizontal"
          autoPlay={false}
          showArrows={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={95}
          {...dynamicProps}
        >
          {images.map((e, i) => {
            const height = (e.height * width) / e.width;
            return (
              <Image
                key={i}
                src={e.src}
                alt="product preview"
                width={width}
                height={height}
                priority
              />
            );
          })}
        </Carousel>
      )}
    </CarouselBox>
  );
}

function RenderPrev(
  clickHandler: () => void,
  hasPrev: boolean,
  label: string
): React.ReactNode {
  return <button type="button" onClick={clickHandler} disabled={!hasPrev} />;
}

function RenderNext(
  clickHandler: () => void,
  hasPrev: boolean,
  label: string
): React.ReactNode {
  return <button type="button" onClick={clickHandler} disabled={!hasPrev} />;
}
