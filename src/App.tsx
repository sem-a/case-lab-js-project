import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/Card';
import FixedBg from './components/FixedBg';

import './css/null.css';
import './css/style.css';

function App() {
  return (
    <div>
      <Header />
      <Form />

      <div className="search__result">
        <p className="result__title">
          Результаты поиска: <b>найдено 2 рецепта</b>
        </p>
        <Card />
      </div>
      <FixedBg />
    </div>
  );
}

export default App;
