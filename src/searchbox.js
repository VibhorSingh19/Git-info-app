import React from 'react';

function SearchBox({searchfield,onInputChange}) {
  return (
    <div className="pa2">
    <input 
    className="pa3 ba b--green bg-lightest-blue"
    type="search" 
    placeholder='Search Robots'
    onChange={onInputChange}
    />
    </div> 
  );
}

export default SearchBox;
