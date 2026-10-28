import eslint from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import tseslint from 'typescript-eslint'

const defaultStyle = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  semi: false,
  endOfLine: 'auto',
}

/**
 * Build a flat ESLint config with Rocketseat-inspired defaults.
 * @param {{ files?: string[], typescript?: boolean, style?: Partial<typeof defaultStyle> }} options
 * @returns {import("eslint").Linter.Config[]}
 */
export function createConfig(options = {}) {
  const {
    files = ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
    typescript = true,
    style = {},
  } = options
  const prettierOptions = { ...defaultStyle, ...style }

  const configs = [
    {
      ...eslint.configs.recommended,
      name: 'lucastakeo/base',
      files,
    },
  ]

  if (typescript) {
    configs.push(
      ...tseslint.configs.recommended.map((config) => ({
        ...config,
        files: config.files ? config.files.map((pattern) => pattern) : files,
      })),
    )
  }

  configs.push({
    name: 'lucastakeo/style',
    files,
    plugins: { prettier },
    rules: {
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'prettier/prettier': ['error', prettierOptions],
    },
  })

  return configs
}

export const defaultConfig = createConfig()
export default defaultConfig
