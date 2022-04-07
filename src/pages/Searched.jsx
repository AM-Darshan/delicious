import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from "framer-motion";


function Searched() {
    const [serachRecipes,setSearchedRecipes] = useState([]);
    
    let params = useParams();
    useEffect(()=>{
      getSearched(params.search);
    },[params.search])

    const getSearched = async (name) => {
     const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=9`)
     const recipes = await data.json()
     setSearchedRecipes(recipes.results)
   }
  return (
    <Grid>
      {serachRecipes.map((items)=>{
        return(
          <Card key={items.id}>
            <Link to={'/recipe/' + items.id}>
                 <img src={items.image} alt={items.title} />
                  <h4>{items.title}</h4>
            </Link>
            
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled(motion.div)
`
  display: grid;
  grid-template: auto / auto auto auto; 
  grid-template-columns: repeat(auto-fit,minmax(15rem, 1fr));
  text-align: center;
  grid-gap: 2rem;
`;

const Card = styled.div `
  img {
    width: min(400px, 100%);
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;


export default Searched