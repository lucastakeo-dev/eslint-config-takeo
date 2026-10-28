import type { Linter } from 'eslint'

export interface StyleOptions {
  printWidth?: number
  tabWidth?: number
  singleQuote?: boolean
  trailingComma?: 'all' | 'es5' | 'none'
  arrowParens?: 'always' | 'avoid'
  semi?: boolean
  endOfLine?: 'auto' | 'lf' | 'crlf' | 'cr'
}

export interface ConfigOptions {
  files?: string[]
  typescript?: boolean
  style?: StyleOptions
}

export declare function createConfig(options?: ConfigOptions): Linter.Config[]

export declare const defaultConfig: Linter.Config[]
export default defaultConfig
