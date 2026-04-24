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
// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Preview } from '@storybook/react'

const preview: Preview = {
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs']
}

export default preview
