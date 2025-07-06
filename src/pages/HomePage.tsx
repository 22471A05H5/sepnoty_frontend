import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {
  Brain,
  Heart,
  Users,
  ArrowRight,
} from 'lucide-react';

const HomePage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSupportClick = () => {
    if (user) {
      navigate('/questionnaire');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-gray-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-pink-500 to-sky-500 p-2 rounded-full">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Sepnoty</h1>
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <span className="text-white hidden sm:inline">
                    Welcome, {user.email}
                  </span>
                  <button
                    onClick={logout}
                    className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-white hover:text-pink-400 font-medium transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-white hover:text-pink-400 font-medium transition"
                  >
                    Register
                  </Link>
                </>
              )}
              <button
                onClick={handleSupportClick}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg"
              >
                Get Support
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-sky-500 to-pink-500 p-4 rounded-full inline-block mb-8">
              <Brain className="w-16 h-16 text-white" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Personal AI
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                {' '}Wellness
              </span>{' '}
              Companion
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get personalized mental health recommendations powered by
              Sepnoty. Whether you need meditation guidance, social support, or
              professional help – we're here to guide your wellness journey.
            </p>

            <div className="flex justify-center">
              <button
                onClick={handleSupportClick}
                className="bg-gradient-to-r from-sky-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Find your solution</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How Sepnoty Helps You
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our Sepnoty platform provides personalized recommendations based
              on your unique situation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-shadow">
              <div className="bg-sky-500/20 p-4 rounded-full inline-block mb-6">
                <Brain className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Meditation & Mindfulness
              </h3>
              <p className="text-gray-300">
                Discover meditation practices and mindfulness techniques to
                reduce stress and improve clarity.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-shadow">
              <div className="bg-pink-500/20 p-4 rounded-full inline-block mb-6">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Social Support
              </h3>
              <p className="text-gray-300">
                Build meaningful relationships and strong support networks for
                your wellbeing.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700 hover:shadow-xl transition-shadow">
              <div className="bg-orange-500/20 p-4 rounded-full inline-block mb-6">
                <Heart className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Professional Guidance
              </h3>
              <p className="text-gray-300">
                Get matched with licensed mental health professionals who can
                help you move forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Simple Steps to Better Wellness
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="bg-gradient-to-r from-sky-500 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Answer Questions
              </h3>
              <p className="text-gray-300">
                Tell us how you're feeling through a quick questionnaire.
              </p>
            </div>

            <div>
              <div className="bg-gradient-to-r from-orange-500 to-sky-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-300">
                Sepnoty understands your emotions and mental state with care.
              </p>
            </div>

            <div>
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Get Recommendations
              </h3>
              <p className="text-gray-300">
                Receive personalized steps to improve your mental wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-300 mb-2">
            Your mental health matters. Get the support you deserve.
          </p>
          <p className="text-sm text-gray-500">© 2025 Sepnoty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
