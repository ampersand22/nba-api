import React, {useState} from 'react';
import '../App.css';
import Login from './Login'
import SearchForm from './SearchForm';
import SearchBar from './UpdatedSearchBar';

const Navbar = ({name, handleSubmit, handleChange, ...props}) => {
  const [showLogin, setShowLogin] = useState(false)

  const toggleShowLogin = (event) => {
    setShowLogin(!showLogin)
  }
  const handleLogout = () => { 
    props.setCurrentUser({})
    alert('You have logged out.')
  }

  

  return (
    <div className='navbar'>
        <SearchForm className='search-form'
          name={name} handleSubmit={handleSubmit} handleChange={handleChange}/>
    </div>
  )
}

export default Navbar