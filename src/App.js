import React, { Fragment } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Books from "./pages/Books";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Form from "./src-login/src/components/Form";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

function App() {
  return (
    // edison: the router is the function that allows redirecting to the class function according to the path
    <Router>
      <div className="App">
        <Header />
        {/* edison: the header part is outside the routes is to let all routes(pages) have the header navigator, which it will be placed on top of the page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Form />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
