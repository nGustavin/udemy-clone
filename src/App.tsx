import React from 'react';
import {GlobalStyle} from './styles/globalStyles'
import Header from './components/header'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header/>
      </div>
    </>
  );
}

export default App;
