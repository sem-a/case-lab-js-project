import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className='header__flex'>
          <Link to="/" className='link__navigation'>
            <div className="header__logotype">
              <h1 className="logotype__h1">MealSearch</h1>
            </div>
          </Link>
          <Link to="/favourite">
            <div className="favourite__button">
              <div className="favourite__icon">
                <FontAwesomeIcon icon={regular('bookmark')} />
              </div>
              <div className="favourite__count">
                <p className="count__text">0</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
