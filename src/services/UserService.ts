import { AxiosResponse } from 'axios'

import { $search } from '@/api'
import { IUser } from '@/types'

export class UserService {
  static async getUserByLogin(login: string): Promise<AxiosResponse<IUser>> {
    return $search.get<IUser>(`${login}`)
  }

  static async searchUsers(query: string): Promise<AxiosResponse<IUser[]>> {
    return $search.get<IUser[]>('', { params: { q: query } })
  }
}