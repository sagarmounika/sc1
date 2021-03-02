import React, { useState } from 'react';
import Navigation from './Components/Navigation';
import Body from './Components/Body';

import './App.css';

function App() {
  const [sideBar, setSideBar] = useState(false);
  const sideBarHandler = () => {
    setSideBar(sideBar ? false : true)
  };
  return (
    <div className='App'>
      <Navigation sidebar={sideBar} sideBarHandler={sideBarHandler} />
      <Body sideBar={sideBar} />
    </div>
  );
}

export default App;
