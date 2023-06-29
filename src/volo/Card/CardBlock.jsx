import React from 'react'

const CardBlocked = ({cards}) => {

    const filterCards=cards.filter((item)=>item.owner_id===4)
    const renderCard=filterCards.map(item=>(
    <div key={item.name} className="card your ">
    <span><img className='image' src={item.icon} alt="" /></span>
    <div className='card-body'>
        <h1 className='title'>{item.title}</h1>
        <div className='name'>{item.name} <span className='dot'></span> <span className='budget'>Budget</span></div>
        <div className='Amount'><span className='freq'>AMOUNT</span><span className='freq'>FREQUENCY</span><span className='freq'>EXPIRY</span></div>
        <div className='spend' ><span className='freqMonthly'>   {item.spent.value} {item.spent.currency}</span><span className='freqMonthly2'>{item.frequency}</span><span className='freqMonthly3'>{item.expiry}</span></div>
        <div class="colorbar2"></div>
        <div className='balance'>
            <span className='greendot'></span>
            <span>Spent</span>
            <span className='value' >{item.available_to_spend.value}    {item.available_to_spend.currency}</span>
        </div>
        <div className='balance'>
            <span className='reddot'></span>
            <span>Balance</span>
            <span className='valuebal' >{item.available_to_spend.value}    {item.available_to_spend.currency}</span>
        </div>

     </div>
     </div>   
    ));
  return (
    <div className="cardbody ">
        {renderCard} 
    </div>
  )
}

export default CardBlocked