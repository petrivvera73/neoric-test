import qualityPic from '../../public/images/qualitat.png';
import {
  BadgeImage,
  BadgeSubtitle,
  BadgeTitle,
  BadgeWrapper,
} from './BenefitBadge.styled';

export default function BenefitBadge() {
  return (
    <BadgeWrapper>
      <BadgeImage src={qualityPic} alt="quality icon" priority />
      <div>
        <BadgeTitle>100% Qualität</BadgeTitle>
        <BadgeSubtitle>Dank weichem Silikon</BadgeSubtitle>
      </div>
    </BadgeWrapper>
  );
}
