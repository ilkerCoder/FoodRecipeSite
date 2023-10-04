import React from "react";
import Meals from "./Meals";
import Search from "./search";
import { Routes, Route } from "react-router-dom";
import Modals from "./Modals";
import Favorites from "./Favorites";
export default function App() {
  return (
    <div>
      <Search></Search>
      <Favorites></Favorites>
      <Meals></Meals>
      <Modals></Modals>
    </div>
  );
}
