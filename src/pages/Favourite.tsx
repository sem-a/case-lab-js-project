import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Header from '../components/Header';
import FavouriteCard from '../components/FavouritesCard';
import FixedBg from '../components/FixedBg';

function Favourite() {
  
  const [favRecipe, setFavRecipe] = useState([]);

  return (
    <div>
      <Header />
      <div className="favourite__items">
        <Link to="/">
          <div className="link__home">
            <FontAwesomeIcon icon={solid('chevron-left')} />
            <p>Вернуться к поиску</p>
          </div>
        </Link>

        {/* 
          Здесь вывод карточек, которые попали в избранное
        */}

        <FavouriteCard />
      </div>
      <FixedBg />
    </div>
  );
}

export default Favourite;
