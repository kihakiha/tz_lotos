import React from 'react';

import styles from './SearchInput.module.scss';

interface ISearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

export const SearchInput = (props: ISearchInputProps) => {
  const {
    value,
    setValue,
  } = props;


  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)    
  } 

  return (
    <input
      type="text"
      placeholder='Введите имя'
      className={styles.SearchInput}
      value={value}
      onChange={onChangeSearchValue}
    />
  );
};