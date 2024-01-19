import React, { FC, PropsWithChildren } from 'react'
import { ItemsContext } from './ItemsContext';
import type { ItemProps } from './ItemsContext'

export const ItemsProvider: FC<PropsWithChildren> = (props) => {
  const {
    children
  } = props
  
  const [items, setItems] = React.useState<ItemProps[]>([])

  const defaultProps = React.useMemo(() => ({
    items,
    setItems,
  }), [items]);

  return <ItemsContext.Provider value={defaultProps}>{children}</ItemsContext.Provider>
}