import React from "react";
import "./QuoteBox.scss";
const QUOTEBOX = function () {
  return (
    <div className="quote-box container">
      <p>
        A "quote" can be the repetition of a phrase or passage from a speech or
        text, a formal price estimate from a business, or a short, memorable
        saying used for inspiration or wit. . Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Consequatur earum error, atque magnam
        tempore provident quisquam culpa ab, beatae ducimus in aliquid deleniti.
        Quis fuga id error. Quo, pariatur inventore.
      </p>
      <h4>~ Ndzalo NK Mathumbu</h4>
      <button>New Quote</button>
      <div className="socials container">
        <a href="#">
          <img src="./twitter.png" className="img-fluid" alt="twitter" />
        </a>
        <a href="#">
          <img src="./instagram.png" className="img-fluid" alt="instagram" />
        </a>
        <a href="#">
          <img
            src="./facebook icon.f3e79ada.png"
            className="img-fluid"
            alt="facebook"
          />
        </a>
      </div>
    </div>
  );
};

export default QUOTEBOX;
