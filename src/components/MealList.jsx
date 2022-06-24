import React from "react";
import Meal from "./Meal";
import styled from "styled-components";
export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <MealMain>
    <main>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>

      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
    </MealMain>
  );
}

const MealMain = styled.main`
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.nutrients ul {
  display: flex;
  width: 35rem;
  justify-content: space-evenly;
}

.meals {
  display: flex;
}
`
