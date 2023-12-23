'use client'

import React, { createContext, useState, useContext } from 'react'

const Context = createContext({} as ContextProps)

interface ContextProps {
  state: string
  setState: React.Dispatch<React.SetStateAction<string>>
}
export function AppWraper({ children }: { children: React.ReactNode }) {
  let [state, setState] = useState('Estado inicial')

  return (
    <Context.Provider value={{ state, setState }}>
      {children}
    </Context.Provider>
  )
}

export function useAppContext() {
  return useContext(Context)
}