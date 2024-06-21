import React from 'react';


const Header: React.FC = () => {
  return (
    <div className="mb-0 mx-0 my-0 rounded-lg overflow-hidden">
    <div className="bg-background-blue p-6 grid grid-cols-2 gap-4 items-center h-44">
      <div className="flex items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-button-blue whitespace-nowrap">STUDENT LOGIN</h1>
          <p className="text-button-blue text-pretty">PCL Tracker</p>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <img src="/images/illustration.png" alt="Illustration" className="w-45 h-40 object-cover" />
      </div>
    </div>
  </div>

  );
}

export default Header;
