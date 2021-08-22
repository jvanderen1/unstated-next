import { createContext } from 'react'
import { createUseContext, createProvider } from './'
import { Container, ContainerOptions } from './interfaces'
import { UseHook } from './types'
import { empty } from './symbols'

export function createContainer<V, S = void>(
  useHook: UseHook<V, S>,
  options?: ContainerOptions,
): Container<V, S> {
  const ContainerContext = createContext<V | typeof empty>(empty)
  ContainerContext.displayName = options?.displayName
    ? options.displayName
    : 'ContainerContext'

  const Provider = createProvider({ Context: ContainerContext, useHook })
  const useContext = createUseContext({ Context: ContainerContext })

  return { Provider, useContext }
}
