import React, { useState } from "react";

const TextFormat = () => {
  const [lowerText, setLowerText] = useState("");

  const handleInput = (event) => {
    const value = event.target.value.toLowerCase();
    setLowerText(value);
  };



  return (
    <div className="p-4 space-x-3">
      <input
        type="text"
        onInput={handleInput}
        placeholder="Type something..."
        className="border p-2 rounded focus:outline-sky-500 w-[300px]"
      />
      <span>{lowerText}</span>
       </div>
  );};

export default TextFormat;
