const accessTokenKey = 'auth.accessToken'
const refreshTokenKey = 'auth.refreshToken'

export interface JwtTokenPair {
  accessToken: string
  refreshToken?: string
}

export const tokenService = {
  getAccessToken() {
    return localStorage.getItem(accessTokenKey)
  },

  getRefreshToken() {
    return localStorage.getItem(refreshTokenKey)
  },

  setTokens(tokens: JwtTokenPair) {
    localStorage.setItem(accessTokenKey, tokens.accessToken)

    if (tokens.refreshToken) {
      localStorage.setItem(refreshTokenKey, tokens.refreshToken)
    }
  },

  clearTokens() {
    localStorage.removeItem(accessTokenKey)
    localStorage.removeItem(refreshTokenKey)
  },
}
