import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline,
  Marker,
} from "react-google-maps";
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

        <div className="map-section" style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "5%" }}>
            <iframe
              width="100%"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616025.299740597!2d72.44018365574065!3d27.739671776682602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0f98160721%3A0xdcb7028a3f37c185!2sDelhi%20Public%20Library!5e0!3m2!1sen!2s!4v1647353697829!5m2!1sen!2s"
            >
              <a href="https://www.gps.ie/marine-gps/">boat tracking</a>
            </iframe>
            <h1 style={{ fontSize: 20, color: "#fff" }}>
              Delhi- Public Library
            </h1>
          </div>
          <div style={{ flex: 1, padding: "5%" }}>
            <iframe
              width="100%"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9044019278776!2d77.19658191519905!3d28.602644592183502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a11546d1d9%3A0x27b4ffb8f1e8cd6d!2sNehru%20Memorial%20Museum%20%26%20Library!5e0!3m2!1sen!2s!4v1647353781930!5m2!1sen!2s"
            >
              <a href="https://www.gps.ie/marine-gps/">boat tracking</a>
            </iframe>
            <h1 style={{ fontSize: 20, color: "#fff" }}>
              Nehru Memorial Museum and Library
            </h1>
          </div>
          <div style={{ flex: 1, padding: "5%" }}>
            <iframe
              width="100%"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3667681356183!2d77.20504961519931!3d28.61876779145444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b2688071bf%3A0xb363ad53093dcd83!2sParliament%20Library!5e0!3m2!1sen!2s!4v1647353821369!5m2!1sen!2s"
            >
              <a href="https://www.gps.ie/marine-gps/">boat tracking</a>
            </iframe>
            <h1 style={{ fontSize: 20, color: "#fff" }}>
              Parliament Library of India
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
