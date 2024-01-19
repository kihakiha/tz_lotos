import React from 'react';
import axios from 'axios';

import { SearchInput } from '../SearchInput/SearchInput';
import { SearchButton } from '../SearchButton/SearchButton';
import { ItemsContext } from '../../app/providers/ItemsProvider/ItemsContext';
import { Loader } from '../Loader/Loader';

import styles from './SearchForm.module.scss';

export const SearchForm = React.memo(() => {
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const {setItems} = React.useContext(ItemsContext)

  const onSearch = React.useCallback(async () => {
    setIsLoading(true)
    await axios
      .get('https://swapi.dev/api/people', {
        params: {
          search: searchValue,
        }
      })
      .then((response) => {
        if (response.data.results.length) { 
          setItems?.(response.data.results)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, [searchValue, setItems])

  if (isLoading) {
    return (
      <Loader />
    )
  }
  
  return (
    <form className={styles.searchForm}>
      <SearchInput value={searchValue} setValue={setSearchValue}/>
      <SearchButton onClick={onSearch}/>
    </form>
  );
});