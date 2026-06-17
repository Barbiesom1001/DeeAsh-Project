import React, { useState } from 'react';
import { Award, User, History, MapPin, ShoppingBag, Store, Heart, Frown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// นำเข้า Sector มาเพิ่มเพื่อทำ Effect กราฟวงกลมขยาย
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
import { Card, MiniPieChart, MiniBarChart, MiniChartTooltip, CHART_COLORS } from '../components/Shared';
import { profileGender, profileAge, profileRegion, profileProducts, profileChannel, profileReason, profilePainPoint } from '../data/mockData';

const InsightPage = () => {
  const [selectedChart, setSelectedChart] = useState(null);
  
  // สร้าง State สำหรับหน้าต่าง Popup
  const [activeBarIndex, setActiveBarIndex] = useState(null);
  const [activePieIndex, setActivePieIndex] = useState(null);

  const closeModal = () => {
    setSelectedChart(null);
    setActiveBarIndex(null);
    setActivePieIndex(null);
  };

  const chartsConfig = [
    { id: 'gender', type: 'pie', data: profileGender, title: "1. เพศ", icon: User, color: "#8A9A5B", colSpan: 1 },
    { id: 'age', type: 'bar', data: profileAge, title: "2. ช่วงอายุ", icon: History, color: "#B08D57", colSpan: 1 },
    { id: 'region', type: 'bar', data: profileRegion, title: "3. ภูมิภาค", icon: MapPin, color: "#B39D73", colSpan: 1 },
    { id: 'products', type: 'bar', data: profileProducts, title: "4. รูปแบบสินค้าที่ใช้", icon: ShoppingBag, color: "#987642", colSpan: 1 },
    { id: 'channel', type: 'bar', data: profileChannel, title: "5. ช่องทางการซื้อ", icon: Store, color: "#76854C", colSpan: 1 },
    { id: 'reason', type: 'bar', data: profileReason, title: "6. เหตุผลที่เลือกซื้อ", icon: Heart, color: "#8A9A5B", colSpan: 1 },
    { id: 'painpoint', type: 'bar', data: profilePainPoint, title: "7. ปัญหาจากสินค้าเดิม", icon: Frown, color: "#B08D57", colSpan: 2 },
  ];

  return (
    <div className="space-y-8 relative">
      <Card title="Target Profile Analytics" className="border-t-[6px] border-t-[#8A9A5B] rounded-[32px] p-8 col-span-full">
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-full bg-[#8A9A5B] shadow-lg flex items-center justify-center text-white">
            <Award size={32} strokeWidth={2} />
          </div>
          <div>
            <div className="text-2xl font-serif font-medium text-[#1A1A1A]">เจาะลึก 7 ปัจจัยกลุ่มเป้าหมาย (Winning Zone)</div>
            <div className="text-[12px] text-[#8A9A5B] font-medium uppercase tracking-widest mt-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8A9A5B] animate-pulse"></span>
              Interactive Charts: คลิกการ์ดเพื่อขยายดูกราฟเต็มจอ
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chartsConfig.map((config) => (
            <div 
              key={config.id}
              onClick={() => setSelectedChart(config)}
              className={`cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 ${
                config.colSpan === 2 ? 'md:col-span-2 lg:col-span-3 xl:col-span-2' : ''
              }`}
            >
              {config.type === 'pie' ? (
                <MiniPieChart data={config.data} title={config.title} icon={config.icon} color={config.color} />
              ) : (
                <MiniBarChart data={config.data} title={config.title} icon={config.icon} color={config.color} />
              )}
            </div>
          ))}
        </div>
      </Card>

      <Card title="Communication Strategy" className="rounded-[32px] p-8 border-[#B08D57]/30">
        <div className="space-y-8">
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-[#8A9A5B] text-white shadow-md flex items-center justify-center shrink-0 text-lg font-serif font-medium">1</div>
            <div className="pt-1">
              <div className="font-medium text-[#1A1A1A] text-lg">Key Message</div>
              <p className="text-[15px] text-[#333333] mt-3 leading-relaxed bg-[#F5F5DC]/60 p-5 rounded-2xl border-l-4 border-[#8A9A5B] font-normal shadow-sm">
                "ปกปิดมั่นใจ อ่อนโยนเหมือนสปาผม ด้วยสารสกัดธรรมชาติระดับพรีเมียม"
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-[#B08D57] text-white shadow-md flex items-center justify-center shrink-0 text-lg font-serif font-medium">2</div>
            <div className="pt-1">
              <div className="font-medium text-[#1A1A1A] text-lg">Visual Moodboard</div>
              <p className="text-[15px] text-[#333333] mt-3 leading-relaxed font-normal bg-[#FAF9F6] p-5 rounded-2xl border-2 border-[#B08D57]/20">
                เน้นโทนสี <span className="font-medium text-[#8A9A5B]">Sage Green</span> คู่กับ <span className="font-medium text-[#B08D57]">Warm Beige</span> แสงธรรมชาติ จัดพร็อพใบไม้ เพื่อกระตุ้นการรับรู้ถึงความออร์แกนิคและปลอดภัย
              </p>
            </div>
          </div>
        </div>
      </Card>

      <AnimatePresence>
        {selectedChart && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-8">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm cursor-pointer" 
              onClick={closeModal} 
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 10 }} 
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white w-full max-w-4xl rounded-[32px] p-6 md:p-10 shadow-2xl flex flex-col border-4 border-white mt-4"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[12px] font-medium text-white tracking-widest uppercase bg-[#8A9A5B] px-6 py-2.5 rounded-full shadow-md border border-white/20 whitespace-nowrap z-20 flex items-center gap-2">
                <selectedChart.icon size={16} /> Data Insight
              </div>

              <button 
                onClick={closeModal} 
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-[#B08D57] bg-[#FAF9F6] rounded-full hover:bg-[#B08D57] hover:text-white transition-all z-50 shadow-sm border border-[#B08D57]/20"
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              <h2 className="text-2xl md:text-3xl font-serif font-medium text-[#1A1A1A] mb-8 mt-4 text-center flex items-center justify-center gap-3">
                <div className="p-3 rounded-[14px] text-white shadow-sm" style={{ backgroundColor: selectedChart.color }}>
                  <selectedChart.icon size={24} />
                </div>
                {selectedChart.title}
              </h2>

              <div className="w-full h-[400px] bg-[#FAF9F6] rounded-[24px] border border-[#B08D57]/20 p-6 relative">
                <ResponsiveContainer width="100%" height="100%">
                  {selectedChart.type === 'pie' ? (
                    <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                      <Pie 
                        data={selectedChart.data} 
                        cx="50%" cy="50%" 
                        innerRadius={80} outerRadius={120} 
                        paddingAngle={4} 
                        dataKey="value" 
                        label={({name, value}) => `${name} ${value}%`} 
                        labelLine={{stroke: '#B08D57', strokeWidth: 1}}
                        activeIndex={activePieIndex}
                        activeShape={(props) => {
                          const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
                          return <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius + 10} startAngle={startAngle} endAngle={endAngle} fill={fill} className="transition-all duration-300" />;
                        }}
                        onMouseEnter={(_, index) => setActivePieIndex(index)}
                        onMouseLeave={() => setActivePieIndex(null)}
                      >
                        {selectedChart.data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} className="cursor-pointer hover:opacity-90" style={{ outline: 'none' }} />
                        ))}
                      </Pie>
                      <RechartsTooltip content={<MiniChartTooltip />} cursor={false} />
                    </PieChart>
                  ) : (
                    <BarChart 
                      data={selectedChart.data} 
                      layout="vertical" 
                      margin={{ left: 20, right: 60, top: 10, bottom: 10 }}
                      onMouseMove={(state) => {
                        if (state && state.isTooltipActive) setActiveBarIndex(state.activeTooltipIndex);
                        else setActiveBarIndex(null);
                      }}
                      onMouseLeave={() => setActiveBarIndex(null)}
                    >
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.3} stroke="#B39D73" />
                      <XAxis type="number" hide domain={[0, 'dataMax + 10']} />
                      <YAxis dataKey="name" type="category" width={140} fontSize={14} tick={{ fill: '#4A4A4A', fontWeight: 500 }} axisLine={false} tickLine={false} />
                      <RechartsTooltip content={<MiniChartTooltip />} cursor={{ fill: `${selectedChart.color}15` }} />
                      <Bar 
                        dataKey="value" 
                        fill={selectedChart.color} 
                        radius={[0, 8, 8, 0]} 
                        barSize={32} 
                        label={{ position: 'right', fill: '#1A1A1A', fontSize: 14, fontWeight: 'bold', formatter: (val) => `${val}%` }}
                      >
                        {selectedChart.data.map((entry, index) => {
                          // ให้สีเข้มเฉพาะอันที่ถูกชี้ หรืออันแรกถ้าไม่ได้ชี้อันไหนเลย
                          const isActive = activeBarIndex === index || (activeBarIndex === null && index === 0);
                          return (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={isActive ? selectedChart.color : `${selectedChart.color}60`} 
                              className="transition-colors duration-300"
                            />
                          );
                        })}
                      </Bar>
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
              
              <p className="text-center text-[#B08D57] text-[12px] font-medium tracking-widest mt-6 uppercase">
                Hover over the chart for more details
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default InsightPage;