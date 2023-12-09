import { AxiosResponse } from 'axios'

import { IUser } from '@/types'
import { $auth } from '@/api'

export class AuthService {
  static async signIn(login: string, password: string): Promise<AxiosResponse<void>> {
    return $auth.post<void>('/users/sign_in', { login, password })
  }

  static async signUp(firstName: string, lastName: string, login: string, email: string, password: string): Promise<AxiosResponse<void>> {
    return $auth.post<void>('/users/sign_up', { firstName, lastName, login, email, password })
  }

  static async signOut(): Promise<AxiosResponse<void>> {
    return $auth.post<void>('/sign_out')
  }

  static async getProfile(): Promise<AxiosResponse<IUser>> {
    return $auth.get<IUser>('/profile')
  }
}