import { useState, useRef } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const buttonRef = useRef(null);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = (value: number) => {
    setCount(value);
    setShowMenu(false);
  };

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Count: {count}</h2>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded relative"
        onClick={incrementCount}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={buttonRef}
      >
        Increment
        {showMenu && (
          <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <button 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => resetCount(0)}
              >
                Reset to 0
              </button>
              <button 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => resetCount(100)}
              >
                Reset to 100
              </button>
            </div>
          </div>
        )}
      </button>
    </div>
  );
};

export default Counter;