import React from 'react'
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles,GiHotMeal,GiCoolSpices } from "react-icons/gi";

import styled from "styled-components";
import { NavLink } from "react-router-dom";


function Category() {
  return (
    <List>
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Indian"}>
            <GiCoolSpices />
            <h4>Indian</h4>
        </SLink>
        <SLink to={"/meal"}> 
            <GiHotMeal />
            <h4>Diet Plan</h4>
        </SLink>
    </List>
  )
}


const List = styled.div `
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const SLink = styled(NavLink)
`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 0.6rem;
  text-decoration: none;
  width: 5.5rem;
  height: 5.3rem;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: #fff;
    font-size: 0.85rem;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
    margin:5px;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
`;
export default Category