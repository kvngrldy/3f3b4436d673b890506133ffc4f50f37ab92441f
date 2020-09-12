import React, { useState } from 'react';
import Header from './components/Header'
import MenuCard from './components/MenuCard'



const App = () => {
  


  return (
    <div className="App">
        
      <Header></Header>
      <div className="main">
        <div className="date-now">
          <strong>Kamis, 13 Maret 2019</strong>
        </div>
        <div className="menu">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
        <div>

        </div>
      </div>
      
    </div>
  );
}

export default App;
