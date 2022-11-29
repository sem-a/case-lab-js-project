import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

function FavCard(props: any) {

  const delLocalStorage = () => {
    localStorage.removeItem(props.recipe.id);
    console.log(props.recipe.id)
    props.setDel(props.recipe.id);
  }

  return (
    <div className="card">
      <div className="card__title">{props.recipe.title}</div>
      <img className="card__image" src={require('../images/card__img.jpg')} alt="" />
      <ul className="card__ingredient flex">
        <li>помидор</li>
        <li>огурец</li>
        <li>лук</li>
        <li>масло</li>
      </ul>
      <div className="card__desc">{props.recipe.desc}</div>
      <div className="delete" onClick={delLocalStorage}>
        <FontAwesomeIcon icon={solid('trash')} />
      </div>
      <Link to="/recipe">
        <div className="button__light">Открыть</div>
      </Link>
    </div>
  );
}

function FavCardList(props: any) {
  if(props.favRecipes) {
    const favRecipeList = props.favRecipes.map((recipe: any) => {
      return <FavCard setDel={props.setDel} recipe={recipe} />;
    });
    return <div>{favRecipeList}</div>;
  } else {
    return <div></div>
  }
}

export default FavCardList;
