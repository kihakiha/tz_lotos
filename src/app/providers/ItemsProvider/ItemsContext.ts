import React from 'react'


// https://swapi.dev/documentation People Schema
export interface ItemProps {
  name?: string;
  birth_year?: string;
  eye_color?: string;
  gender?: string;
  hair_color?: string;
  height?: string;
  mass?: string;
  skin_color?: string;
  homeworld?: string;
  species?: string[];
  starships?: string[];
  vehicles?: string[]; 
  url?: string;
  created?: string;
  edited?: string;
}

export interface ItemsContextProps {
  items?: ItemProps[];
  setItems?: (items: ItemProps[]) => void; 
}

export const ItemsContext = React.createContext<ItemsContextProps>({})