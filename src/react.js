import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { createConfig } from './index.js'

/**
 * Build a flat ESLint config for React projects.
 * @param {Parameters<typeof createConfig>[0]} options
 * @returns {import("eslint").Linter.Config[]}
 */
export function createReactConfig(options = {}) {
  const files = options.files ?? ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}']
  const reactFiles = options.reactFiles ?? ['**/*.{jsx,tsx}']

  return [
    ...createConfig({ ...options, files }),
    {
      ...react.configs.flat.recommended,
      name: 'lucastakeo/react',
      files: reactFiles,
      settings: { react: { version: 'detect' } },
      rules: {
        ...react.configs.flat.recommended.rules,
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      ...react.configs.flat['jsx-runtime'],
      name: 'lucastakeo/react-jsx-runtime',
      files: reactFiles,
    },
    {
      ...reactHooks.configs.flat.recommended,
      name: 'lucastakeo/react-hooks',
      files: reactFiles,
    },
    {
      ...jsxA11y.flatConfigs.recommended,
      name: 'lucastakeo/accessibility',
      files: reactFiles,
    },
  ]
}

export default createReactConfig
