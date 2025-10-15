import React from "react";
import "./QuoteBox.scss";
import $ from "jquery";

const QUOTEBOX = function () {
  const generateRandomColor = () => {
    const color1 = Math.floor(Math.random() * 255);
    const color2 = Math.floor(Math.random() * 255);
    const color3 = Math.floor(Math.random() * 255);
    const rgbNum1 = `rgb(${color1}, ${color2}, ${color3})`;
    const pickLowestNumber = Math.min(color1, color2, color3);
    const pickHighestNumber = Math.max(color1, color2, color3);
    const genRandomNumBetweenPickLowestPickHighest =
      Math.floor(Math.random() * (pickHighestNumber - pickLowestNumber + 1)) +
      pickLowestNumber;

    const rgbNum2 = `rgb(${pickLowestNumber}, ${pickHighestNumber}, ${genRandomNumBetweenPickLowestPickHighest})`;
    // const b = Math.max(color1, 0, 255);
    $("html").css("--blue-primary", rgbNum1);
    $("html").css("--back-primary", rgbNum2);
    console.log(rgbNum1, rgbNum2);
  };

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
      <button onClick={generateRandomColor}>New Quote</button>
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
