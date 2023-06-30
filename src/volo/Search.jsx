import React, { useState } from 'react';
import { jsonData } from './Card/data';
import Card from './Card/Card';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const results = jsonData.data.filter((item) => {
      return item.name.toLowerCase().includes(term.toLowerCase());
    });

    setSearchResults(results);
  };

  return (
    <div>
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearch} />
        <div className='searchCard'>
        {searchResults.map((item) => (
         <div >
             <Card key={item.owner_id} item={item} /> 
         </div> 
        ))}
        </div>
    </div>
  );
};

export default SearchComponent;
