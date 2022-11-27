import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import CardList from './components/Card';
import FixedBg from './components/FixedBg';

import './css/null.css';
import './css/style.css';


function App() {
  
  const [recipe, setRecipe] = useState([
    { title: '1', desc: '1', ingr: '1' },
    { title: '2', desc: '2', ingr: '2' },    
    { title: '3', desc: '3', ingr: '3' }
  ]);

  return (
    <div>
      <Header />
      <Form />

      <div className="search__result">
        <p className="result__title">
          Результаты поиска: <b>найдено 2 рецепта</b>
        </p>
        {/* 
          Здесь нужно реализовать поиск и вывод карточек с рецептами  
          По нажатию на закладку, рецепт должен отправлять в Избранное и изменить значек на залитый
        */}
        
        <CardList recipe={recipe} />
      </div>
      <FixedBg />
    </div>
  );
}

export default App;
