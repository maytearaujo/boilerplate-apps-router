import { StorybookConfig } from '@storybook/nextjs-vite'

const config: StorybookConfig = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
  framework: '@storybook/nextjs-vite',
  docs: { defaultName: 'Documentation' },
  staticDirs: ['..\\public']
}
export default config
