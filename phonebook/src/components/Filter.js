import React from 'react'

const Filter = ({ handleSearchChange, searchTerm }) => {
   return (
      <p>Filter by name
         <input type="text" onChange={handleSearchChange} value={searchTerm} name="searchText" />
      </p>
   )
}

export default Filter