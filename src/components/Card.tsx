import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Card (props: any) {
  return (
    <div className="card">
      <div className="card__title">{props.title}</div>
      <img className="card__image" src={require('../images/card__img.jpg')} alt="" />
      <ul className="card__ingredient">
        <li>помидор</li>
        <li>огурец</li>
        <li>лук</li>
        <li>масло</li>
      </ul>
      <div className="card__desc">{props.desc}</div>
      <div className="favourite">
        <label className="favourite__label" htmlFor='favourite'>
          <input type="checkbox" name="favourite" id="favourite" className="favourite__checkbox" />
          <span className='checkmark'></span>
        </label>
      </div>
      <Link to="/recipe">
        <div className="button__light">Открыть</div>
      </Link>
    </div>
  );
}

export default Card;
