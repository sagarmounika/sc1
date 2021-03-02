import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../logo.png';
import MenuIcon from '@material-ui/icons/MenuOpen';
const Navigation = ({ sideBarHandler, sideBar }) => {
  return (
    <>
      <Navbar className='navbar'>
        
        <Navbar.Brand href='https://smartcow.ai/en/' target='_blank'>
          <h2>Smart Cow</h2>
        </Navbar.Brand>
        <div className='navbar_icon'>

        <MenuIcon  onClick={sideBarHandler} />
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
