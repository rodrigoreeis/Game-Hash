import React from 'react';
import './App.css';

import CheckBox from './objects/Checkbox';
import Header from './components/Header';
import Hashtag from './components/Hashtag';

const  App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <CheckBox id="show" value="show" content="Mostrar Eventos"/>
  </main>
);

export default App;
