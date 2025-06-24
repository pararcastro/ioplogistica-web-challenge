import { useState } from "react";
import magnifierIcon from "../assets/magnifier.svg";


type SearchBarProps = {
    onSearch: (query: string) => void;
    totalSearchResults: number;
}

const SearchBar = ({ onSearch, totalSearchResults }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <div className="search-bar__wrapper">
          <img className='magnifier-icon' src={magnifierIcon}  alt="" />
          <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Buscar personaje..."
          />
      </div>
      {totalSearchResults > 0 &&
                <p className="search-bar__total"><span>{totalSearchResults}</span> RESULTS</p>
            }
    </div>
  );
}
export default SearchBar;