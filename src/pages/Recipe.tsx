import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Header from '../components/Header';

function IngredientList(props: any) {
  let i = 0;
  const ingredientList = props.products.map((item: string) => {
    i = i + 1;
    return (
      <li key={i} className="ingredient__item">{item}</li>
    );
  });
  return <div>{ingredientList}</div>;
};
function Steps(props: any) {
  let i = 0;
  const stepList = props.steps.map((item: {image_url: string, text: string}) => {
    i = i + 1
    return (
      <li key={i} className="algoritm__item">
        <p>{item.text}</p>
      </li>
    );
  });
  return <div>{stepList}</div>;
};

function Recipe() {
  
  let location = useLocation();
  const countStorage = localStorage.length
  const [count, setCount] = useState<number>(countStorage);

  const handleButton = () => {
    localStorage.setItem(location.state.id, JSON.stringify({
      id: location.state.id,
      title: location.state.title,
      description: location.state.description,
      products: location.state.products,
      image: location.state.image,
      steps: location.state.steps,
    }));
    setCount(localStorage.length);
  }

  return (
    <div>
      <Header count={count} />
      <div className="recipe">
        <div className="container">
          <Link to="/">
            <div className="link__home">
              <FontAwesomeIcon icon={solid("chevron-left")} />
              <p>Вернуться к поиску</p>
            </div>
          </Link>
          <div className="recipe__title">
            <h2 className="recipe__h2">{location.state.title}</h2>
          </div>
          <div className="recipe__flex">
            <div className="recipe__img">
              <img src={location.state.image} alt="cardImg" />
            </div>
            <div className="recipe__ingredient">
              <div className="ingredient__title">
                <p>Ингредиенты:</p>
              </div>
              <ul className="ingredient__list">
                <IngredientList products={location.state.products} />
                <div className="button__dark" onClick={handleButton}>В избранное</div>
              </ul>
            </div>
          </div>
          <div className="recipe__algoritm">
              <div className="algoritm__title">
                <p>Рецепт:</p>
              </div>
              <ul className="algoritm__list">
                <Steps steps={location.state.steps}/>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
