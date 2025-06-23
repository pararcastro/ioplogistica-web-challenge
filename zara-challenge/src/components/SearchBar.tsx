import { useState } from "react";
import magnifierIcon from "../assets/magnifier.svg";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
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
    </div>
  );
}
export default SearchBar;