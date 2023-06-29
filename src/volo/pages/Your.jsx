import React, { useState } from 'react'
import { jsonData } from '../Card/data'
import CardList from '../Card/CardList'
import Owner from '../Card/CardBur'

const Your = () => {
  
  return (
    <div>
      <Owner cards={jsonData.data} />
    </div>
  )
}


export default Your