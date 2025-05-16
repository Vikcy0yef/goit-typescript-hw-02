import React, { ChangeEvent, FormEvent, useState  } from 'react';
import {toast} from "react-hot-toast"
import s from "./SearchBar.module.css"
import{SearchBarProps} from "./SearchBar.types"

const SearchBar: React.FC<SearchBarProps> = ({onSubmit}) => {
  const [query, setQuery] = useState<string>("");
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const trimmedQuery = query.trim();
    if (trimmedQuery === "") {
      toast.error("Please enter a search term!");
      return;
    }
     onSubmit(trimmedQuery);
  setQuery("");
  }
 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }
  
  return (
    
          <header className={s.header}>
              <form onSubmit={handleSubmit}>
          <input type="text"
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
            value={query}
            onChange={handleChange}
                  />
                  <button type='submit' >Search</button>
              </form>
      </header>
  
  )
}

export default SearchBar
