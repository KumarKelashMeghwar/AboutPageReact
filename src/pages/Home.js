import React from "react";

export default function Home() {
  // edison: the var ads stores the location of the ads whereas it can be searched when the var is in img src
  var ads = [
    "/assets/ads.jpg",
    "/assets/ads1.jpg",
    "/assets/ads2.jpg",
    "/assets/ads3.jpg",
    "/assets/ads4.jpg",
    "/assets/ads5.jpg",
    "/assets/ads6.jpg",
    "/assets/ads7.jpg",
    "/assets/ads8.jpg",
    "/assets/ads9.jpeg",
    "/assets/ads10.jpeg",
    "/assets/ads11.jpeg",
    "/assets/ads12.jpg",
    "/assets/ads13.jpg",
    "/assets/ads14.jpg",
    "/assets/ads15.jpeg",
  ];

  return (
    <React.Fragment>
      <noscript>You need to enable JavaScript to run this app.</noscript>

      <div className="main">
        <div className="banner">
          <a href="books">
            {/* edison: the random function in react ( or javascript ), it is used to choose random ads everytime it refreshes */}
            <img
              src={ads[Math.floor(Math.random() * ads.length)]}
              alt={ads[Math.floor(Math.random() * ads.length)]}
            />
          </a>
        </div>
        {/* edison: the content is the blacken area */}
        <div className="content">
          <h1>
            Web Design &<br />
            <span>Development</span>
            <br />
            Course
          </h1>
          <p className="par">
            Shared reading is part of a suite of practices the teacher can use
            to support the teaching of reading. It is located at the higher end
            of teacher support in the Gradual Release Model (Duke and Pearson,
            2002). Initially, the focus of the reading is on meaning and
            enjoyment. Once understanding is established, the teacher can reread
            the text to explicitly demonstrate reading strategies and engage in
            problem solving using meaning, structure and visual information.
            <br />
            <br />
            <button className="cn">
              <a href="books">Start Now!</a>
            </button>
          </p>
        </div>
        {/* edison: content2 is the whiten area */}
        <div className="content2">
          <p className="pic2"></p>
          <h2>The importance of shared reading</h2>
          <p className="par2">
            The rising cost of college textbooks has been well documented (e.g.,
            Senack & Donoghue 2016). Since the late 1970s, textbook prices have
            increased more than 1,000% (DiGangi 2015). Through the 1980s, prices
            increased three times the rate of inflation (Popken 2015), and since
            the 2000s, they surged four times inflation rates (Weisbaum 2016).
            As a result, the average undergraduate student today spends $1,200
            to $1,300 per year on textbooks and supplies. In the United States,
            this sum equates to 72% of the total tuition and fees at an average
            two-year institution, and 26% of the total tuition and fees at an
            average public four-year institution (USGAO 2005; see also USGAO
            2013).
          </p>
        </div>
        {/* edison: the form is the register form for the new users to register (undone) */}
        <div className="form">
          <h2>Register Now!</h2>

          <input type="email" name="email" placeholder="Enter Email Here" />
          <input type="password" name="pw" placeholder="Enter Password Here" />
          <input type="FN" name="FN" placeholder="First Name" />
          <input type="LN" name="LN" placeholder="Last Name" />
          <button className="btnr">
            <a href="newpage">Login</a>
          </button>
          <p className="link">
            Already have an account?
            <a href="/">Login in </a>here
          </p>

          <div className="icons">
            <a href="www.facebook.com">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="www.instagram.com">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="www.twitter.com">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="www.google.com">
              <ion-icon name="logo-google"></ion-icon>
            </a>
            <a href="www.skype.com">
              <ion-icon name="logo-skype"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    </React.Fragment>
  );
}
