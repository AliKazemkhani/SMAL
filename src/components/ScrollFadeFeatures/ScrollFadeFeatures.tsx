import { Grid } from '@mui/material'
import { useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { items } from '../../data/features'
import { type FeatureItem } from '../../types/features'
import {
  StyledFeatureItemContainer,
  StyledFeatureItemImage,
  StyledFeatureItemSubtitle,
  StyledFeatureItemTitle,
} from '../StyledComponents/StyledComponents'

export const ScrollFadeFeatures: React.FC = () => {
  const featureRef = useRef(null)
  const input = [0, 1]
  const output = [0, 1]
  const { scrollYProgress } = useScroll({
    target: featureRef,
    offset: ['end end', 'start start'],
  })
  const featuresOpacityProgress = useTransform(scrollYProgress, input, output)
  const { t } = useTranslation()
  if (items?.length === 0) return
  return (
    <Grid
      data-cy="features-div"
      container
      spacing={2}
      justifyContent="space-evenly"
      marginTop={8}
    >
      {items.map((item: FeatureItem) => (
        <Grid item xs={6} md={4} key={item.id} textAlign="center">
          <StyledFeatureItemContainer
            data-testid="feature-item"
            key={item.id}
            ref={featureRef}
            style={{
              opacity: featuresOpacityProgress,
            }}
          >
            <StyledFeatureItemImage src={item.icon} alt={item.title} />
            <div>
              <StyledFeatureItemTitle variant="h4">
                {t(`${item.title}`)}
              </StyledFeatureItemTitle>
              <StyledFeatureItemSubtitle variant="subtitle1">
                {t(item.subtitle)}
              </StyledFeatureItemSubtitle>
            </div>
          </StyledFeatureItemContainer>
        </Grid>
      ))}
    </Grid>
  )
}
