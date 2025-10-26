import { useState } from "react";

const Calculator = () => {
  const [price, setPrice] = useState(0);
  const [rate, setRate] = useState(0);
  const [result, setResult] = useState(0);

  const priceCalculate = () => {
    if (rate === 0) {
      alert("Rate cannot be zero!");
      return;
    }
    const cal = (price / rate).toFixed(2);
    setResult(cal);
  };

  return (
    <div className="p-4 space-y-3">
      <input
        type="number"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
        className="border border-orange-500 text-center focus:outline-orange-600 p-1 rounded"
      />
      <input
        type="number"
        placeholder="Enter rate"
        value={rate}
        onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
        className="border border-orange-500 text-center focus:outline-orange-600 p-1 rounded ml-2"
      />
      <button
        onClick={priceCalculate}
        className="bg-sky-600 p-2 rounded text-white ml-2"
      >
        Calculate
      </button>

      <div className="mt-2 text-lg">
        Result: <span className="font-bold">{result}</span>
      </div>
    </div>
  );
};

export default Calculator;
