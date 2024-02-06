import React from 'react'
import { useTranslation } from 'react-i18next'

import { FullScreenBanner } from '../components/FullScreenBanner/FullScreenBanner'
export const MainPage: React.FC = () => {
  const { t } = useTranslation()
  return (
      <div className="App">
        <FullScreenBanner
          backgroundColor="blue"
          title={t('welcome')}
          variant="h1"
        />
        <FullScreenBanner
          backgroundColor="red"
          title={t('thankYou')}
          variant="h2"
        />
      </div>
  )
}
