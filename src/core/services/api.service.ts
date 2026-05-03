import i18n from '@/core/plugins/i18n'
import { tokenService } from '@/core/services/token.service'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000/api'

export class ApiError<T = unknown> extends Error {
  status: number
  data: T | null

  constructor(message: string, status: number, data: T | null = null) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

export interface ApiRequestOptions extends RequestInit {
  auth?: boolean
  params?: Record<string, string | number | boolean | null | undefined>
}

function buildUrl(path: string, params?: ApiRequestOptions['params']) {
  const url = new URL(path.startsWith('http') ? path : `${apiBaseUrl}${path}`)

  Object.entries(params ?? {}).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      url.searchParams.set(key, String(value))
    }
  })

  return url.toString()
}

async function parseResponse<T>(response: Response): Promise<T | null> {
  if (response.status === 204) {
    return null
  }

  const contentType = response.headers.get('content-type') ?? ''

  if (contentType.includes('application/json')) {
    return response.json() as Promise<T>
  }

  return response.text() as Promise<T>
}

export async function apiRequest<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
  const { auth = true, headers, params, body, ...requestOptions } = options
  const token = tokenService.getAccessToken()
  const requestHeaders = new Headers(headers)

  requestHeaders.set('Accept', 'application/json')
  requestHeaders.set('Accept-Language', i18n.global.locale.value)

  if (body && !(body instanceof FormData) && !requestHeaders.has('Content-Type')) {
    requestHeaders.set('Content-Type', 'application/json')
  }

  if (auth && token) {
    requestHeaders.set('Authorization', `Bearer ${token}`)
  }

  const response = await fetch(buildUrl(path, params), {
    ...requestOptions,
    body,
    headers: requestHeaders,
  })
  const data = await parseResponse<T>(response)

  if (!response.ok) {
    if (response.status === 401) {
      tokenService.clearTokens()
      window.dispatchEvent(new CustomEvent('auth:unauthorized'))
    }

    throw new ApiError(i18n.global.t('errors.api'), response.status, data)
  }

  return data as T
}

export const api = {
  get: <T>(path: string, options?: ApiRequestOptions) =>
    apiRequest<T>(path, { ...options, method: 'GET' }),
  post: <T>(path: string, body?: unknown, options?: ApiRequestOptions) =>
    apiRequest<T>(path, { ...options, method: 'POST', body: JSON.stringify(body) }),
  put: <T>(path: string, body?: unknown, options?: ApiRequestOptions) =>
    apiRequest<T>(path, { ...options, method: 'PUT', body: JSON.stringify(body) }),
  patch: <T>(path: string, body?: unknown, options?: ApiRequestOptions) =>
    apiRequest<T>(path, { ...options, method: 'PATCH', body: JSON.stringify(body) }),
  delete: <T>(path: string, options?: ApiRequestOptions) =>
    apiRequest<T>(path, { ...options, method: 'DELETE' }),
}
