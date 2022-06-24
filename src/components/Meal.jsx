import React, { useState, useEffect } from "react";
import styled from "styled-components";
export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <MealDetail>
      <article>
        <h1>{meal.title}</h1>
        <img src={imageUrl} alt="recipe" />
        <ul className="instructions">
          <li><b>Preparation time</b>: {meal.readyInMinutes} minutes</li>
          <li><b>Number of servings</b>: {meal.servings}</li>
        </ul>

        <a href={meal.sourceUrl}>Go to Recipe</a>
      </article>
    </MealDetail>
  );
}

const MealDetail = styled.div`
img {
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 15px;
}

article {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  margin: 0 1rem;
  max-width: 300px;
  box-shadow: 0 4px 8px 2px rgba(77, 77, 77, 0.15);
}

ul {
  list-style: none;
}
li{
  padding: 5px 0;
}
.instructions {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  background-color: #7f21eb;
  color: #f3f3f3;
  width: fit-content;
  padding: 0.5rem 1rem;
}

a:hover {
  background-color: #6c13d1;
  cursor: pointer;
}
`