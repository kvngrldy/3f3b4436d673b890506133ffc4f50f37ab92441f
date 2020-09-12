import React from 'react';
import Header from './components/Header'
import MenuCard from './components/MenuCard'



const App = () => {



  return (
    <div className="App">

      <Header></Header>
      <div className="main">
        <div className="date-now">
          Kamis, 10 September 2020
        </div>
        <div className="menu">
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>

    </div>
  );
}

export default App;
