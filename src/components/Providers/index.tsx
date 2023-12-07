'use client'

import { createContext } from 'react'
import { AuthStore, SearchStore } from '@/store'


// !=== GLOBAL STATE ===!
interface Store {
  authStore: AuthStore
  searchStore: SearchStore
}

const authStore = new AuthStore()
const searchStore = new SearchStore()

export const Context = createContext<Store>({ authStore, searchStore })

// !=== COMPONENT ===!

export const Providers = ({ children }: { children: React.ReactNode }) => {

  //!=== GET USER DATA AT FIRST OPEN APP ===!

  return (
    <Context.Provider value={{ authStore, searchStore }}>
      {children}
    </Context.Provider>
  )
}