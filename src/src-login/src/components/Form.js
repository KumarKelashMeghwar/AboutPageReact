import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../../components/Books.css";

const Form = () => {
  return (
    <div className="backgrd">
      <h2>
        <strong>Login Page</strong>
      </h2>
      <div className="form">
        <div className="form-body">
          <label className="label">Enter your username:</label>
          <br />
        </div>
        <div className="form-body">
          <input type="text" id="uName" name="uName" placeholder="Username" />
          <br />
        </div>
        <div className="form-body">
          <label className="label">Enter your password:</label>
          <br />
        </div>
        <div className="form-body">
          <input
            type="password"
            id="pWord"
            name="pWord"
            placeholder="Password"
          />
          <br />
        </div>
        <div className="form-body">
          <Link to="/" className="form-link">
            Forgot Password?
          </Link>
          <br />
        </div>
        <div className="form-body">
          <a href="/">
          <input type="submit" value="Login" /></a>
        </div>
      </div>
    </div>
  );
};

export default Form;
