import React, {useState} from 'react';
import { Link } from 'react-router-dom';

interface recipe {
  products: string[]
  title: string
  description: string
  image: string
}

function Card(props: recipe) {
  
  let products;
  if (props.products.length > 3) {
    products = props.products.slice(0,3);
    products = products.join(', ');
    products+='...';
  } else products = props.products.join(', ');
  
  return (
    <div className="card">
      <div className="card__title">{props.title}</div>
      <img className="card__image" src={props.image} alt="" />
      <ul className="card__ingredient">
        <li>{products}</li>
      </ul>
      <div className="card__desc">{props.description}</div>
      <div className="favourite">
        <label className="favourite__label">
          <input type="checkbox" name="favourite" id="favourite" className="favourite__checkbox" />
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
    return <Card 
      title={recipe.title} 
      description={recipe.description} 
      products={recipe.products} 
      image={recipe.main_img_url.startsWith('//') ? 'http:' + recipe.main_img_url : recipe.main_img_url}
    />;
  });
  return <div>{recipeList}</div>;
}

export default CardList;
