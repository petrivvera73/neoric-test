import Image from 'next/image';
import qualityPic from '../../public/images/qualitat.png';

export default function BenefitBadge() {
  return (
    <div>
      <Image
        src={qualityPic}
        alt="quality icon"
        width={75}
        height={96}
        priority
      />
      <div>
        <p>100% Qualität</p>
        <p>Dank weichem Silikon</p>
      </div>
    </div>
  );
}
