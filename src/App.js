import React, { useState } from 'react';
import Home from './pages/Home';
import Unsupervised from './pages/Unsupervised';
import Supervised from './pages/Supervised';
import Team from './pages/Team';
// สมมติว่าคุณมีไฟล์ Sidebar ใน components
// import Sidebar from './components/Sidebar'; 

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <Home />;
      case 'unsupervised': return <Unsupervised />;
      case 'supervised': return <Supervised />;
      case 'team': return <Team />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#FAF9F6]">
      {/* ส่วนเลือกหน้า (Navigation) */}
      <nav className="w-64 bg-white border-r p-6">
        <h1 className="text-2xl font-serif font-bold text-[#8A9A5B] mb-8">DeeAsh</h1>
        <div className="space-y-2">
          {['home', 'unsupervised', 'supervised', 'team'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left p-3 rounded-xl capitalize ${activeTab === tab ? 'bg-[#8A9A5B] text-white' : 'text-gray-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* ส่วนแสดงเนื้อหา */}
      <main className="flex-1 p-10">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;