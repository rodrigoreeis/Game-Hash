import React, { useState } from 'react';
import './App.css';

import CheckBoxEvent from './objects/CheckboxEvent';
import AboutUser from './objects/AboutUser';

import HeaderMain from './components/HeaderMain';
import HashGame from './components/HashGame';
import HeaderInternal from './components/HeaderInternal';
import ProfileUser from './components/ProfileUser';

const  App = () => {
  const [activeAbout, setActiveAbout] = useState("")

  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main className="app">
      <HeaderMain onClick={handleClickAdd} />
      <HashGame />
      <CheckBoxEvent id="show" value="show" content="Mostrar Eventos"/>
      <AboutUser className={activeAbout}>
        <HeaderInternal onClick={handleClickRemove}/>
        <ProfileUser />
      </AboutUser>
    </main>
  );
}

export default App;