import { useState } from "react";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-bar__wrapper">
                <img className='magnifier-icon'  alt="" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Buscar personaje..."
                />
        </div>
  );
}
export default SearchBar;