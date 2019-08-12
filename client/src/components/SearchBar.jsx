import React, { useContext } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap'
import { YoutubeContext } from '../contexts/YoutubeContext';

const SearchBar = () => {
  const { handleChange } = useContext(YoutubeContext);

  return (
    <div className='search-bar'>
      <div className='field'>
        <Form inline>
          <FormControl onChange={(e) => handleChange(e)} type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </div>
    </div>
  );
}

export default SearchBar;
