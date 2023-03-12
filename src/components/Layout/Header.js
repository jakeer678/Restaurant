import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/0d/58/95/fa/delicious-food.jpg"
          alt="deliciou-food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
