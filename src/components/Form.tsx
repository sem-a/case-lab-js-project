import React from 'react';

function Form() {
  return (
    <div className="main">
      <div className="container">
        <form className="search__form">
          <label>Желаемые ингредиенты:</label>
          <input type="search" id="searchMeal" className="search__meal" />
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
          <button className="button__dark" type="submit">
            Найти рецепты
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
