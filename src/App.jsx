import React from "react";
import QUOTEBOX from "./components/QuoteBox";
import CopyRight from "./components/CopyRight.jsx";

import PAGETITLE from "/Users/ndzalonk/random-quote-machine/src/components/PageTitle.jsx";
import "./components/QuoteBox.scss";
/* 
App.jsx Structure Plan:

1. A place to DISPLAY the quote text
2. A place to DISPLAY the author
3. A BUTTON that says "New Quote"
 */

function App() {
  return (
    <>
      <PAGETITLE />
      <CopyRight />
      <div className="app-bg">
        <QUOTEBOX />
      </div>
    </>
  );
}

export default App;
