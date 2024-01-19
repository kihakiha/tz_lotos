import React from 'react';

import styles from './TableList.module.scss';
import { ItemsContext } from '../../app/providers/ItemsProvider/ItemsContext';

export const TableList = () => {
  const {items} = React.useContext(ItemsContext)

  if (items?.length) {
    return (
      <div className={styles.TableList}>
        <h3>Результаты поиска</h3>
        {
          items.map((item) => (
            <div key={item.name}>
              <span>{item.name}</span>
            </div>
          ))
        }
      </div>
    );
  }

  return null
};