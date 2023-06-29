import React, { useEffect, useState } from 'react'
import { jsonData } from '../Card/data'
import CardList from '../Card/CardList'

const All = () => {
  return (
    <div>
      <CardList data={jsonData.data} />
    </div>
  )
}

export default All