import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./Context/MealContext";
export default function Search() {
  const [text, setText] = useState("");
  const { setSearchTerm } = useGlobalContext();

  let changeHandler = (e) => {
    let input = e.target.value;
    setText(input.toLowerCase());

    setSearchTerm(input);
  };
  let handleSubmit = (e) => {
    e.preventDefault();

    setText("");
  };
  return (
    <div>
      <div className="d-flex justify-content-center ">
        <div className="form-outline ">
          <form onSubmit={handleSubmit}>
            <div className="row g-0 mt-1">
              <div className="col">
                <input
                  type="search"
                  id="form1"
                  className="form-control"
                  style={{ width: "300px" }}
                  onChange={changeHandler}
                  value={text}
                />
                <label className="form-label" htmlFor="form1"></label>
              </div>

              <div className="col">
                <button type="button" className="btn btn-primary ml-2 ">
                  <i className="fa fa-search mx-auto"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
