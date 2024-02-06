import React from 'react'
import { useTranslation } from 'react-i18next'

import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import { FullScreenBanner } from '../components/FullScreenBanner/FullScreenBanner'
import { ScrollFadeBanner } from '../components/ScrollFadeBanner/ScrollFadeBanner'

export const MainPage: React.FC = () => {
  const { t } = useTranslation()
  return (
    <ErrorBoundary>
      <div className="App">
        <FullScreenBanner
          backgroundColor="blue"
          title={t('welcome')}
          variant="h1"
        />
        <ScrollFadeBanner />
        <FullScreenBanner
          backgroundColor="red"
          title={t('thankYou')}
          variant="h2"
        />
      </div>
    </ErrorBoundary>
  )
}
