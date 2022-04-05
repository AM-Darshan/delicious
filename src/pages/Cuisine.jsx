import React , {useEffect,useState}from 'react'
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Cuisine() {

  const [cuisine,setCuisine] = useState([]);

  const params = useParams();
    useEffect(()=>{
      getCusisine(params.type);
      // console.log(params.type);
    },[params.type])

  const getCusisine = async (name) =>{

      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`)
      const recipes = await data.json()
      setCuisine(recipes.results)
  }

  
  return (
    <Grid>
      {cuisine.map((items)=>{
        return(
          <Card key={items.id}>
             <img src={items.image} alt={items.title} />
             <h4>{items.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}


const Grid = styled(motion.div)`
  display: grid;
  grid-template: auto / auto auto auto; 
  grid-template-columns: repeat(auto-fit,minmax(15rem, 1fr));
  text-align: center;
  grid-gap: 2rem;
`;

const Card = styled.div`
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

export default Cuisine