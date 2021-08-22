import { useContext, Context as ContextInterface } from 'react'
import { empty } from './symbols'

export function createUseContext<V>({
  Context,
}: {
  Context: ContextInterface<V | typeof empty>
}): () => V {
  return () => {
    const value = useContext(Context)
    if (value === empty) {
      throw new Error(
        `Component must be wrapped with <${Context.displayName}.Provider>`,
      )
    }
    return value
  }
}
