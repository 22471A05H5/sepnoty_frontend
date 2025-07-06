import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Brain, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post('https://sepnoty-backend.onrender.com/register', {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        alert('Registration successful! Please log in.');
        navigate('/login');
      } else {
        setError(response.data.message || 'Registration failed');
      }
    } catch (err: any) {
      console.error("Registration error:", err);
      const backendError = err.response?.data;
      if (backendError?.detail) {
        setError(backendError.detail);
      } else if (backendError?.message) {
        setError(backendError.message);
      } else {
        setError('Registration failed. Try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-sky-500 p-4 rounded-full inline-block mb-6">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-300">Join the Sepnoty community</p>
        </div>

        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <form onSubmit={handleRegister} className="space-y-6">
            {error && <div className="text-red-400 text-sm">{error}</div>}
            <div>
              <label htmlFor="email" className="text-sm text-gray-300 mb-2 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-600 bg-gray-800 rounded-xl text-white"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="text-sm text-gray-300 mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border-2 border-gray-600 bg-gray-800 rounded-xl text-white"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-sky-500 text-white py-3 rounded-xl font-semibold"
            >
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>
          <div className="mt-6 text-center text-gray-300">
            Already have an account?{' '}
            <Link to="/login" className="text-pink-400">Sign in here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
