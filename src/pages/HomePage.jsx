import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Database, TrendingUp, PieChart as PieIcon, Target, Award, ArrowRight } from 'lucide-react';

const HomePage = () => (
  <div className="space-y-12 max-w-5xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <span className="px-4 py-2 bg-[#8A9A5B]/15 text-[#6b7a43] rounded-[20px] text-xs font-medium tracking-widest uppercase inline-block border border-[#8A9A5B]/30">ภาพรวมโปรเจกต์</span>
        <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1A1A1A] leading-tight">
          Grey Hair Coverage <br/>
          <span className="text-[#8A9A5B] mt-2 block font-normal text-3xl md:text-4xl">Analytics Dashboard</span>
        </h1>
        <p className="text-[#333333] leading-relaxed max-w-md text-sm md:text-base font-normal">
          วิเคราะห์เจาะลึกกลุ่มลูกค้าแชมพูปิดผมขาวออร์แกนิค เพื่อค้นหา "Winning Zone" ที่ผสานความอ่อนโยนจากธรรมชาติ เข้ากับประสิทธิภาพสีติดทนนาน
        </p>
      </div>
      <div className="bg-[#8A9A5B] text-white p-8 rounded-[32px] shadow-xl relative overflow-hidden">
         <Leaf size={200} className="absolute -right-10 -top-10 opacity-10" />
         <h3 className="text-2xl font-serif font-medium mb-4">วัตถุประสงค์</h3>
         <p className="text-sm leading-loose opacity-90">สกัด Insights จากข้อมูล Survey เพื่อสร้างโมเดลทำนายการเป็นลูกค้ากลุ่มคุณภาพ และแบ่งกลุ่ม Persona เพื่อการวางกลยุทธ์สื่อสารที่แม่นยำ</p>
      </div>
    </div>
  </div>
);
export default HomePage;