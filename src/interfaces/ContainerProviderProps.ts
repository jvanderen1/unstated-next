import { ReactNode } from 'react'

export interface ContainerProviderProps<State = void> {
  initialState?: State
  children: ReactNode
}
