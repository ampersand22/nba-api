import React from 'react';
import { Button } from '@chakra-ui/react';

export default function SearchForm (props) {
    return (
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="search">
            Player Search ---- <input className='search-input' type="text" placeholder='search player...' value={props.name} onChange={props.handleChange} />
        </label>
        <Button type="submit" value="Submit">Submit</Button>
      </form>
    );
}