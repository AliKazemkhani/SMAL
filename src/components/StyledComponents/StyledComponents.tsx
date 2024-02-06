import { Box, styled, Typography } from '@mui/material'
import { motion } from 'framer-motion'

export const StyledFadingBannerSection = styled('section')(({ theme }) => ({
  height: '130vh',
  backgroundColor: '#000',
  maxWidth: '1920px',
  marginLeft: '2rem',
  marginRight: '2rem',

  [theme.breakpoints.down('sm')]: {
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  [theme.breakpoints.up('lg')]: {
    marginLeft: '10rem',
    marginRight: '10rem',
  },
}))

export const StyledStickyContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  position: 'sticky',
  bottom: 0,
})

export const StyledStickyImage = styled('img')(({ theme }) => ({
  maxHeight: '30vh',
  maxWidth: '90vw',
  transform: 'translateY(-100%)',
  [theme.breakpoints.up('lg')]: {
    marginTop: '18rem',
  },
}))

export const StyledFadingText = styled(motion.h3)(({ theme }) => ({
  color: 'white',
  background: 'linear-gradient(91deg, #474747, #fff 50.18%, #474747)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '24px',
  textTransform: 'uppercase',
  lineHeight: 1.2,
  textAlign: 'center',
  marginTop: '10rem',
  fontFamily: 'RomanBoldCondensed',

  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '32px',
  },
}))

export const StyledFullScreenBannerBox = styled(Box)({
  transition: '0.3s',
  zIndex: 2,
  position: 'relative',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const StyledFullScreenBannerTypography = styled(Typography)(
  ({ theme }) => ({
    color: 'white',
    fontFamily: 'RomanBoldCondensed',
    textTransform: 'uppercase',
    fontSize: '58px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '42px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '58px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '78px',
    },
  })
)

export const StyledFeatureItemContainer = styled(motion.div)(({ theme }) => ({
  color: 'white',
  maxWidth: '100%',
  transform: 'translate(0px)',
  [theme.breakpoints.down('md')]: {
    padding: '0',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '50px',
  },
}))

export const StyledFeatureItemTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'RomanBoldCondensed',
  wordWrap: 'break-word',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '24px',
  },
}))

export const StyledFeatureItemSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Roman',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
  },
}))

export const StyledFeatureItemImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '40%',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '60%',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '100%',
  },
}))

export const StyledPageNotFoundContainer = styled('div')({
  textAlign: 'center',
  marginTop: '50px',
  color: 'white',
})
