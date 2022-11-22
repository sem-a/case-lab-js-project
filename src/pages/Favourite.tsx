import React from 'react';
import Header from '../components/Header';
import FavouriteCard from '../components/FavouritesCard';

function Favourite() {
  return(
    <div>
      <Header />
      <div className="favourite__items">
        <FavouriteCard />
      </div>
    </div>
  );
};

export default Favourite;