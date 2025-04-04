import "./search.css"
import SearchIcon from "./searchIcon"

interface SearchProps {
    value: string
    setValue: (value: string) => void
}

function Search({ value, setValue }: SearchProps) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <div id="search-container">
            <SearchIcon />
            <input
                type="text"
                placeholder="Поиск"
                value={value}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default Search
