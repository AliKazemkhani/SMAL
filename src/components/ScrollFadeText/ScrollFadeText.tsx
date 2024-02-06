import { useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

import { StyledFadingText } from '../StyledComponents/StyledComponents'

export const ScrollFadeText: React.FC<{ text: string }> = ({ text }) => {
  const textRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ['end end', 'start start'],
  })
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <StyledFadingText
      ref={textRef}
      style={{
        opacity: opacityProgress,
      }}
    >
      {text}
    </StyledFadingText>
  )
}
