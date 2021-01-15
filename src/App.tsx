import React from 'react';
import {GlobalStyle} from './styles/globalStyles'
import Header from './components/header/Header'
import LandingPromo from './components/header/LandingPromo';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header/>
        <LandingPromo/>
      </div>
    </>
  );
}

export default App;
