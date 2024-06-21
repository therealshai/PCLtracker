import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <div className="p-6">
      <form>
        <div className="mb-4">
          <label htmlFor="Student USN" className="block text-gray-700">Student Code</label>
          <input type="text" id="studentCode" placeholder="Enter Student USM" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" placeholder="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">LOG IN</button>
        <div className="mt-4 text-center">
          <a href="#" className="text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
