import React from "react";
import "./QuoteBox.scss";
import $ from "jquery";
import { useState, useEffect } from "react";
import privacy from "/Users/ndzalonk/random-quote-machine/src/private.js";
import x from "/Users/ndzalonk/random-quote-machine/twitter.png";
import IG from "/Users/ndzalonk/random-quote-machine/instagram1.png";
import FB from "/Users/ndzalonk/random-quote-machine/facebook icon.f3e79ada.png";
const QUOTEBOX = function () {
  const [quoteText, setQuoteText] = useState("");
  const [authorText, setAuthorText] = useState("");
  useEffect(() => {
    init();
  }, []);
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
      alert("Trash happend 💥");
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
    <div className="quote-box container" id="quote-box">
      {!quoteText ? (
        <div className="clockwiseLoader" id="new-quote"></div>
      ) : (
        <p id="text">{`"${quoteText}"`}</p>
      )}

      <div className="authorBTN d-flex flex-column align-items-center">
        <h4 className="fs-6 fs-sm-5 fs-md-3 text-center" id="author">
          {authorText}
        </h4>
        <button className="btn w-100 w-md-auto" id="new-quote" onClick={init}>
          New Quote
        </button>
      </div>

      <div className="socials container">
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quoteText}" — ${authorText}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={x} className="img-fluid" alt="twitter" />
        </a>

        <a href="#">
          <img src={IG} className="img-fluid" alt="instagram" />
        </a>
        <a href="#">
          <img src={FB} className="img-fluid" alt="facebook" />
        </a>
      </div>
    </div>
  );
};

export default QUOTEBOX;
