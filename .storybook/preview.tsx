import React from 'react'
import GlobalStyles from '../src/styles/Global'

export const decorators = [
  (Story: React.FC) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
]
