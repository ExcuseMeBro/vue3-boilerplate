import type { JwtTokenPair } from '@/core/services/token.service'

export interface User {
  id: string | number
  name: string
  email: string
  avatar?: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload extends LoginPayload {
  name: string
  passwordConfirmation?: string
}

export interface AuthResponse extends JwtTokenPair {
  user: User
}
