import { makeAutoObservable } from 'mobx'

class UiStore {
  
  userMenu = false
  searchModal = false

  constructor() {
    makeAutoObservable(this)
  }

  setUserMenu(bool: boolean) {
    this.userMenu = bool
  }
  
  setSearchModal(bool: boolean) {
    this.searchModal = bool
  }
}

export default new UiStore()