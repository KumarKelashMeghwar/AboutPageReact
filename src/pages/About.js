import React from "react";
import "../components/Books.css";

function About() {
  return (
    <>
      <div className="aboutpage">
        {/* Header section  */}
        <div className="header">
          <div className="header-content">
            <h1>Who are we?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur perspiciatis sapiente ipsum quibusdam in dignissimos
              eligendi, soluta error.
            </p>
            <div className="social-icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-solid fa-globe"></i>
            </div>
          </div>
        </div>
        {/* Our vision section */}
        <div className="our-vision">
          <div className="vision-content">
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident, amet porro. Aspernatur perspiciatis voluptatibus, quia
              placeat totam illo numquam! Suscipit recusandae placeat quo, neque
              id tempore aliquid magni doloribus sequi tenetur magnam. Sunt, ea
              fugit.
            </p>
          </div>
        </div>
        {/* Our goal section */}
        <div className="our-goal">
          <div className="goal-content">
            <h2>Our Goal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, dignissimos possimus sequi id vel asperiores hic
              mollitia modi reiciendis laborum nesciunt aspernatur, architecto
              animi. Corrupti et repudiandae sint, fugiat veritatis optio quos,
              exercitationem voluptatibus nam libero neque magni nemo expedita!
              Ex quis facere reiciendis reprehenderit. Numquam quis, dolorem
              reiciendis atque cum provident odio necessitatibus dolores
              voluptatem delectus molestias inventore cupiditate?
            </p>
          </div>
        </div>
        {/* Maps */}

        <div className="map-section">
          <div className="map map1 delhi"></div>
          <div className="map map2 nehru-library"></div>
          <div className="map map3 parliament-library"></div>
        </div>
      </div>
    </>
  );
}

export default About;
