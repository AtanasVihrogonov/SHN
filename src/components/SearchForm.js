import React from 'react';
import { HANDLE_SEARCH } from '../actions';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const [query, handleSearch] = useGlobalContext();

  return (
    <form className='search-form'>
      <h2>search hacker news</h2>
      <div class='form-group'>
        <input
          type='text'
          className='form-input'
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchForm;
