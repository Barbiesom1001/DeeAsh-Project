import React from 'react';
import { Database, TrendingUp, PieChart as PieChartIcon, Target, Award, ArrowRight, ArrowDown, Leaf } from 'lucide-react';
import { Card } from '../components/Shared';

const HomePage = () => (
  <div className="space-y-16 w-full max-w-6xl mx-auto">
    
    {/* --- ส่วน Hero (ปรับบาลานซ์ให้ฝั่งข้อความกว้างขึ้น) --- */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="lg:col-span-7 space-y-6">
        <span className="px-5 py-2.5 bg-[#8A9A5B]/15 text-[#6b7a43] rounded-full text-xs font-bold tracking-widest uppercase inline-block border border-[#8A9A5B]/30">
          ภาพรวมโปรเจกต์
        </span>
        <h1 className="text-5xl lg:text-6xl xl:text-[72px] font-serif font-medium text-[#1A1A1A] leading-[1.1] tracking-tight">
          Grey Hair Coverage <br/>
          <span className="text-[#8A9A5B] mt-3 block font-normal text-4xl lg:text-5xl italic">Analytics Dashboard</span>
        </h1>
        <p className="text-[#4A4A4A] leading-relaxed max-w-xl text-base lg:text-lg font-normal mt-6">
          วิเคราะห์เจาะลึกกลุ่มลูกค้าแชมพูปิดผมขาวออร์แกนิค เพื่อค้นหา <span className="font-bold text-[#8A9A5B]">"Winning Zone"</span> ที่ผสานความอ่อนโยนจากธรรมชาติ เข้ากับประสิทธิภาพสีติดทนนาน
        </p>
      </div>

      <div className="lg:col-span-5 h-full">
        <Card className="!bg-[#8A9A5B] text-white border-none shadow-[0_20px_50px_rgb(138,154,91,0.3)] relative overflow-hidden h-full flex flex-col justify-center">
          <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none rotate-12">
            <Leaf size={250} strokeWidth={1} />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-medium mb-5 text-white border-b border-white/20 pb-5">วัตถุประสงค์หลัก</h3>
            <p className="text-white/95 text-[15px] leading-relaxed font-light">
              สกัด Insights จากข้อมูล Survey (n=63) เพื่อสร้างโมเดลทำนายการเป็นลูกค้ากลุ่มคุณภาพ และแบ่งกลุ่ม Persona เพื่อการวางกลยุทธ์การสื่อสารที่แม่นยำ
            </p>
            <div className="mt-8 flex gap-4">
              <div className="text-center p-5 bg-white/10 rounded-[24px] backdrop-blur-md flex-1 border border-white/20 shadow-sm">
                <div className="text-4xl font-serif font-bold">63</div>
                <div className="text-[10px] uppercase font-bold opacity-80 mt-2 tracking-widest">Total Samples</div>
              </div>
              <div className="text-center p-5 bg-white/10 rounded-[24px] backdrop-blur-md flex-1 border border-white/20 shadow-sm">
                <div className="text-4xl font-serif font-bold">100%</div>
                <div className="text-[10px] uppercase font-bold opacity-80 mt-2 tracking-widest">Cleaned Data</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>

    {/* --- ส่วน System Architecture --- */}
    <div className="pt-8">
      <div className="flex flex-col items-center justify-center mb-10">
        <h3 className="text-sm font-bold text-[#B08D57] tracking-[0.3em] uppercase text-center bg-[#FAF9F6] px-6 py-2 rounded-full border border-[#B08D57]/20 shadow-sm">
          System Architecture
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2 p-8 lg:p-12 bg-white border border-[#B08D57]/20 rounded-[40px] shadow-[0_10px_40px_rgb(176,141,87,0.06)] relative overflow-hidden">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center w-full md:max-w-[140px] relative z-10">
          <div className="w-16 h-16 rounded-[24px] bg-[#FAF9F6] flex items-center justify-center text-[#B08D57] mb-4 border border-[#B08D57]/30 shadow-sm transition-transform hover:scale-110">
            <Database size={28} strokeWidth={2} />
          </div>
          <span className="text-[13px] font-bold tracking-wide uppercase text-[#1A1A1A]">Raw Data</span>
        </div>
        
        <ArrowRight className="text-[#B39D73]/50 hidden md:block shrink-0" size={32} strokeWidth={1.5} />
        <ArrowDown className="text-[#B39D73]/50 md:hidden shrink-0" size={32} strokeWidth={1.5} />
        
        {/* Step 2 */}
        <div className="flex flex-col items-center text-center w-full md:max-w-[140px] relative z-10">
          <div className="w-16 h-16 rounded-[24px] bg-[#FAF9F6] flex items-center justify-center text-[#8A9A5B] mb-4 border border-[#8A9A5B]/30 shadow-sm transition-transform hover:scale-110">
            <TrendingUp size={28} strokeWidth={2} />
          </div>
          <span className="text-[13px] font-bold tracking-wide uppercase text-[#1A1A1A]">Engineering</span>
        </div>
        
        <ArrowRight className="text-[#B39D73]/50 hidden md:block shrink-0" size={32} strokeWidth={1.5} />
        <ArrowDown className="text-[#B39D73]/50 md:hidden shrink-0" size={32} strokeWidth={1.5} />

        {/* Step 3 (Unsupervised / Supervised) */}
        <div className="flex flex-row md:flex-col lg:flex-row gap-6 justify-center w-full bg-[#FAF9F6]/50 p-6 rounded-[32px] border border-dashed border-[#B08D57]/30 relative z-10">
          <div className="flex flex-col items-center text-center flex-1 md:flex-none">
            <div className="w-16 h-16 rounded-[24px] bg-white flex items-center justify-center text-[#B08D57] mb-4 shadow-[0_8px_20px_rgb(176,141,87,0.15)] border border-[#B08D57]/20 transition-transform hover:scale-110">
              <PieChartIcon size={28} strokeWidth={2} />
            </div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-[#4A4A4A]">Unsupervised</span>
          </div>
          <div className="flex flex-col items-center text-center flex-1 md:flex-none">
            <div className="w-16 h-16 rounded-[24px] bg-white flex items-center justify-center text-[#8A9A5B] mb-4 shadow-[0_8px_20px_rgb(138,154,91,0.2)] border border-[#8A9A5B]/20 transition-transform hover:scale-110">
              <Target size={28} strokeWidth={2} />
            </div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-[#4A4A4A]">Supervised</span>
          </div>
        </div>

        <ArrowRight className="text-[#B39D73]/50 hidden md:block shrink-0" size={32} strokeWidth={1.5} />
        <ArrowDown className="text-[#B39D73]/50 md:hidden shrink-0" size={32} strokeWidth={1.5} />

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center w-full md:max-w-[140px] relative z-10">
          <div className="w-20 h-20 rounded-[28px] bg-[#8A9A5B] flex items-center justify-center text-white mb-4 shadow-[0_12px_24px_rgb(138,154,91,0.4)] transition-transform hover:scale-110">
            <Award size={36} strokeWidth={2} />
          </div>
          <span className="text-[14px] font-bold tracking-widest uppercase text-[#8A9A5B]">Insight</span>
        </div>

      </div>
    </div>
  </div>
);

export default HomePage;