import React from 'react'

import {
  StyledStickyContainer,
  StyledStickyImage,
} from '../StyledComponents/StyledComponents'

export const StickyImage: React.FC<{ imageSrc: string }> = ({ imageSrc }) => {
  return (
    <StyledStickyContainer>
      <StyledStickyImage src={imageSrc} alt="Sticky" />
    </StyledStickyContainer>
  )
}
