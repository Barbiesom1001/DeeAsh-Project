// src/components/Shared.jsx
// import React from 'react';
import { Leaf, BarChart3, Target, Bookmark, LayoutDashboard, Users, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';

export const CHART_COLORS = ['#8A9A5B', '#A9BA7D', '#C5D3A3', '#6B7A46', '#E5EAD7'];

// --- Sidebar & Navigation ---
export const NavItem = ({ icon: Icon, label, active, onClick, isCollapsed }) => {
  return (
    <div className="relative px-3">
      <button
        onClick={onClick}
        className={`w-full flex items-center gap-3 p-3.5 rounded-[20px] transition-all duration-300 group relative ${
          active 
          ? 'bg-[#8A9A5B] text-white shadow-md shadow-[#8A9A5B]/20' 
          : 'text-[#B08D57] hover:bg-[#FAF9F6] hover:text-[#8A9A5B] font-medium'
        }`}
      >
        <Icon size={20} strokeWidth={2} className={active ? 'text-white' : 'text-[#B08D57] group-hover:text-[#8A9A5B]'} />
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium whitespace-nowrap overflow-hidden"
            >
              {label}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

// --- Basic UI Components ---
export const Card = ({ title, children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white rounded-[24px] p-6 shadow-[0_4px_24px_rgb(176,141,87,0.06)] border border-[#B08D57]/20 flex flex-col ${className}`}
  >
    {title && <h3 className="text-xl font-serif font-normal mb-5 text-[#8A9A5B] flex items-center gap-2">{title}</h3>}
    <div className="flex-1 w-full h-full">
      {children}
    </div>
  </motion.div>
);

export const Indicator = ({ label, value, subValue, icon: Icon, color }) => (
  <div className="flex flex-col justify-center w-full">
    <div className="flex items-center gap-3 mb-2">
      <div className={`p-2.5 rounded-[12px] shadow-sm`} style={{ backgroundColor: color, color: '#FFF' }}>
        <Icon size={20} strokeWidth={2.5} />
      </div>
      <span className="text-[14px] font-medium uppercase tracking-wide" style={{ color: color }}>{label}</span>
    </div>
    <div className="text-3xl md:text-4xl font-serif font-medium text-[#1A1A1A] my-1">{value}</div>
    {subValue && <div className="text-[13px] text-[#4A4A4A] font-normal">{subValue}</div>}
  </div>
);

// src/components/Shared.jsx

export const ModelKPICard = ({ title, enTitle, desc, icon: Icon, testScore, trainScore, highlight, onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-[24px] p-6 border cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5 ${
      highlight 
        ? 'border-[#8A9A5B]/40 shadow-[0_8px_30px_rgb(138,154,91,0.15)] hover:shadow-[0_15px_40px_rgb(138,154,91,0.25)]' 
        : 'border-[#B08D57]/20 shadow-sm hover:shadow-[0_15px_40px_rgb(176,141,87,0.15)]'
    } flex flex-col justify-between`}
  >
     <div className="flex items-start gap-4 mb-6">
        <div className={`w-12 h-12 rounded-[20px] flex items-center justify-center shrink-0 shadow-sm ${highlight ? 'bg-[#8A9A5B] text-white' : 'bg-[#B08D57] text-white'}`}>
           <Icon size={24} strokeWidth={2} />
        </div>
        <div>
           <h4 className="font-serif font-medium text-[#1A1A1A] text-sm leading-tight">{title} <br/><span className="text-[10px] text-[#4A4A4A] font-medium uppercase tracking-wider font-sans">({enTitle})</span></h4>
           <p className="text-[11px] text-[#4A4A4A] mt-1.5 leading-relaxed font-normal">{desc}</p>
        </div>
     </div>
     <div className="space-y-3 pt-4 border-t border-[#B08D57]/20">
        <div className="flex justify-between items-end">
           <span className="text-[10px] font-medium text-[#4A4A4A] uppercase tracking-widest">Test Set <span className="font-normal">(ของจริง)</span></span>
           <span className={`text-2xl font-serif font-medium ${highlight ? 'text-[#8A9A5B]' : 'text-[#B08D57]'}`}>{testScore}%</span>
        </div>
        <div className="flex justify-between items-end">
           <span className="text-[10px] font-medium text-[#4A4A4A] uppercase tracking-widest">Train Set <span className="font-normal">(ตอนสอน)</span></span>
           <span className="text-sm font-medium text-[#4A4A4A]">{trainScore}%</span>
        </div>
     </div>
  </div>
);

// --- Chart Tooltips & Micro Charts ---
export const MiniChartTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_15px_30px_-10px_rgba(138,154,91,0.3)] border-2 border-[#8A9A5B]/30 max-w-[220px] relative z-50">
        <div className="flex justify-between items-start mb-1">
          <p className="text-[13px] font-medium text-[#1A1A1A]">{data.name}</p>
          <p className="text-[15px] font-serif font-medium text-[#8A9A5B]">{data.value}%</p>
        </div>
        <div className="h-px w-full bg-[#B08D57]/20 my-2"></div>
        <p className="text-[12px] font-normal text-[#4A4A4A] leading-relaxed">{data.desc}</p>
      </div>
    );
  }
  return null;
};

// MINI BAR CHART (ฉบับแก้สีไฮไลต์ตามเมาส์ชี้)
export const MiniBarChart = ({ data, title, icon: Icon, color }) => {
  // สร้าง State จำตำแหน่งเมาส์
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-[#FAF9F6] border border-[#B08D57]/15 rounded-[24px] p-5 shadow-sm hover:shadow-[0_8px_24px_-10px_rgba(138,154,91,0.2)] transition-all h-[240px] flex flex-col">
      <div className="flex items-center gap-2.5 mb-4">
        <div className="p-2 rounded-[10px] text-white" style={{ backgroundColor: color }}>
          <Icon size={16} strokeWidth={2.5} />
        </div>
        <h4 className="text-[13px] font-medium uppercase tracking-widest text-[#1A1A1A]">{title}</h4>
      </div>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            layout="vertical" 
            margin={{ left: 5, right: 15, top: 0, bottom: 0 }}
            // จับตำแหน่งว่าเมาส์ชี้อยู่แท่งไหน
            onMouseMove={(state) => {
              if (state && state.isTooltipActive) setActiveIndex(state.activeTooltipIndex);
              else setActiveIndex(null);
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.3} stroke="#B39D73" />
            <XAxis type="number" hide domain={[0, 'dataMax + 10']} />
            <YAxis dataKey="name" type="category" width={80} fontSize={11} tick={{ fill: '#4A4A4A', fontWeight: 400 }} axisLine={false} tickLine={false} />
            <Tooltip content={<MiniChartTooltip />} cursor={{ fill: `${color}15` }} />
            <Bar dataKey="value" fill={color} radius={[0, 4, 4, 0]} barSize={16}>
              {data.map((entry, index) => {
                // ถ้าไม่มีการชี้เมาส์ (null) ให้ไฮไลต์แท่งแรก แต่ถ้ามีการชี้เมาส์ ให้ไฮไลต์แท่งนั้น
                const isActive = activeIndex === index || (activeIndex === null && index === 0);
                return (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={isActive ? color : `${color}60`} // แท่งที่ไม่โดนชี้จะโปร่งใส 60%
                    className="transition-colors duration-300"
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// MINI PIE CHART (แบบ Infographic: มีเส้นโยงข้อมูลออกไปข้างๆ)

// ฟังก์ชันสำหรับวาดเส้นโยงและข้อความเวลา Hover
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;
  
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  
  // ปรับระยะเส้นโยงให้กระชับขึ้น
  const sx = cx + (outerRadius + 4) * cos; 
  const sy = cy + (outerRadius + 4) * sin;
  const mx = cx + (outerRadius + 12) * cos; 
  const my = cy + (outerRadius + 12) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 12; 
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      {/* ชิ้นกราฟที่ขยายตัวเด้งออกมา */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      
      {/* เส้นโยงข้อมูล */}
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} strokeWidth={1.5} fill="none" />
      <circle cx={ex} cy={ey} r={2.5} fill={fill} stroke="none" />
      
      {/* ตัวเลขเปอร์เซ็นต์ */}
      <text x={ex + (cos >= 0 ? 1 : -1) * 6} y={ey - 8} textAnchor={textAnchor} fill={fill} className="text-[18px] font-serif font-medium">
        {value}%
      </text>
      
      {/* หัวข้อ (Topic Title) - ใช้ฟอนต์น้ำหนักปกติ */}
      <text x={ex + (cos >= 0 ? 1 : -1) * 6} y={ey + 8} textAnchor={textAnchor} fill="#1A1A1A" className="text-[11px] font-normal uppercase tracking-widest" style={{ fontFamily: "'Mitr', sans-serif" }}>
        {payload.name}
      </text>

      {/* คำอธิบายรายละเอียด - ใช้ฟอนต์น้ำหนักบาง เพื่อความคลีน */}
      <foreignObject 
        x={cos >= 0 ? ex + 6 : ex - 126} 
        y={ey + 12} 
        width={120} 
        height={60}
      >
        <div className="text-[9px] text-[#666666] leading-relaxed mt-1 font-light" style={{ textAlign: cos >= 0 ? 'left' : 'right', fontFamily: "'Mitr', sans-serif" }}>
          {payload.desc}
        </div>
      </foreignObject>
    </g>
  );
};

export const MiniPieChart = ({ data, title, icon: Icon, color }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => { setActiveIndex(index); };
  const onPieLeave = () => { setActiveIndex(null); };

  return (
    <div className="bg-[#FAF9F6] border border-[#B08D57]/15 rounded-[24px] p-5 shadow-sm hover:shadow-[0_8px_24px_-10px_rgba(138,154,91,0.2)] transition-all h-[240px] flex flex-col">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="p-2 rounded-[10px] text-white" style={{ backgroundColor: color }}>
          <Icon size={16} strokeWidth={2.5} />
        </div>
        <h4 className="text-[13px] font-normal uppercase tracking-widest text-[#1A1A1A]" style={{ fontFamily: "'Mitr', sans-serif" }}>{title}</h4>
      </div>
      
      <div className="flex-1 w-full relative min-h-0">
        
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none pb-4 z-0 transition-opacity duration-300 ${activeIndex !== null ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-[18px] font-serif font-medium text-[#1A1A1A]">{data[0].value}%</span>
        </div>

        <div className="w-full h-full relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            {/* แก้ไขตรงนี้: เพิ่ม Margin ซ้ายขวาเป็น 80 เพื่อให้มีพื้นที่เหลือวางข้อความ และย่อวงกลมลงนิดนึง */}
            <PieChart margin={{ top: 15, right: 80, bottom: 15, left: 80 }}>
              <Pie 
                data={data} 
                cx="50%" 
                cy="50%" 
                innerRadius={20} 
                outerRadius={30} 
                paddingAngle={4} 
                dataKey="value"
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={CHART_COLORS[index % CHART_COLORS.length]} 
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ outline: 'none' }}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};