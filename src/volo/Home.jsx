import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardListingPage = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState('Your');
  const [selectedCardType, setSelectedCardType] = useState('All');

  useEffect(() => {
    fetchData();
  }, [page, selectedTab, selectedCardType]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `your-mock-api-url?page=${page}&tab=${selectedTab}&cardType=${selectedCardType}&search=${searchTerm}`
      );
      setCards(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setPage(1);
  };

  const handleCardTypeChange = (cardType) => {
    setSelectedCardType(cardType);
    setPage(1);
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={selectedTab === 'Your' ? 'active' : ''}
          onClick={() => handleTabChange('Your')}
        >
          Your Cards
        </button>
        <button
          className={selectedTab === 'All' ? 'active' : ''}
          onClick={() => handleTabChange('All')}
        >
          All Cards
        </button>
        <button
          className={selectedTab === 'Blocked' ? 'active' : ''}
          onClick={() => handleTabChange('Blocked')}
        >
          Blocked Cards
        </button>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by card name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          value={selectedCardType}
          onChange={(e) => handleCardTypeChange(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="burner">Burner</option>
          <option value="subscription">Subscription</option>
        </select>
      </div>

      <div className="card-list">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-type">{card.card_type}</div>
            <div className="card-details">
              <div className="card-name">{card.name}</div>
              <div className="card-info">
                {card.card_type === 'burner' ? (
                  <div className="expiry">Expiry: {card.expiry}</div>
                ) : (
                  <div className="limit">Limit: {card.limit}</div>
                )}
                <div className="status">Status: {card.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="load-more" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default CardListingPage;
