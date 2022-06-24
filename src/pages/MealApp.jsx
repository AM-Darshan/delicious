import React, { useState } from "react";
import MealList from "../components/MealList";
import styled from "styled-components";
function MealApp() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <MealPage>
      <section className="controls">
        <h4>Enter the Calories requirement in your Diet.</h4>
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
      
    </MealPage>
  );
}

const MealPage = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 50px;
 section{
    margin:1rem 0 1rem 2rem;
 }
 button{
    width: 25%;
    padding: 0.5rem 1rem;
    background-color: #7f21eb;
    color: #f3f3f3;
    border: none;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    border-radius:20px;
 }
 button:hover {
  background-color: #6c13d1;
  cursor: pointer;
}
 input{
    width: 180px;
    text-align: center;
    padding: 0.5rem;
    margin: 0 1rem 1rem 8rem;
 }
 h4{
  font-size: 20px;
  margin: 1rem 130px;
 }
`

export default MealApp;