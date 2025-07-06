import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LogOut, Brain } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Sepnoty</h1>
          </div>
          
          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-blue-100">Welcome, {user.name}</span>
              <button
                onClick={logout}
                className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;