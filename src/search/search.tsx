import "./search.css"
import SearchIcon from "./searchIcon"

function Search() {
    return (
        <div id="search-container">
            <SearchIcon />
            <input type="text" placeholder="Поиск" />
        </div>
    )
}

export default Search
