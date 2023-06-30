import React from 'react'

const Card = ({ item }) => {
    return (
        <div>
            <div className="card ">
                <span><img className='image' src={item.icon} alt="" /></span>
                <div className='card-body'>
                    <h1 className='title'>{item.name}</h1>
                    <div className='name'>{item.budget_name} <span className='dot'></span> <span className='budget'>Budget</span></div>
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

                    {/* <h3>{item.name}</h3>
                    <img src={item.icon} alt="" />
                    <p>Budget Name: {item.budget_name}</p>
                    <p>Owner ID: {item.owner_id}</p>
                    <p>Spent: {item.spent.value} {item.spent.currency}</p>
                    <p>Available to Spend: {item.available_to_spend.value} {item.available_to_spend.currency}</p>
                    <p>Card Type: {item.card_type}</p>
                    <p>Expiry: {item.expiry}</p>
                    <p>Limit: {item.limit}</p>
                    <p>Status: {item.status}</p> */}
                </div>
            </div>
        </div>
    );
};
export default Card