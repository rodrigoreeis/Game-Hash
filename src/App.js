import React from 'react';
import './App.css';

import CheckBox from './objects/Checkbox';
import About from './objects/About';
import Header from './components/Header';
import Hashtag from './components/Hashtag';

import RodrigoPhoto from './img/rodrigo.jpeg';

const  App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <CheckBox id="show" value="show" content="Mostrar Eventos"/>
    <About 
      name="Rodrigo Reis" 
      description="Desenvolvedor Front-end com sólida experiência em e-commerce. Fascinado por VanillaJS. Expert em acessibilidade e entusiasta UX/UI."
      img={RodrigoPhoto}
    />
  </main>
);

export default App;
