import React, { useEffect, useState } from 'react'
import { jsonData } from '../Card/data'
import CardList from '../Card/CardList'
import SearchComponent from '../Search'
import Filter from '../Filter'

const All = () => {
  return (
    <div>
      <SearchComponent />
       <Filter />
      <CardList data={jsonData.data} />
    </div>
  )
}

export default All