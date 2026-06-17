import React, { useState } from 'react';
import { PieChart as PieChartIcon, AlertCircle, Users, ActivitySquare, TrendingUp, Leaf, X, Target } from 'lucide-react';
import { ScatterChart, Scatter, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, Indicator } from '../components/Shared';
import { pcaMockData } from '../data/mockData';

const UnsupervisedPage = () => {
  const [subTab, setSubTab] = useState('personas');
  const [showImagePopup, setShowImagePopup] = useState(false);
  
  // สร้าง State สำหรับเก็บข้อมูลการ์ด Persona ที่ถูกคลิก
  const [selectedPersona, setSelectedPersona] = useState(null);

  // เพิ่มข้อมูลกลยุทธ์ (Strategy) เข้าไปเพื่อให้ Popup มีเนื้อหาเชิงลึกขึ้น
  const personaCards = [
    {
      id: 'cluster2',
      title: 'The Gentle Perfectionists',
      desc: 'กลุ่มลูกค้าที่ยอมจ่ายเพื่อความสบายใจ สินค้าต้องตอบโจทย์ความอ่อนโยน ควบคู่กับประสิทธิภาพสีติดทนนาน',
      color: '#8A9A5B',
      bgLight: '#FAF9F6',
      size: '25 คน',
      scores: [
        { label: 'Organic & Safety', val: 98 },
        { label: 'Long-lasting', val: 92 },
        { label: 'Price Sensitivity', val: 30 },
      ],
      strategy: 'เน้นการสื่อสารเรื่องสารสกัดพรีเมียมและการรับรองความปลอดภัย (Dermatologically Tested) สามารถตั้งราคาสินค้าในระดับพรีเมียมได้ ควรใช้ช่องทางรีวิวจากผู้เชี่ยวชาญหรือบล็อกเกอร์สายสุขภาพ'
    },
    {
      id: 'cluster0',
      title: 'The Speed & Ease Advocates',
      desc: 'กลุ่มที่มองหาความสะดวกสบายในการแก้ปัญหาเฉพาะหน้า มักซื้อสินค้าที่วางจำหน่ายทั่วไป ใช้งานง่ายและรวดเร็ว',
      color: '#B08D57',
      bgLight: '#FAF9F6',
      size: '22 คน',
      scores: [
        { label: 'Convenience', val: 94 },
        { label: 'Accessibility', val: 88 },
        { label: 'Organic & Safety', val: 50 },
      ],
      strategy: 'ชูจุดเด่นเรื่อง "ทำง่ายด้วยตัวเองที่บ้านใน 15 นาที" ควรเน้นกระจายสินค้าในช่องทางร้านสะดวกซื้อ (Convenience Store) และใช้บรรจุภัณฑ์แบบซองหรือขวดปั๊มที่ใช้งานได้ทันที'
    },
    {
      id: 'cluster1',
      title: 'The Smart Budgeter',
      desc: 'กลุ่มที่เน้นความคุ้มค่าของเม็ดเงินเป็นหลัก มักเปรียบเทียบราคาต่อปริมาณ และตัดสินใจจากโปรโมชั่นที่ตอบโจทย์',
      color: '#B39D73',
      bgLight: '#FAF9F6',
      size: '16 คน',
      scores: [
        { label: 'Price Value', val: 96 },
        { label: 'Promotion Seeker', val: 85 },
        { label: 'Organic & Safety', val: 40 },
      ],
      strategy: 'กระตุ้นการตัดสินใจด้วยโปรโมชั่น Bundle (ซื้อคู่ถูกกว่า) หรือ Size ใหญ่สุดคุ้ม เน้นสื่อสารโปรโมชั่นผ่านช่องทาง E-Commerce และแพลตฟอร์มโซเชียลมีเดีย'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Optimal Clusters Card */}
        <div className="relative col-span-2 md:col-span-1">
          <div className="invisible p-6 opacity-0 pointer-events-none border border-transparent">
            <Indicator label="Optimal Clusters" value="3" subValue="K-Means (Elbow Method)" icon={PieChartIcon} color="#8A9A5B" />
          </div>
          <Card className="absolute top-0 left-0 w-full min-h-full py-5 px-6 group cursor-pointer hover:shadow-[0_30px_60px_-15px_rgba(138,154,91,0.35)] hover:ring-2 hover:ring-[#8A9A5B] hover:scale-105 bg-white transition-all duration-500 z-10 hover:z-50 origin-top flex flex-col justify-start">
            <Indicator label="Optimal Clusters" value="3" subValue="K-Means (Elbow Method)" icon={PieChartIcon} color="#8A9A5B" />
            <div className="grid transition-all duration-500 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <div className="h-px w-full bg-[#8A9A5B]/30 mt-4 mb-3"></div>
                <p className="font-normal text-[14px] leading-relaxed text-[#222222] text-left">
                  ประมวลผลจากพฤติกรรมลูกค้าผ่านอัลกอริทึม <span className="font-medium text-[#8A9A5B]">K-Means</span> โดยใช้ <span className="font-medium text-[#8A9A5B]">Elbow Method</span> วิเคราะห์หาจุดเหมาะสมที่สุด (Optimal K=3) เพื่อให้ได้ Segment ที่มีเอกลักษณ์ชัดเจนและมีนัยสำคัญทางสถิติ
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Anomaly Card */}
        <div className="relative col-span-2 md:col-span-1">
          <div className="invisible p-6 opacity-0 pointer-events-none border border-transparent">
            <Indicator label="Anomaly Detected" value="5.1%" subValue="3 / 63 samples" icon={AlertCircle} color="#B08D57" />
          </div>
          <Card className="absolute top-0 left-0 w-full min-h-full py-5 px-6 group cursor-pointer hover:shadow-[0_30px_60px_-15px_rgba(176,141,87,0.35)] hover:ring-2 hover:ring-[#B08D57] hover:scale-105 bg-white transition-all duration-500 z-10 hover:z-50 origin-top flex flex-col justify-start">
            <Indicator label="Anomaly Detected" value="5.1%" subValue="3 / 63 samples" icon={AlertCircle} color="#B08D57" />
            <div className="grid transition-all duration-500 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <div className="h-px w-full bg-[#B08D57]/30 mt-4 mb-3"></div>
                <p className="font-normal text-[14px] leading-relaxed text-[#222222] text-left">
                  ระบบตรวจพบข้อมูลที่มีพฤติกรรมเบี่ยงเบนจากกลุ่มส่วนใหญ่ (Outliers) จำนวน 3 รายการ <span className="font-medium text-[#B08D57]">การคัดกรองข้อมูลส่วนนี้ออก</span> ช่วยลดสัญญาณรบกวน (Noise) ทำให้โมเดลมีความแม่นยำและเสถียรภาพสูงขึ้น
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Dominant Segment Card */}
        <div className="relative col-span-2">
          <div className="invisible p-6 opacity-0 pointer-events-none border border-transparent">
            <Indicator label="Dominant Segment" value="Gentle Perfectionists" subValue="40% ของกลุ่มตัวอย่างทั้งหมด" icon={Users} color="#8A9A5B" />
          </div>
          <Card className="absolute top-0 left-0 w-full min-h-full py-5 px-6 group cursor-pointer hover:shadow-[0_30px_60px_-15px_rgba(138,154,91,0.35)] hover:ring-2 hover:ring-[#8A9A5B] hover:scale-105 bg-white transition-all duration-500 z-10 hover:z-50 origin-top flex flex-col justify-start">
            <Indicator label="Dominant Segment" value="Gentle Perfectionists" subValue="40% ของกลุ่มตัวอย่างทั้งหมด" icon={Users} color="#8A9A5B" />
            <div className="grid transition-all duration-500 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <div className="h-px w-full bg-[#8A9A5B]/30 mt-4 mb-3"></div>
                <p className="font-normal text-[14px] leading-relaxed text-[#222222] text-left">
                  Segment ที่มีขนาดใหญ่ที่สุด ครองสัดส่วนถึง <span className="font-medium text-[#8A9A5B]">40%</span> ของตลาด สะท้อนพฤติกรรมผู้บริโภคที่ให้ความสำคัญสูงสุดกับ <span className="font-medium text-[#8A9A5B]">ความอ่อนโยนของสารสกัดธรรมชาติ</span> ควบคู่กับประสิทธิภาพสีติดทน เป็นเป้าหมายหลักในการวางกลยุทธ์
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-3 mt-8 mb-6 pb-2 snap-x border-b border-[#B08D57]/20">
        <button onClick={() => setSubTab('personas')} className={`snap-start shrink-0 px-6 py-4 text-[15px] font-medium flex items-center gap-2 transition-all border-b-4 ${subTab === 'personas' ? 'text-[#8A9A5B] border-[#8A9A5B]' : 'text-[#4A4A4A]/60 border-transparent hover:text-[#1A1A1A]'}`}>
          <Users size={20} strokeWidth={2} /> Customer Personas
        </button>
        <button onClick={() => setSubTab('pca')} className={`snap-start shrink-0 px-6 py-4 text-[15px] font-medium flex items-center gap-2 transition-all border-b-4 ${subTab === 'pca' ? 'text-[#8A9A5B] border-[#8A9A5B]' : 'text-[#4A4A4A]/60 border-transparent hover:text-[#1A1A1A]'}`}>
          <ActivitySquare size={20} strokeWidth={2} /> Clustering Pattern
        </button>
        <button onClick={() => setSubTab('correlation')} className={`snap-start shrink-0 px-6 py-4 text-[15px] font-medium flex items-center gap-2 transition-all border-b-4 ${subTab === 'correlation' ? 'text-[#8A9A5B] border-[#8A9A5B]' : 'text-[#4A4A4A]/60 border-transparent hover:text-[#1A1A1A]'}`}>
          <TrendingUp size={20} strokeWidth={2} /> Feature Correlation
        </button>
      </div>

      <AnimatePresence mode="wait">
        {subTab === 'personas' && (
          <motion.div key="personas" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {personaCards.map((persona) => (
              <div 
                key={persona.id} 
                onClick={() => setSelectedPersona(persona)}
                className="bg-white rounded-[32px] p-8 shadow-[0_4px_24px_rgb(176,141,87,0.08)] border border-[#B08D57]/20 relative overflow-hidden flex flex-col h-full cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgb(176,141,87,0.15)] transition-all duration-300"
              >
                <Leaf size={140} className="absolute -top-6 -right-8 text-[#FAF9F6] opacity-60 pointer-events-none" strokeWidth={1.5} />
                <div className={`w-14 h-14 rounded-[20px] flex items-center justify-center mb-6 z-10 border-2`} style={{ backgroundColor: persona.bgLight, color: persona.color, borderColor: `${persona.color}40` }}>
                  <Leaf size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-serif font-medium text-[#1A1A1A] leading-tight mb-4 z-10">{persona.title}</h3>
                <p className="text-[14px] text-[#333333] leading-relaxed mb-8 h-16 z-10 font-normal">{persona.desc}</p>
                <div className="flex-1 space-y-5 z-10">
                  <div className="text-[11px] font-medium text-[#B08D57] uppercase tracking-widest border-b border-[#B08D57]/20 pb-2">Key Attributes</div>
                  {persona.scores.map((s, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-[12px] font-medium text-[#4A4A4A] capitalize">{s.label}</span>
                        <span className="text-[15px] font-serif font-medium text-[#1A1A1A]">{s.val}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#FAF9F6] rounded-full overflow-hidden border border-[#B08D57]/10">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${s.val}%` }} transition={{ duration: 1, delay: 0.2 }} className="h-full rounded-full" style={{ backgroundColor: persona.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-[#B08D57]/20 flex justify-between items-center z-10">
                  <span className="text-[11px] font-medium text-[#B08D57] uppercase tracking-widest">Segment Size</span>
                  <span className="text-[15px] font-medium text-[#1A1A1A] bg-[#FAF9F6] px-5 py-2 rounded-full border border-[#B08D57]/30 shadow-sm">{persona.size}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {subTab === 'pca' && (
          <motion.div key="pca" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {/* โค้ดกราฟ PCA (เหมือนเดิม) */}
            <div className="bg-white rounded-[32px] p-8 shadow-[0_4px_24px_rgb(176,141,87,0.08)] border border-[#B08D57]/20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#1A1A1A]">Cluster Visualization (PCA)</h3>
                  <p className="text-[14px] text-[#4A4A4A] mt-1 font-normal">การกระจายตัวของลูกค้าในรูปแบบ 2 มิติ</p>
                </div>
                <div className="flex flex-wrap gap-4 text-[13px] font-medium text-[#1A1A1A] bg-[#FAF9F6] py-3 px-5 rounded-[20px] border border-[#B08D57]/30 shadow-sm">
                  <div className="flex items-center gap-2"><div className="w-3.5 h-3.5 rounded-full bg-[#8A9A5B]"></div>Gentle Perfectionists</div>
                  <div className="flex items-center gap-2"><div className="w-3.5 h-3.5 rounded-full bg-[#B08D57]"></div>Speed & Ease</div>
                  <div className="flex items-center gap-2"><div className="w-3.5 h-3.5 rounded-full bg-[#B39D73]"></div>Price Sensitive</div>
                </div>
              </div>

              <div className="h-[450px] w-full bg-[#FAF9F6]/80 rounded-[24px] border border-[#B08D57]/20 overflow-hidden p-2">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} opacity={0.6} stroke="#B39D73" />
                    <XAxis type="number" dataKey="x" hide domain={['dataMin - 10', 'dataMax + 10']} />
                    <YAxis type="number" dataKey="y" hide domain={['dataMin - 10', 'dataMax + 10']} />
                    <ZAxis type="category" dataKey="cluster" name="Cluster" />
                    <Tooltip 
                      cursor={{strokeDasharray: '3 3', stroke: '#B39D73'}}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-white px-4 py-3 rounded-[16px] shadow-md border border-[#B08D57]/30 text-sm">
                              <p className="font-medium text-[#1A1A1A]">{data.cluster}</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    {['The Gentle Perfectionists', 'The Speed & Ease', 'The Price Sensitive', 'Anomaly'].map((clusterName, idx) => (
                      <Scatter key={idx} name={clusterName} data={pcaMockData.filter(d => d.cluster === clusterName)} fill={pcaMockData.find(d => d.cluster === clusterName)?.color} shape="circle" />
                    ))}
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        )}

        {subTab === 'correlation' && (
          <motion.div key="correlation" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {/* โค้ดรูป Correlation (เหมือนเดิม) */}
            <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-[0_4px_24px_rgb(176,141,87,0.08)] border border-[#B08D57]/20">
              <div className="mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-serif font-normal text-[#1A1A1A]">Behavior Correlation Matrix</h3>
                <p className="text-[14px] text-[#4A4A4A] mt-2 font-normal">ระดับความสัมพันธ์ของปัจจัยการตัดสินใจซื้อ (+1 แปรผันตามกัน, -1 แปรผกผัน)</p>
              </div>
              <div className="w-full flex justify-center items-center p-4 md:p-8 cursor-pointer relative group" onClick={() => setShowImagePopup(true)}>
                 <img src="https://cdn.phototourl.com/free/2026-05-12-72f845da-a885-4d4d-af6c-083145d14bda.png" alt="Behavior Correlation Matrix" className="w-full max-w-4xl h-auto object-contain mix-blend-multiply group-hover:scale-[1.02] group-hover:opacity-80 transition-all duration-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup รูปภาพ Correlation */}
      <AnimatePresence>
        {showImagePopup && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md cursor-pointer" onClick={() => setShowImagePopup(false)} />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 10 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative bg-white w-full max-w-5xl rounded-[32px] p-2 shadow-2xl flex flex-col items-center border-4 border-white mt-4">
              <button onClick={() => setShowImagePopup(false)} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#B08D57] bg-[#FAF9F6] rounded-full hover:bg-[#B08D57] hover:text-white transition-all z-50 shadow-md border border-[#B08D57]/20">
                <X size={20} strokeWidth={2.5} />
              </button>
              <div className="w-full bg-[#FAF9F6] rounded-[28px] p-4 flex justify-center items-center overflow-hidden">
                <img src="https://cdn.phototourl.com/free/2026-05-12-72f845da-a885-4d4d-af6c-083145d14bda.png" alt="Behavior Correlation Matrix Full" className="w-full h-auto max-h-[80vh] object-contain mix-blend-multiply" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Popup Modal สำหรับการ์ด Persona --- */}
      <AnimatePresence>
        {selectedPersona && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-8">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm cursor-pointer" 
              onClick={() => setSelectedPersona(null)} 
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 10 }} 
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white w-full max-w-2xl rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col border-4 border-white mt-4"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[12px] font-medium text-white tracking-widest uppercase px-6 py-2.5 rounded-full shadow-md border border-white/20 whitespace-nowrap z-20 flex items-center gap-2" style={{ backgroundColor: selectedPersona.color }}>
                <Users size={16} /> Persona Insight
              </div>

              <button 
                onClick={() => setSelectedPersona(null)} 
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-[#B08D57] bg-[#FAF9F6] rounded-full hover:bg-[#B08D57] hover:text-white transition-all z-50 shadow-sm border border-[#B08D57]/20"
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              <div className="flex items-center gap-5 mb-6 mt-2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: selectedPersona.color }}>
                  <Leaf size={32} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#1A1A1A]">{selectedPersona.title}</h2>
                  <p className="text-[13px] uppercase tracking-widest font-bold mt-1" style={{ color: selectedPersona.color }}>Segment Size: {selectedPersona.size}</p>
                </div>
              </div>

              <p className="text-[#333333] leading-relaxed mb-6 font-normal">
                {selectedPersona.desc}
              </p>

              <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#B08D57]/20 mb-8">
                <h4 className="text-sm font-bold text-[#1A1A1A] mb-2 flex items-center gap-2">
                  <Target size={18} style={{ color: selectedPersona.color }}/> กลยุทธ์ที่แนะนำ (Strategic Approach):
                </h4>
                <p className="text-gray-600 leading-relaxed text-[14px]">{selectedPersona.strategy}</p>
              </div>

              <div className="space-y-6">
                <div className="text-[11px] font-bold text-[#B08D57] uppercase tracking-widest border-b border-[#B08D57]/20 pb-2">
                  Key Attributes Breakdown
                </div>
                {selectedPersona.scores.map((s, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[13px] font-medium text-[#4A4A4A] capitalize">{s.label}</span>
                      <span className="text-[18px] font-serif font-bold text-[#1A1A1A]">{s.val}%</span>
                    </div>
                    <div className="h-3 w-full bg-[#FAF9F6] rounded-full overflow-hidden border border-[#B08D57]/10">
                      <motion.div 
                        initial={{ width: 0 }} 
                        animate={{ width: `${s.val}%` }} 
                        transition={{ duration: 1, delay: 0.1 * i }} 
                        className="h-full rounded-full" 
                        style={{ backgroundColor: selectedPersona.color }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default UnsupervisedPage;