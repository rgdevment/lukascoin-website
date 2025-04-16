import { Token } from './Token.tsx'
import { TagDetail } from './TagDetail.tsx'

export interface TokenList {
  name: string
  logoURI: string
  keywords?: string[]
  tags?: Record<string, TagDetail>
  timestamp?: string
  version?: { major: number; minor: number; patch: number }
  tokens: Token[]
}
