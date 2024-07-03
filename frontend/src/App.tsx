import React from 'react';
import './index.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="flex items-center justify-center bg-background-blue-light h-screen rounded-md">
        <div className='w-4/12 h-4/12 items-center flex-row bg-background-blue'>
          <div className='bg-white'> 
            console.log("this is app")
            <Header />
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/about" element={<Dashboard />} />
            </Routes>
            </ Browser
          </div>
      </div>
    </div>
  );
}

export default App;
