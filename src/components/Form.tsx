// ?apiKey=4915829bef914b4893e07056fe98b1e2&includeNutrition=true
import React, { useState } from 'react';

function Form(props: any) {
  
  const [searchInput, setSearchInput] = useState('');
  
  const handleButton = async (e: any) => {
    e.preventDefault();
    const dataRecipes = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchInput}&apiKey=4915829bef914b4893e07056fe98b1e2&includeNutrition=true`)
    const recipes = await dataRecipes.json();
    props.setRecipes(recipes);
  };

  return (
    <div className="main">
      <div className="container">
        <form className="search__form">
          <label>Желаемые ингредиенты:</label>
          <input type="text" id="searchMeal" className="search__meal" onChange={e => {setSearchInput(e.target.value)}} />
          <div className="select__wrapp">
            <div className="select">
              <label>Кухня:</label>
              <select name="selectKitchen" id="selectKitchen" className="select__kitchen">
                <option value="all selected">Все</option>
                <option value="eastern">Восточная кухня</option>
                <option value="home">Домашняя кухня</option>
                <option value="vegetarian">Вегетарианская кухня</option>
              </select>
            </div>
            <div className="select">
              <label>Тип блюда:</label>
              <select name="selectDish" id="selectDish" className="select__dish">
                <option value="all selected">Все</option>
                <option value="eastern">Первые блюда</option>
                <option value="home">Салаты</option>
                <option value="vegetarian">Десерты</option>
              </select>
            </div>
          </div>
          <button className="button__dark" type="submit" onClick={handleButton}>
            Найти рецепты
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
