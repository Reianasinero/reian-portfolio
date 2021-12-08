import Title from './Title.js';
import Header from './Header.js';
import React from 'react';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
        <div className="Container">
          <Title />
        </div>
    </div>
  )
}

export default App;
