import React, { useState } from "react";
import DateTime2 from "./Time2";

function Counter() {
  const [content, setContent] = useState();
  const [price, setPrice] = useState();
  const setFormattedContent = (text) => {
    setContent(text);
  };
  function handleClick(event) {
    let number = event.target.value;
    setPrice(number);
    console.log(number);
  }
  return (
    <div className="container">
      <h1>Please enter a price for one character</h1>
      <input
        className="input"
        onChange={handleClick}
        type="number"
        placeholder="Type a number..."
      />
      <h2>Please enter a price for one character</h2>
      <textarea
        className="area"
        placeholder="Here you can write"
        onChange={(event) => setFormattedContent(event.target.value)}
        value={content}
      />
      <p className="counter">
        Price: {!content ? 0 : content.length * price} грн
      </p>
      <DateTime2 length={!content ? 0 : content.length} />
    </div>
  );
}
export default Counter;
