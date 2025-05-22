//Login Page

import {useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      // dummy auth check, replace with real one
      if (username === "admin" && password === "password") {

        localStorage.setItem("token", "fake-auth-token");
  
        // Redirect to /home
        navigate("/home");
      } else {
        setError("Invalid username or password");
      }
    };
    //Dummy Login, replace with real logic later
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-80"
        >
          <h2 className="text-2xl mb-4 text-center">Login</h2>
  
          {error && (
            <div className="mb-4 text-red-600 font-semibold">{error}</div>
          )}
  
          <label className="block mb-2">
            Username:
            <input
              type="text"
              className="w-full border p-2 rounded mt-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
          </label>
  
          <label className="block mb-4">
            Password:
            <input
              type="password"
              className="w-full border p-2 rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
      </div>
    );
  };
export default Login;