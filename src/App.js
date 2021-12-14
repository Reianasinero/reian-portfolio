import Title from './Title.js';
import Header from './Header.js';
import React from 'react';
import './App.css';
import Bio from './Bio.js';

function App() {
  return (
    <div className="App">
      <Header />
        <div className="Container">
          <Title />
	  <Bio />
        </div>
    </div>
  )
}

export default App;
