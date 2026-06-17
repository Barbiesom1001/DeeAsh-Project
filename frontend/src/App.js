import React, { useState, useEffect } from 'react';
import { Leaf, PieChart as PieChartIcon, Target, Award, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Pages ทั้ง 5 หน้า
import HomePage from './pages/HomePage';
import UnsupervisedPage from './pages/UnsupervisedPage';
import SupervisedPage from './pages/SupervisedPage';
import InsightPage from './pages/InsightPage';
import TeamPage from './pages/TeamPage';

// Import คอมโพเนนต์ปุ่มเมนู
import { NavItem } from './components/Shared';

export default function App() {
  // เปลี่ยนค่าเริ่มต้นให้เป็น 'home' (หน้า Overview)
  const [activeTab, setActiveTab] = useState('home'); 
  const [isCollapsed, setIsCollapsed] = useState(true); 
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // ลบคำสั่ง setActiveTab('unsupervised') ออก เพื่อไม่ให้มันล็อกหน้าแรก
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'HomePage', icon: Leaf },
    { id: 'unsupervised', label: 'UnsupervisedPage', icon: PieChartIcon },
    { id: 'supervised', label: 'SupervisedPage', icon: Target },
    { id: 'insight', label: 'InsightPage', icon: Award },
  ];

  // ฟังก์ชันสลับหน้าจอตามเมนูที่กด
  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomePage />;
      case 'unsupervised': return <UnsupervisedPage />;
      case 'supervised': return <SupervisedPage />;
      case 'insight': return <InsightPage />;
      case 'team': return <TeamPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#1A1A1A] flex flex-col md:flex-row selection:bg-[#8A9A5B] selection:text-white">
      
      {/* --- Mobile Top Header --- */}
      <div className="md:hidden sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#B08D57]/20 p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2 text-[#8A9A5B] cursor-pointer" onClick={() => setActiveTab('home')}>
          <Leaf size={24} strokeWidth={2} />
          <span className="font-serif font-medium text-2xl tracking-wide">DeeAsh.</span>
        </div>
        <div 
          onClick={() => setActiveTab('team')}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all border-2 ${
            activeTab === 'team' ? 'bg-[#8A9A5B] text-white border-transparent shadow-md' : 'bg-white text-[#B08D57] border-[#B08D57]/30'
          }`}
        >
          <Users size={20} strokeWidth={2} />
        </div>
      </div>

      {/* --- Sidebar (Desktop) --- */}
      <nav 
        onMouseEnter={() => setIsCollapsed(false)}
        onMouseLeave={() => setIsCollapsed(true)}
        className={`hidden md:flex bg-white border-r-2 border-[#B08D57]/10 flex-col fixed h-screen z-50 transition-all duration-300 ease-in-out shadow-[4px_0_24px_rgb(176,141,87,0.08)] overflow-hidden ${
          isCollapsed ? 'w-24' : 'w-72'
        }`}
      >
        <div className="p-6 flex items-center gap-4 cursor-pointer mb-8 mt-2" onClick={() => setActiveTab('home')}>
          <div className="w-12 h-12 bg-[#8A9A5B] rounded-[20px] flex items-center justify-center text-white shadow-md shrink-0">
            <Leaf size={24} strokeWidth={2} />
          </div>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="font-serif font-medium text-3xl tracking-wide text-[#1A1A1A] whitespace-nowrap"
              >
                DeeAsh
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        
        <div className="flex-1 space-y-2 px-2">
          {!isCollapsed && (
            <div className="px-5 py-3 text-[12px] font-medium uppercase tracking-widest text-[#B08D57]">
              MAIN MENU
            </div>
          )}
          {menuItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activeTab === item.id}
              onClick={() => setActiveTab(item.id)} // สั่งให้เปลี่ยนหน้าเมื่อคลิก
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      </nav>

      {/* --- Main Content Area --- */}
      <main className={`flex-1 p-4 sm:p-6 lg:p-12 transition-all duration-300 pb-28 md:pb-12 w-full ${isCollapsed ? 'md:ml-24' : 'md:ml-72'}`}>
        
        {/* Top Bar ที่จะเปลี่ยนชื่อตามหน้า */}
        <header className={`hidden md:flex sticky top-0 z-40 mb-10 transition-all py-4 ${scrolled ? 'bg-[#FAF9F6]/85 backdrop-blur-md shadow-[0_8px_30px_rgb(176,141,87,0.08)] -mx-6 px-6 rounded-b-[32px] border-b border-[#B08D57]/10' : ''}`}>
          <div className="flex justify-between items-center w-full">
            <div className="overflow-hidden">
              <h2 className="text-3xl font-serif font-medium text-[#1A1A1A]">
                {activeTab === 'team' ? 'รายชื่อผู้จัดทำ' : (menuItems.find(m => m.id === activeTab)?.label || 'HomePage')}
              </h2>
              <p className="text-[14px] text-[#B08D57] font-medium tracking-wider mt-1.5 uppercase">
                {activeTab === 'team' ? 'รายละเอียดสมาชิกและบทบาทหน้าที่ในโปรเจกต์' : 'Analytics & Data Science Dashboard'}
              </p>
            </div>
            <div className="flex items-center gap-5">
               <div className="hidden md:flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border-2 border-[#B08D57]/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8A9A5B] animate-pulse"></div>
                  <span className="text-[12px] font-medium uppercase text-[#1A1A1A] tracking-widest">Live</span>
               </div>
               <div 
                  onClick={() => setActiveTab('team')}
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm cursor-pointer transition-all border-2 ${
                    activeTab === 'team' ? 'bg-[#8A9A5B] text-white border-transparent' : 'bg-white text-[#B08D57] border-[#B08D57]/30 hover:border-[#8A9A5B] hover:text-[#8A9A5B]'
                  }`}
                >
                  <Users size={22} strokeWidth={2} />
               </div>
            </div>
          </div>
        </header>

        {/* ส่วนแสดงผลหน้าต่างๆ พร้อม Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
        
        <footer className="mt-20 pt-10 border-t-2 border-[#B08D57]/20 flex flex-col md:flex-row justify-between items-center text-[#B08D57] text-[12px] gap-5 font-medium uppercase tracking-widest">
          <p>DeeAsh Analytics &copy; 2024</p>
          <div className="flex gap-6">
            <span className="hover:text-[#8A9A5B] transition-colors cursor-pointer" onClick={() => setActiveTab('team')}>Meet the Team</span>
            <span className="hover:text-[#8A9A5B] transition-colors cursor-pointer">Analytics Documentation</span>
          </div>
        </footer>
      </main>

      {/* --- Mobile Bottom Navigation --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#B08D57]/20 z-50 flex justify-around px-2 py-3 pb-8 shadow-[0_-8px_30px_rgb(176,141,87,0.1)] rounded-t-[32px]">
        {menuItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => setActiveTab(item.id)} 
            className={`flex flex-col items-center justify-center w-full p-2.5 rounded-[20px] transition-all ${
              activeTab === item.id ? 'text-[#8A9A5B] bg-[#8A9A5B]/15' : 'text-[#B08D57] hover:bg-transparent'
            }`}
          >
            <item.icon size={22} strokeWidth={2} className={activeTab === item.id ? 'mb-1.5' : 'mb-1.5 opacity-80'} />
            <span className="text-[11px] font-medium truncate">{item.label}</span>
          </button>
        ))}
      </div>

    </div>
  );
}