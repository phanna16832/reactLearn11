import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
    if(count <= 0) {
        setCount(0);
    }
};
  return (
    <div>
      <button 
      onClick={decrement}
      className="bg-sky-500 w-[24px] h-[24px] rounded cursor-pointer mr-2">
        -
        </button>
      <input type="number" readOnly value={count} className="border border-sky-500 focus:outline-sky-500 w-[46px] text-center text-sky-500 font-semibold" />
      <button 
      onClick={() => setCount(count + 1)}
      className="bg-sky-500 w-[24px] h-[24px] rounded cursor-pointer ml-2 "
      >
        +
        </button>
      <button 
      onClick={() => setCount(0)}
      className="bg-sky-500 w-[64px] h-[24px] rounded cursor-pointer ml-4 text-white"
      >
        Reset
        </button>
    </div>
  );
};

export default Counter;
