import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? 'login' : 'signup';
    console.log(endpoint)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      if (isLogin) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert('Signup successful! Please log in.');
        setIsLogin(true);
      }
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center text-black mb-6">
          {isLogin ? 'Login' : 'Signup'}
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full mb-6 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 bg-white text-black"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full mb-6 text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 bg-white text-black"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 text-lg underline mt-4 hover:text-blue-700 bg-white transition duration-200"
        >
          {isLogin
            ? "Don't have an account? Signup"
            : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
