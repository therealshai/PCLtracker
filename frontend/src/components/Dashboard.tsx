import React from 'react';
import ToggleBar from './ToggleBar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <ToggleBar />
      console.log("this is dash");
    </div>
  );
};

export default Dashboard;
