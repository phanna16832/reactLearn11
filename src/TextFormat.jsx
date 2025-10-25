import React, { useState } from "react";

const TextFormat = () => {
  const [lowerText, setLowerText] = useState("");

  const handleInput = (event) => {
    const value = event.target.value.toLowerCase();
    setLowerText(value);
  };

  const [id,setId] = useState("");
  const findId = (event) =>{
    
  } 


  return (
    <div className="p-4">
      <input
        type="text"
        onInput={handleInput}
        placeholder="Type something..."
        className="border p-2 rounded"
      />
      <span className="ml-3">{lowerText}</span>
    </div>
  );
};

export default TextFormat;
