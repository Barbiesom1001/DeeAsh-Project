import React, { useState } from 'react';
import HomePage from './pages/Home';
import UnsupervisedPage from './pages/Unsupervised';
import SupervisedPage from './pages/Supervised';
import TeamPage from './pages/Team';
import Sidebar from './components/Sidebar'; // อย่าลืมสร้างไฟล์ Sidebar แยกด้วย

export default function App() {
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
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-12 ml-24 md:ml-72 transition-all">
        {renderContent()}
      </main>
    </div>
  );
}