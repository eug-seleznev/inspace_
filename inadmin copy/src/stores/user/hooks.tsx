import React from 'react'
import { useLocalObservable } from 'mobx-react' // 6.x or mobx-react-lite@1.4.0
import { TUserStore, userStore } from './userStore'


const storeContext = React.createContext<TUserStore | null>(null)

export const UserStoreProvider = ({ children  }: any) => {
  const store = useLocalObservable(userStore)
  
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useUserStore = () => {
  const store = React.useContext(storeContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}