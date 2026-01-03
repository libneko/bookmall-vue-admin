import type { LoginToken } from '@/api/types'

const LOGIN_ADMIN_KEY = 'login_admin'

export function getLoginAdmin(): LoginToken | null {
  const json = localStorage.getItem(LOGIN_ADMIN_KEY)
  if (json) {
    try {
      return JSON.parse(json) as LoginToken
    } catch (e) {
      console.error('Failed to parse login admin info', e)
      return null
    }
  }
  return null
}

export function setLoginAdmin(token: LoginToken): void {
  localStorage.setItem(LOGIN_ADMIN_KEY, JSON.stringify(token))
}

export function removeLoginAdmin(): void {
  localStorage.removeItem(LOGIN_ADMIN_KEY)
}
