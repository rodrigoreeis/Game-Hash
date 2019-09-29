import React from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Label from './objects/Label';
import Input from './objects/Input';

const  App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Input id="show" value="show" content="Mostrar Eventos"/>
  </main>
);

export default App;
