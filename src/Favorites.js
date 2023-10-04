import React from "react";
import { ReactComponent as Like } from "./assets/like.svg";
import { useGlobalContext } from "./Context/MealContext";

export default function Favorites() {
  const { favorites } = useGlobalContext();
  return (
    <div className="favorites">
      <div className="favorites-content">
        <h5>Favorites:</h5>
        <div className="row justify-content-center">
          {favorites.map((p, index) => (
            <div className="favorite-item col " key={index}>
              <img
                src={p.strMealThumb}
                className="rounded-circle favorites-img"
              ></img>
              <h4>
                {p.strMeal}
                <button className="remove-btn btn btn-danger align-self-center ms-3 p-1">
                  X
                </button>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
