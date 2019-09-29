import React from 'react';
import './App.css';

import CheckBox from './objects/Checkbox';
import About from './objects/About';
import Header from './components/Header';
import Hashtag from './components/Hashtag';

import AboutLink from './objects/AboutLink';
import IconClose from './objects/IconClose';

const  App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <CheckBox id="show" value="show" content="Mostrar Eventos"/>
    <About >
      <AboutLink className="-light" />
      <IconClose />
    </About>
  </main>
);

export default App;
