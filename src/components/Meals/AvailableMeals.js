import { useState } from "react";
import classes from "./cssFiles/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import content from "./MealsData";
import "./cssFiles/MealsNavbarCss.css";

function AvailableMeals() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div>
      {/* <Card className={classes["menu-card"]}> */}
      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Soup (20)
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            Sandwich/Burger/Wraps (9)
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            Pizza (11)
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Bowls (12)
          </button>
          <button
            className={activeContentIndex === 4 ? "active" : ""}
            onClick={() => setActiveContentIndex(4)}
          >
            Desserts (5)
          </button>
        </menu>
      </div>
      {/* </Card> */}
      <Card>
        <section className={classes.meals}>
          <ul>
            {content[activeContentIndex].map((meal, index) => (
              <li key={index}>
                <MealItem
                  id={meal.id}
                  key={meal.id}
                  name={meal.name}
                  description={meal.description}
                  price={meal.price}
                />
              </li>
            ))}
          </ul>
        </section>
      </Card>
    </div>
  );
}

export default AvailableMeals;
