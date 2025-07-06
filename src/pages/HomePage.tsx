import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, Users, ArrowRight, Shield, Clock, Award, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
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
            
            <Link
              to="/questionnaire"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 shadow-lg"
            >
             Get Support
            </Link>
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
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"> Wellness</span> Companion
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get personalized mental health recommendations powered by Sepnoty. Whether you need meditation guidance, 
              social support, or professional help - we're here to guide your wellness journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/questionnaire"
                className="bg-gradient-to-r from-sky-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Find your solution</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
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
              Our Sepnoty platform provides personalized recommendations based on your unique situation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div className="bg-sky-500/20 p-4 rounded-full inline-block mb-6">
                <Brain className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Meditation & Mindfulness</h3>
              <p className="text-gray-300 leading-relaxed">
                Discover personalized meditation practices and mindfulness techniques to help you find inner peace, 
                reduce stress, and improve your mental clarity.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div className="bg-pink-500/20 p-4 rounded-full inline-block mb-6">
                <Users className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Social Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Learn how to build meaningful connections, communicate effectively with friends and family, 
                and create a strong support network for your wellbeing.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div className="bg-orange-500/20 p-4 rounded-full inline-block mb-6">
                <Heart className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Guidance</h3>
              <p className="text-gray-300 leading-relaxed">
                When you need professional support, we'll guide you toward qualified mental health professionals 
                and help you understand your options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple Steps to Better Wellness
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our streamlined process makes it easy to get the support you need
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-sky-500 to-pink-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Answer Questions</h3>
                <p className="text-gray-300">
                  Share your current situation, feelings, and what's troubling you through our guided questionnaire
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-sky-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Sepnoty Analysis</h3>
                <p className="text-gray-300">
                  Our Sepnoty analyzes your responses with empathy and precision to understand your needs
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Get Recommendations</h3>
                <p className="text-gray-300">
                  Receive personalized guidance and actionable steps tailored specifically to your situation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Sepnoty?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-sky-500/20 p-4 rounded-full inline-block mb-4">
                <Shield className="w-8 h-8 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">100% Private & Secure</h3>
              <p className="text-gray-300">Your personal information is completely confidential and secure</p>
            </div>
            
            <div className="text-center">
              <div className="bg-pink-500/20 p-4 rounded-full inline-block mb-4">
                <Clock className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Available 24/7</h3>
              <p className="text-gray-300">Get support whenever you need it, day or night</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-500/20 p-4 rounded-full inline-block mb-4">
                <Award className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Evidence-Based</h3>
              <p className="text-gray-300">Recommendations based on proven psychological principles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500 via-sky-500 to-orange-500 rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your journey toward clarity, support, and balance today.
            </p>
            <Link
              to="/questionnaire"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 shadow-lg"
            >
              <span>Get Support Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-pink-500 to-sky-500 p-2 rounded-full">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Sepnoty</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-2">
                Your mental health matters. Get the support you deserve.
              </p>
              <p className="text-sm text-gray-400">
                © 2025 Sepnoty. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;