import React, { useState } from "react";
import "../components/Books.css";
import { Bookdata } from "../components/data";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import ThreeScene from '../threejs/three-scene.js';

export default function Books() {
  //edison:sortstate - indicator for the button sorting
  const [sortState, setSortState] = useState("Sort by:");

  //edison:popup for corresponding book user clicked
  const [buttonPopup, setButtonPopup] = useState(false);
  const [content, setcontent] = useState([]);
  const changecontent = (bookname) => {
    setcontent([bookname], setButtonPopup(true));
  };

  //adam:statechanger for the basket counter
  const [basket, setBasket] = useState([]);
  const addToBasket = (Books) => {
    setBasket([...basket, Books]);
  };

  return (
    <div className="backgrd">
      <h1 class="tittling"> Category of Books : All Books</h1>
      

      

      <buttton>Go to Basket({basket.length})</buttton>
    {/* edison: the result bar and the sortbar is the line for the sort button */}
      <div className="resultbar">
        Resulting of Books :14
        <div className="sortbar">


        <a href="Checkout"><h3><buttton className="bask">    <ShoppingBasketIcon/>Basket   ( {basket.length } )</buttton></h3></a>
          <br/>
          <br/>
          <select
            className="dropdown"
            
            onChange={(e) => {
              const sortItem = e.target.value;
              setSortState(sortItem);
            }}
          >
            {/* edison: disable selected is because the default placeholder is needed whereas the original placeholder is not working */}
            <option value="" disable selected>
              Sort by:
            </option>
            <option value="yr">Published Year</option>
            <option value="$">Price</option>
            <option value="rates">Ratings</option>
          </select>
          <br />
          {sortState}
        </div>
      </div>

      <div className="filter">
        <ul className="filterchoices">
          <li>
            <small>Category</small>
          </li>
          <li>
            <small>Action and Adventure</small>
          </li>
          <li>
            <small>Classics</small>
          </li>
          <li>
            <small>Detective and Mystery</small>
          </li>
          <li>
            <small>Fantasy</small>
          </li>
          <li>
            <small>Historical</small>
          </li>
          <li>
            <small>1</small>
          </li>
          <li>
            <small>Horror</small>
          </li>
          <li>
            <small>Horror</small>
          </li>
          <li>
            <small>ygpgbqtlL</small>
          </li>
          <li>
            <small>Horror</small>
          </li>
          <li>
            <small>Horror</small>
          </li>
          <li>
            <small>Horror</small>
          </li>
          <li>
            <small>Horror</small>
          </li>
          <li>
            <small>Horror</small>
          </li>
          <li>
            <small>Horror</small>
          </li>
          <li>
            <small>Horror</small>
          </li>
        </ul>
      </div>
      {/* edison: where the books are actually printed out from the database (data.js currently) */}
      <div className="lists">
        {/* edison: the map function is to print all the datas corresponding in order */}
        {Bookdata.map((Books, idx) => {
          return (
            <div className="bookcontent" key={idx}>
              <img
                src={Books.img}
                onClick={() => changecontent(Books)}
                alt={Books.name}
              />
              {/* edison: with the changecontent(books) state when the item is clicked ,the poopup will open, showing the corresponding book */}
              <h5 onClick={() => changecontent(Books)}>{Books.name}</h5>
              <p>{Books.author}</p>
              <p className="bookprice">
                <small>$</small>
                <strong>{Books.price}</strong>
              </p>
              <button className="buy" onClick={() => changecontent(Books)}>
                Details
              </button>
              <button className="buy" onClick={() => addToBasket(Books)}>
                Add to Basket
              </button>
            </div>
          );
        })}{" "}
      </div>
      {/*this is the function of opening popup according to true n false 
      popupinside is the frame
      popup header is for close btn and location
      */}
      {buttonPopup && (
        <div className="popup">
          {content.map((pop) => {
            return (
              <div className="popupinside">
                <div className="popupheader">
                  <button
                    className="close-btn"
                    onClick={() => setButtonPopup(false)}
                  >
                    close
                  </button>
                </div>
                <div className="popuptitle">
                  <h2>{pop.name}</h2>
                  <p>{pop.author}</p>
                  <small>
                    Published by {pop.publisher} ({pop.year})
                  </small>
                </div>
                <img src={pop.img} alt="photo" />
                <div className="popupbody">
                  <span>
                    <small>$</small>
                    <strong>{pop.price}</strong>
                  </span>
                  <p>{pop.details}</p>
                  <p>ISBN-13: {pop.ISBN13}</p>
                  {/* the add to basket function is made by adam and the version*/}
                  <button className="buy" onClick={() => addToBasket(Books) & setButtonPopup(false)}>
                    Add to Basket
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

     <div>


     {/* <ThreeScene/> */}

    </div>
    



    </div>

       
    
    
    
  );
}

//export default function Books;
