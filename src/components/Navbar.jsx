import React from 'react'
import styled from "styled-components";
import {Link } from "react-router-dom";
import Search from "./Search";
import { GiKnifeFork } from "react-icons/gi";
const Navbar = () => {
  return (
    <div>
            <Nav>
                <GiKnifeFork />
                <Logo to={"/"}>delicious</Logo>
                <Search />
            </Nav>
         
    </div>
  )
  
}
const Nav = styled.div `
  padding: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)
`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
export default Navbar