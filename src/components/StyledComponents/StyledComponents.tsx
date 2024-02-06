import { Box, styled, Typography } from '@mui/material'

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

export const StyledPageNotFoundContainer = styled('div')({
  textAlign: 'center',
  marginTop: '50px',
  color: 'white',
})
