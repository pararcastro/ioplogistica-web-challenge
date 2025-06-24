import { useState } from "react";
import magnifierIcon from "../../assets/magnifier.svg";
import './SearchBar.css'; 

type SearchBarProps = {
    onSearch: (query: string) => void;
    totalSearchResults: number;
    queryValue: string;
}

const SearchBar = ({ onSearch, totalSearchResults, queryValue }: SearchBarProps) => {

  return (
    <div className="search-bar">
      <div className="search-bar__wrapper">
          <img className='magnifier-icon' src={magnifierIcon}  alt="" />
          <input
              type="text"
              value={queryValue}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Buscar personaje..."
          />
      </div>
      {totalSearchResults > 0 &&
                <p className="search-bar__total">
                  <span>{totalSearchResults}</span> RESULTS
                </p>
            }
    </div>
  );
}
export default SearchBar;