import React from 'react';
import Main from './Main';
import SideBar from './SideBar';
const Body = ({ sideBar }) => {
  return (
    <div className='body'>
      {sideBar && <SideBar />}
      <Main sideBar={sideBar}/>
    </div>
  );
};

export default Body;
