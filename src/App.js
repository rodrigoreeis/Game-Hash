import React from 'react';
import './App.css';

import CheckBox from './objects/Checkbox';
import About from './objects/About';

import Header from './components/Header';
import Hashtag from './components/Hashtag';
import HeaderInternal from './components/HeaderInternal';


const  App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <CheckBox id="show" value="show" content="Mostrar Eventos"/>
    <About >
      <HeaderInternal />
    </About>
  </main>
);

export default App;
