import { useState } from "react";
import { Button } from "./ui";

const SearchBar = ({onSearchChange}) => {
    const [searchInput, setSearchInput] = useState("")

  // Function for Search bar
  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
    onSearchChange(e.target.value)
}
    return(
        <div className="searchBarContainer" >
        <input type="text" value={searchInput} placeholder="Search" onChange={handleSearchChange}/>
        <Button type="submit">Submit</Button>
        </div>
    )
}

export default SearchBar;