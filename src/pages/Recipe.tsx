import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Header from '../components/Header';

function Recipe() {
  return (
    <div>
      <Header />
      <div className="recipe">
        <div className="container">
          <Link to="/">
            <div className="link__home">
              <FontAwesomeIcon icon={solid("chevron-left")} />
              <p>Вернуться к поиску</p>
            </div>
          </Link>
          <div className="recipe__title">
            <h2 className="recipe__h2">Салат летний</h2>
          </div>
          <div className="recipe__flex">
            <div className="recipe__img">
              <img src={require('../images/card__img.jpg')} alt="cardImg" />
            </div>
            <div className="recipe__ingredient">
              <div className="ingredient__title">
                <p>Ингредиенты:</p>
              </div>
              <ul className="ingredient__list">
                <li className="ingredient__item">Помидоры 3-4 шт.</li>
                <li className="ingredient__item">Огурцы 3-4 шт.</li>
                <li className="ingredient__item">Репчатый лук 1 шт.</li>
                <li className="ingredient__item">Растительное масло</li>
              </ul>
            </div>
          </div>
          <div className="recipe__algoritm">
              <div className="algoritm__title">
                <p>Рецепт:</p>
              </div>
              <ul className="algoritm__list">
                <li className="algoritm__item">Берем вымытые помидоры и нарезаем их.</li>
                <li className="algoritm__item">Берем вымытые помидоры и нарезаем их.</li>
                <li className="algoritm__item">Берем вымытые помидоры и нарезаем их.</li>
                <li className="algoritm__item">Берем вымытые помидоры и нарезаем их.</li>
                <li className="algoritm__item">Берем вымытые помидоры и нарезаем их.</li>
                <li className="algoritm__item">Берем вымытые помидоры и нарезаем их.</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
