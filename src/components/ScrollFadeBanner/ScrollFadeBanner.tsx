import React from 'react'
import { useTranslation } from 'react-i18next'

import captureCardImage from '../../assets/images/capturecard.png'
import { ScrollFadeFeatures } from '../ScrollFadeFeatures/ScrollFadeFeatures'
import { ScrollFadeText } from '../ScrollFadeText/ScrollFadeText'
import { StickyImage } from '../StickyImage/StickyImage'
import { StyledFadingBannerSection } from '../StyledComponents/StyledComponents'

export const ScrollFadeBanner: React.FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <StyledFadingBannerSection>
        <ScrollFadeText text={t('scrollBannerTitle')} />
        <ScrollFadeFeatures />
      </StyledFadingBannerSection>
      <StickyImage imageSrc={captureCardImage} />
    </>
  )
}
