import React, { useState } from 'react';
import { Leaf, PieChart as PieIcon, Target, Award, Users } from 'lucide-react';
import HomePage from './pages/Home';
import UnsupervisedPage from './pages/Unsupervised';
import SupervisedPage from './pages/Supervised';
import TeamPage from './pages/Team';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomePage />;
      case 'unsupervised': return <UnsupervisedPage />;
      case 'supervised': return <SupervisedPage />;
      case 'team': return <TeamPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex">
      {/* Sidebar Simple */}
      <nav className="w-64 bg-white border-r p-6 space-y-4">
        <div className="flex items-center gap-2 text-[#8A9A5B] mb-10">
          <Leaf size={32} /> <span className="text-2xl font-serif font-bold">DeeAsh</span>
        </div>
        {[
          { id: 'home', label: 'Home', icon: Leaf },
          { id: 'unsupervised', label: 'Segmentation', icon: PieIcon },
          { id: 'supervised', label: 'AI Predict', icon: Target },
          { id: 'team', label: 'Team', icon: Users },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
              activeTab === item.id ? 'bg-[#8A9A5B] text-white' : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            <item.icon size={20} /> {item.label}
          </button>
        ))}
      </nav>

      <main className="flex-1 p-12 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;