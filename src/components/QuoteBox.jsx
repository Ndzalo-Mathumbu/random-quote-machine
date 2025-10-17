import React from "react";
import "./QuoteBox.scss";
import $ from "jquery";
import { useState } from "react";
import privacy from "/Users/ndzalonk/random-quote-machine/src/private.js";

const QUOTEBOX = function () {
  const [quoteText, setQuoteText] = useState("");
  const [authorText, setAuthorText] = useState("");
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
  };

  const fetchQuote = async function () {
    try {
      setQuoteText("");
      setAuthorText("");
      const response = await fetch(privacy.api, {
        method: "GET",
        headers: privacy.header,
      });
      const responseData = await response.json();
      const [quoteOBJ] = responseData;
      const { quote, author } = quoteOBJ;
      setQuoteText(quote);
      setAuthorText(`~${author}`);
    } catch (error) {
      console.error(error);
      console.log("trash happend 💥");
      $(".clockwiseLoader").css("display", "none");
    }
  };

  function init() {
    setQuoteText("");
    setAuthorText("");
    generateRandomColor();
    fetchQuote();
  }
  return (
    <div className="quote-box container">
      {!quoteText ? (
        <div className="clockwiseLoader">Finding Quote</div>
      ) : (
        <p>{quoteText}</p>
      )}
      <h4>{authorText}</h4>
      <button onClick={init}>New Quote</button>
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
