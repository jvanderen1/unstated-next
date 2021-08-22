import { ComponentType } from 'react'
import { ContainerProviderProps } from './ContainerProviderProps'

export interface Container<V, S = void> {
  Provider: ComponentType<ContainerProviderProps<S>>
  useContext: () => V
}
