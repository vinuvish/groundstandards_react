import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

function ZNavBar() {


    const navLinks = [
        { title: `about us`, path: `/aboutUs` },
        { title: `sign up!`, path: `/signUp` },
        { title: `our solution`, path: `/ourSolution` },
        { title: `our partners`, path: `/ourPartner` },
        { title: `rsources`, path: `/resource` },
        { title: `press`, path: `/press` },
        { title: `blog`, path: `/blog` },
        { title: `contact`, path: `/contact` },

    ]
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <img src={'http://groundstandards.com/wp-content/uploads/GS-logo-300.png'} alt='logo' />
                </NavLink>
                <Bars />

                <NavMenu>

                    {navLinks.map(({ title, path }) => (
                        <NavLink to={path} >
                            {title.toUpperCase()}
                        </NavLink>
                    ))}

                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>

            </Nav>
        </>
    );
}

export default ZNavBar

export const Nav = styled.nav`
  background: white;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: black;
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

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;