import React, { useState } from 'react'
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
function ZNavBar() {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src={require('../../images/logo.svg')} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        About
          </NavLink>
                    <NavLink to='/services' activeStyle>
                        Services
          </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Contact Us
          </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
          </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default ZNavBar



export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;


export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;