import { useState } from "react";
import { Button } from "@chakra-ui/react";

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
        <input type="text" placeholder="Search" onChange={onSearchChange}/>
        <Button type='submit' value='submit'>Submit</Button>
        </div>
    )
}

export default SearchBar;