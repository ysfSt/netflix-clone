import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [show, hundleShow] = useState(false);

  useEffect(() => {


    // handle navbar bakcground 
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        hundleShow(true);
      } else {
        hundleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${show && "navbar--dark"}`}>
      <div className="logo">
        <Link to="/">
          <img
            className="logo__img"
            src={
              "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
            }
            alt="Netflix"
          />
        </Link>
      </div>
      <div className="join-signIn">
        <button className="joinButton">JOIN NOW</button>
        <button className="signInButton">SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
