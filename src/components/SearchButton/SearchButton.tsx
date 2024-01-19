import React from 'react';

import styles from './SearchButton.module.scss';

interface ISearchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  onClick?: () => void;
}

export const SearchButton = (props: ISearchButtonProps) => {
  const {
    onClick
  } = props

  return (
    <button
      className={styles.SearchButton}
      type='button'  
      onClick={onClick}
    >
      Поиск
    </button>
  );
};