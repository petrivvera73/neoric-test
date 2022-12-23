import Image from 'next/image';
import { useState, MouseEvent, useCallback } from 'react';
import { TImage } from '../../utils/types';
import { HorizCarousel } from '../Carousel/Carousel';
import {
  GalleryWrapper,
  PreviewContainer,
  PreviewImage,
  ScrollButton,
  ScrollDownButton,
  VerticalGallery,
} from '../ProductCard/ProductGallery.styled';
import LeftArrowIcon from '../../public/images/chevron-left.svg';

export default function ProductGallery({ images }: { images: TImage[] }) {
  const imageList = images ? images.map(({ src }) => src) : [];
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(0);
  const [skip, setSkip] = useState(0);

  const handleChoose = (e: MouseEvent) => {
    setSelected(
      Number.parseInt(e.currentTarget.getAttribute('data-key') || '0')
    );
  };

  const onCarouselChange = useCallback((index: number) => {
    // setActive(index);
  }, []);

  const handleScrollUp = () => {
    setSkip((s) => {
      if (s > 0) return s - 1;
      return s;
    });
  };

  const handleScrollDown = () => {
    setSkip((s) => {
      if (s < images.length - 4) return s + 1;
      return s;
    });
  };

  return (
    <GalleryWrapper>
      <VerticalGallery>
        {images?.length > 0 &&
          images.map((img, i) => {
            if (i >= skip && i < skip + 4)
              return (
                <PreviewContainer key={i} data-key={i} onClick={handleChoose}>
                  <PreviewImage src={img} alt={`photo ${i}`} />
                </PreviewContainer>
              );
          })}
        {skip > 0 && (
          <ScrollButton onClick={handleScrollUp}>
            <LeftArrowIcon style={{ transform: 'rotate(90deg)' }} />
          </ScrollButton>
        )}
        {skip < images?.length - 4 && (
          <ScrollDownButton onClick={handleScrollDown}>
            <LeftArrowIcon style={{ transform: 'rotate(-90deg)' }} />
          </ScrollDownButton>
        )}
      </VerticalGallery>
      <HorizCarousel
        images={images}
        selected={selected}
        onChange={onCarouselChange}
      />
    </GalleryWrapper>
  );
}
