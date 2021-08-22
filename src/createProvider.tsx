import { ComponentType, Context as ContextInterface } from 'react'
import PropTypes from 'prop-types'
import { ContainerProviderProps, InferPropTypes } from './interfaces'
import { UseHook } from './types'
import { empty } from './symbols'

export function createProvider<V, S>({
  Context,
  useHook,
}: {
  Context: ContextInterface<V | typeof empty>
  useHook: UseHook<V, S>
}): ComponentType<ContainerProviderProps<S>> {
  const providerPropTypes = {
    children: PropTypes.node.isRequired,
    initialState: PropTypes.any,
  }

  // const providerDefaultProps = {
  //   initialState: undefined,
  // }

  type ProviderProps = InferPropTypes<typeof providerPropTypes>

  function Provider({ children, initialState }: ProviderProps) {
    const value = useHook(initialState)
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  Provider.propTypes = providerPropTypes

  // Provider.defaultProps = providerDefaultProps

  return Provider as ComponentType<ContainerProviderProps<S>>
}
