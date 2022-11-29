import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Card(props: any) {
  
  const addRecipeStorage = () => {
    localStorage.setItem(props.recipe.id, JSON.stringify(props.recipe))
  }

  return (
    <div className="card">
      <div className="card__title">{props.recipe.title}</div>
      <img className="card__image" src={require('../images/card__img.jpg')} alt="" />
      <ul className="card__ingredient">
        <li>помидор</li>
        <li>огурец</li>
        <li>лук</li>
        <li>масло</li>
      </ul>
      <div className="card__desc">{props.recipe.desc}</div>
      <div className="favourite">
        <label className="favourite__label">
          <input type="checkbox" name="favourite" id="favourite" className="favourite__checkbox" onClick={addRecipeStorage} />
          <span className="checkmark"></span>
        </label>
      </div>
      <Link to="/recipe">
        <div className="button__light">Открыть</div>
      </Link>
    </div>
  );
}

function CardList(props: any) {
  const recipeList = props.recipes.map((recipe: any) => {
    return <Card recipe={recipe} />;
  });
  return <div>{recipeList}</div>;
}

export default CardList;
