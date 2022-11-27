import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

function FavouriteCard(porps: any) {
  return (
    <div className="card">
      <div className="card__title">{porps.title}</div>
      <img className="card__image" src={require('../images/card__img.jpg')} alt="" />
      <ul className="card__ingredient flex">
        <li>помидор</li>
        <li>огурец</li>
        <li>лук</li>
        <li>масло</li>
      </ul>
      <div className="card__desc">{porps.desc}</div>
      <div className="delete">
        <FontAwesomeIcon icon={solid('trash')} />
      </div>
      <Link to="/recipe">
        <div className="button__light">Открыть</div>
      </Link>
    </div>
  );
}


function FavouriteCardList(props: any) {
  const recipeList = props.recipe.map((recipe: any) => {
    return <FavouriteCard title={recipe.title} desc={recipe.desc} />;
  });
  return <div>{recipeList}</div>;
}

export default FavouriteCardList;
