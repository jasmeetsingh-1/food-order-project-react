import React from "react";

import "./cssFiles/homeCss.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <div className="home-container1">
        <div className="home-hero">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY2fHxmb29kfGVufDB8fHx8MTcwMDY3MzA0MXww&amp;ixlib=rb-4.0.3&amp;h=800"
            className="home-image"
          />
          <div className="home-container2">
            <h1 className="home-text">
              <span>Welcome to </span>
              <span className="home-text2">ReactBites</span>
            </h1>
            <h2 className="home-text3">
              Take a minute to Login/Signup to have a seamless experience
            </h2>
            <div className="home-btn-group">
              <button className="home-button button">Login</button>
              <button className="home-button1 button">SignUp</button>
            </div>
            <span className="home-text4">
              <br></br>
              <span>
                At REACTBITES elevate your senses with our premium, just-in-time
                crafted meals. Our skilled chefs promise a gourmet experience
                every time—quality and freshness guaranteed. Indulge in
                excellence with us!
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
