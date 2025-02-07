import { ChangeEvent, ChangeEventHandler } from 'react';

import './search-box.styles.css';

type SearchBoxProps = {
  className: string
  placeholder?: string
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>,
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void // this is similar to above line but manual way when we need to pass other params or want to return some specific value
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;

