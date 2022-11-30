import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CardList from './components/Card';
import FixedBg from './components/FixedBg';

import './css/null.css';
import './css/style.css';

function App() {

  const [count, setCount] = useState<number>(localStorage.length);
  const [recipes, setRecipes] = useState([]);

  const createResultPhrase = (arg: number) => {
    // функция генерирует правильную фразу по результатам поиска
    let titles = ['рецепт', 'рецепта', 'рецептов'];
    let cases = [2, 0, 1, 1, 1, 2];
    let find = ['найдено', 'найден'];
    if (arg % 10 == 1) {
      return `${find[1]} ${arg} ${
        titles[arg % 100 > 4 && arg % 100 < 20 ? 2 : cases[Math.min(arg % 10, 5)]]
      }`;
    }
    if (arg == 0) {
      return 'ничего не найдено';
    } else {
      return `${find[0]} ${arg} ${
        titles[arg % 100 > 4 && arg % 100 < 20 ? 2 : cases[Math.min(arg % 10, 5)]]
      }`;
    }
  };
  const resultPhrase = createResultPhrase(recipes.length);

  return (
    <div>
      <Header count={count} />
      <Form setRecipes={setRecipes} />

      <div className="search__result">
        <p className="result__title">
          Результаты поиска: <b>{resultPhrase}</b>
        </p>
        {/* 
          Здесь нужно реализовать поиск и вывод карточек с рецептами  
          По нажатию на закладку, рецепт должен отправлять в Избранное и изменить значек на залитый
        */}

        <CardList setCount={setCount} recipes={recipes} />
      </div>
      <FixedBg />
    </div>
  );
}

export default App;
