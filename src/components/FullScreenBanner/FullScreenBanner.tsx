import { type TypographyProps } from '@mui/material'
import React from 'react'

import {
  StyledFullScreenBannerBox,
  StyledFullScreenBannerTypography,
} from '../StyledComponents/StyledComponents'

interface FullScannerBannerProps {
  backgroundColor: string
  title: string
  variant: TypographyProps['variant']
}

export const FullScreenBanner: React.FC<FullScannerBannerProps> = ({
  backgroundColor,
  title,
  variant,
}) => {
  return (
    <StyledFullScreenBannerBox
      style={{
        backgroundColor,
      }}
    >
      <StyledFullScreenBannerTypography variant={variant}>
        {title}
      </StyledFullScreenBannerTypography>
    </StyledFullScreenBannerBox>
  )
}
