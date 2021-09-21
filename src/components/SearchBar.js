import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
const SearchBar = () => (
    <form action="/" method="get">

        <label htmlFor="header-search">
        {/* <SearchIcon /> */}

            {/* <span className="visually-hidden">Search blog posts</span> */}
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search for songs"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;