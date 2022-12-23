import Image from 'next/image';
import { useState, MouseEvent } from 'react';
import { TImage } from '../utils/types';
import { HorizCarousel } from './Carousel';

export default function ProductGallery({ images }: { images: TImage[] }) {
  const imageList = images ? images.map(({ src }) => src) : [];
  const [active, setActive] = useState(0);

  const handleChoose = (e: MouseEvent) => {
    setActive(Number.parseInt(e.currentTarget.getAttribute('data-key') || '0'));
  };

  return (
    <div>
      {/* <aside>
        {images &&
          images.length > 0 &&
          images.map((e, i) => (
            <Image
              key={i}
              data-key={i}
              src={e}
              alt="product preview"
              width={100}
              height={100}
              onClick={handleChoose}
            />
          ))}
      </aside> */}
      <HorizCarousel images={images} />
    </div>
  );
}
