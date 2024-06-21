
import React from 'react';

const ToggleBar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col p-4">
      <div className="mb-4">
        <button className="w-full py-2 px-4 mb-2 text-left">Dashboard</button>
        <button className="w-full py-2 px-4 mb-2 text-left">PCL journal</button>
        <button className="w-full py-2 px-4 mb-2 text-left">Link 3</button>
        <button className="w-full py-2 px-4 mb-2 text-left">Link 4</button>
      </div>
    </div>
  );
};

export default ToggleBar;
