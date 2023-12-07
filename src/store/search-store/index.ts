import { makeAutoObservable } from 'mobx'

import { useDebounce } from '@/hooks'
import { UserService } from '@/services'
import { IUser } from '@/types'

export class SearchStore {
  query: string = ''
  searchResults: IUser[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setQuery(value: string) {
    this.query = value
  }

  setSearchResults(results: IUser[]) {
    this.searchResults = results
  }

  async searchUsers() {
    try {
      const response = await UserService.searchUsers(this.query)
      this.setSearchResults(response.data)
    } catch (e) {
      console.log('SearchUsers:', e)
    }
  }

  useDebouncedQuery(delay: number = 500) {
    return useDebounce(this.query, delay)
  }
}