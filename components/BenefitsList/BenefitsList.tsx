import BenefitBadge from '../BenefitBadge/BenefitBadge';
import { BenefitsBlock, BenefitsListContainer } from './BenefitsList.styled';

export default function BenefitsList() {
  return (
    <BenefitsBlock>
      <BenefitsListContainer>
        <BenefitBadge />
        <BenefitBadge />
        <BenefitBadge />
      </BenefitsListContainer>
    </BenefitsBlock>
  );
}
