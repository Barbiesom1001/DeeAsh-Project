import React from 'react';
import { Users, UserCircle, Zap } from 'lucide-react';
import { teamMembers } from '../data/mockData';

const TeamPage = () => (
  <div className="space-y-8 w-full max-w-6xl mx-auto py-4">
    
    {/* --- Header Section (เหมือนเดิม) --- */}
    <div className="flex items-center gap-5 mb-10 pb-6 border-b border-[#B08D57]/20">
       <div className="w-16 h-16 bg-[#B08D57] rounded-[24px] text-white shadow-md flex items-center justify-center shrink-0">
          <Users size={32} strokeWidth={2} />
       </div>
       <div>
          <h1 className="text-3xl md:text-4xl font-normal text-[#1A1A1A]" style={{ fontFamily: "'Mitr', sans-serif" }}>ทีมผู้จัดทำ</h1>
          <p className="text-[13px] text-[#B08D57] font-normal mt-2 tracking-widest uppercase" style={{ fontFamily: "'Mitr', sans-serif" }}>Project Team Members</p>
       </div>
    </div>
    
    {/* --- Team Cards (ปรับดีไซน์ภายในให้ตรงตามรูปตัวอย่าง) --- */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
      {teamMembers.map((m) => (
        <div 
          key={m.id} 
          className="bg-white rounded-[32px] p-8 shadow-[0_4px_24px_rgb(176,141,87,0.06)] border border-[#B08D57]/20 group hover:shadow-[0_15px_40px_rgb(176,141,87,0.12)] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden cursor-default"
        >
          {/* รูปโปรไฟล์ */}
          <div className="w-24 h-24 bg-[#FAF9F6] text-[#8A9A5B] rounded-[28px] flex items-center justify-center shrink-0 border border-[#8A9A5B]/20 shadow-inner mb-6 transition-transform duration-500 group-hover:scale-110">
             <UserCircle size={50} strokeWidth={1.5} />
          </div>

          {/* ชื่อ (จัดตัวหนาและขนาดตามรูป) */}
          <h3 className="text-2xl font-medium text-[#1A1A1A] mb-2" style={{ fontFamily: "'Mitr', sans-serif" }}>{m.name}</h3>

          {/* รหัสนักศึกษา (Chakra Petch) */}
          <p className="text-[14px] font-normal text-[#4A4A4A] mb-5" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
            Student ID {m.studentId}
          </p>

          <div className="w-full text-[#1A1A1A] rounded-xl py-2.5 px-5 flex items-center justify-center gap-2.5 mb-5 shadow-inner border border-[#B08D57]/10" style={{ fontFamily: "'Mitr', sans-serif" }}>
             <Zap size={18} strokeWidth={2} className="shrink-0 text-[#8A9A5B]" />
             <span className="text-[13px] font-medium capitalize">{m.role}</span>
          </div>

          {/* --- เส้นประคั่นกลาง (ตามรูป) --- */}
          {/* <div className="w-full border-t-2 border-dashed border-[#B08D57]/20 mb-1 opacity-60"></div> */}

          {/* --- ส่วนที่ซ่อนไว้ (กางออกเมื่อ เมาส์เลื่อนผ่าน) --- */}
          <div className="grid transition-all duration-500 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr] w-full">
            <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 w-full text-left">
               <div className="h-px w-full bg-[#B08D57]/20 mt-6 mb-5"></div>
               
               <div className="bg-[#FAF9F6] p-5 rounded-[20px] border border-[#B08D57]/10 relative">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8A9A5B]/50 rounded-l-[20px]"></div>
                  <span className="font-normal text-[#B08D57] block mb-2 text-[10px] uppercase tracking-widest ml-1" style={{ fontFamily: "'Mitr', sans-serif" }}>
                    ความรับผิดชอบ (Responsibility)
                  </span>
                  <p className="text-[#4A4A4A] text-[13px] leading-relaxed font-light ml-1" style={{ fontFamily: "'Mitr', sans-serif" }}>
                    {m.responsibility}
                  </p>
               </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  </div>
);

export default TeamPage;