import React, { useContext, useState } from "react";
import { useGlobalContext } from "./Context/MealContext";
import { Container, Row, Col } from "reactstrap";
import { ReactComponent as Like } from "./assets/like.svg";
import { ReactComponent as LikeFill } from "./assets/like-fill.svg";

export default function Meals() {
  const { meals, loading, setChoosenMeal, setFavorites, favorites } =
    useGlobalContext();
  const [likeStates, setLikeStates] = useState({});
  const handleLikeButtonClick = (id) => {
    setLikeStates((prevStates) => {
      return {
        ...prevStates,
        [id]: !prevStates[id],
      };
    });
    const likedMeal = meals.find((meal) => meal.idMeal === id);

    // Eğer yemek zaten favorilere eklenmişse, tekrar eklemeyiz
    if (!likedMeal || favorites.some((favorite) => favorite.idMeal === id)) {
      return;
    }

    // Yemeği favorilere ekle
    setFavorites((prevFavorites) => [...prevFavorites, likedMeal]);
  };

  return (
    <div>
      <Container>
        <Row xs="4" className="text-center justify-content-center">
          {loading ? (
            <button className="btn btn-primary mt-5" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Loading...</span>
            </button>
          ) : meals.length > 0 ? (
            meals.map((p, index) => {
              let { strMealThumb } = p;
              return (
                <Col key={index}>
                  <article>
                    <div className="card">
                      <img
                        src={strMealThumb}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body d-flex justify-content-between text">
                        <h5 className="card-title ms-2">{p.strMeal}</h5>
                        <div className="d-flex">
                          <button
                            onClick={() => setChoosenMeal(p)}
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            type="button"
                            className="btn btn-primary me-2"
                          >
                            Detay
                          </button>
                          <button
                            href="#"
                            onClick={() => handleLikeButtonClick(p.idMeal)}
                            className={`btn ${
                              likeStates[p.idMeal] ? "btn-white" : "btn-danger"
                            } icons`}
                          >
                            {likeStates[p.idMeal] ? <LikeFill /> : <Like />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </Col>
              );
            })
          ) : (
            <h1 className="btn btn-danger">Data gelemedi</h1>
          )}
        </Row>
      </Container>
    </div>
  );
}
