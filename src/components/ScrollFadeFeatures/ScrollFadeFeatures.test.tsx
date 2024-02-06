import { render } from '@testing-library/react'
import React from 'react'

import { items } from '../../data/features'
import { type FeatureItem } from '../../types/features'
import { ScrollFadeFeatures } from './ScrollFadeFeatures'

describe('ScrollFadeFeatures', () => {
  it('renders the correct number of items', () => {
    const { getAllByTestId } = render(<ScrollFadeFeatures />)
    expect(getAllByTestId('feature-item').length).toBe(items.length)
  })

  it('displays the correct titles and subtitles', () => {
    const { getByText } = render(<ScrollFadeFeatures />)
    items.forEach((item: FeatureItem) => {
      expect(getByText(item.title)).toBeInTheDocument()
      expect(getByText(item.subtitle)).toBeInTheDocument()
    })
  })
})
