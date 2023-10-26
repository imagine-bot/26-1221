import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Count: {count}</h2>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={incrementCount}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;