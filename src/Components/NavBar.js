import React from 'react';
import {
  Nav,
  NavLink,
  // Bars,
  HomeIcon,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarElements';
import SideBar from './SideBar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        { /* <img src='https://compassionate-babbage-604936.netlify.app/static/media/image.d7265326.png' alt=' ' /> */}
        <HomeIcon />
        </NavLink>
        <SideBar />
        <NavMenu>
          <NavLink to='/tracker' activeStyle>
            Tracker
          </NavLink>
          <NavLink to='/charts' activeStyle>
            Charts
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/contact-me'>Contact</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;