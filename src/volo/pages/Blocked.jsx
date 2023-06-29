import React from 'react'
// import CardBlocked from '../Card/CardBlocked'
import { jsonData } from '../Card/data'
import CardBlocked from '../Card/CardBlock'

const Blocked = () => {
  return (
    <div>
      <CardBlocked cards={jsonData.data} />
    </div>
  )
}

export default Blocked