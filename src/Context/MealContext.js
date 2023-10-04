import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(); // createContext fonksiyonunu çağırın

const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [choosenMeal, setChoosenMeal] = useState({});
  const allMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";
  async function fetchMeal(url) {
    const response = await fetch(url);
    const data = await response.json();
    if (data.meals) {
      setMeals(data.meals);
      setLoading(false);
    } else {
      setMeals([]);
    }

    return data.meals;
  }

  useEffect(() => {
    fetchMeal(allMeal + searchTerm);
  }, [searchTerm]);
  const values = {
    meals,
    loading,
    choosenMeal,
    favorites,
    setSearchTerm,
    setChoosenMeal,
    setFavorites,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { useGlobalContext, AppProvider };
