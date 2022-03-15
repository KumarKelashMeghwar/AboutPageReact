import React, { useState, useEffect, useRef } from "react";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { SportsBasketball } from "@material-ui/icons";
import Books from "./Books";

export default function Header() {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="icon">
          <a href="/">
            <img src="assets/logo.png" />
            {/* <h2 className="logo">BookHub</h2> */}
          </a>
        </div>

        <div className="menu">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="about">ABOUT</a>
            </li>
            <li>
              <a href="books">BOOKS</a>
            </li>
            <li>
              <a href="contact">CONTACT</a>
            </li>
            <li>
              <a href="login">LOGIN</a>
            </li>
          </ul>
        </div>

        <div className="search">
          <input
            className="typein"
            type="text"
            name=""
            placeholder="search for books now!"
          />
          <a href="books">
            <button className="btns">Search</button>
          </a>

          <a href="checkout" className="buyingg" onClick={() => Books}>
            <ShoppingBasketIcon className="basketicon" />
            <span className="headerbasketCount"></span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
