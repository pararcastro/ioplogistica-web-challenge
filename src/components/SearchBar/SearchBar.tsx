import './SearchBar.css'; 
import magnifierIcon from '@assets/img/magnifier.svg';


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
              data-testid="search-bar"
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