import { api } from '@/core/services/api.service'
import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
  User,
} from '@/modules/auth/models/auth.models'

export const authService = {
  login(payload: LoginPayload) {
    return api.post<AuthResponse>('/auth/login', payload, { auth: false })
  },

  register(payload: RegisterPayload) {
    return api.post<AuthResponse>('/auth/register', payload, { auth: false })
  },

  me() {
    return api.get<User>('/auth/me')
  },

  refresh(refreshToken: string) {
    return api.post<AuthResponse>('/auth/refresh', { refreshToken }, { auth: false })
  },

  logout() {
    return api.post<void>('/auth/logout')
  },
}
