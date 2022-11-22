import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';


function Card() {
  return (
    <div className="card">
      <div className="card__title">Салат Летний</div>
      <img className="card__image" src={require('../images/card__img.jpg')} alt="" />
      <ul className="card__ingredient">
        <li>помидор</li>
        <li>огурец</li>
        <li>лук</li>
        <li>масло</li>
      </ul>
      <div className="card__desc">Самый простой и самый вкусный летний салат</div>
      <div className="favourite">
        <FontAwesomeIcon icon={regular('bookmark')} />
      </div>
      <a href="#" className="button__light">
        Открыть
      </a>
    </div>
  );
}

export default Card;
