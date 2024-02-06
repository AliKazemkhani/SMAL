import React from 'react'
import { render } from '@testing-library/react'
import { ScrollFadeText } from './ScrollFadeText'

describe('ScrollFadeText', () => {
  it('renders the passed text', () => {
    const testText = 'Test Text'
    const { getByText } = render(<ScrollFadeText text={testText} />)
    expect(getByText(testText)).toBeInTheDocument()
  })

  // Add more tests as needed...
})
