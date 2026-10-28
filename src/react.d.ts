import type { ConfigOptions } from './index.js'
import type { Linter } from 'eslint'

export declare function createReactConfig(
  options?: ConfigOptions & { reactFiles?: string[] },
): Linter.Config[]

export default createReactConfig
