import React from "react";
import { Link } from 'react-router-dom'
import "./MainPage.css"

const MainPage = () => {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide pt-5">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={require("../img/image1.jpg")}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block ">
              <h5>Welcome to Our Site</h5>
              <p>
                <Link to="/signin">More Info</Link>
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={require("../img/image2.jpg")}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Continue in our site</h5>
              <p>
                <Link to="/signup">More Info</Link>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require("../img/image3.jpg")}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>know more about our site</h5>
              <p>
                <Link to="/about">More Info</Link>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </>
  );
};

export default MainPage;
