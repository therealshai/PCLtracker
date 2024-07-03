import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <div className="flex items-center justify-center bg-background-blue-light h-screen rounded-md">
        <div className='w-4/12 h-4/12 items-center flex-row bg-background-blue'>
          <div className='bg-white'> 
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
