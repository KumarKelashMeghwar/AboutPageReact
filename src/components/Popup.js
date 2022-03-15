/* original js
NOTE from edison : this is the failed attempt of performing popup in another class but failed because too much render will be casted on the same page 
import React from "react";
import "./Popup.css";
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="pop-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        <h2>{props.name}</h2>
        <img src={pop.img} alt="photo" />
        <p>{pop.author}</p>
        <small>Published by {pop.publisher}</small>
        <p>
          <small>$</small>
          <strong>{pop.price}</strong>
        </p>
        <p>{pop.details}</p>
        <br />
        <p>ISBN-13: {pop.isbn13}</p>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;


/* original css
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.pop-inner {
  position: relative;
  padding: 32px;
  width: 100%;
  height: 95%;
  max-width: 900px;
  margin-top: 50px;
  background-color: white;
}

.pop-inner.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
}

attempting to use React- Select but failed
import React from "react";
import Select from "react-select";
const hey = [
  { value: "vanilla", label: "Chocolate" },
  { value: "vanilla", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const MyComponent = () => <Select placeholder="working" options={hey} />;

export default MyComponent;

*/
