import React from 'react';
import { Users, UserCircle, Zap } from 'lucide-react';

const teamMembers = [
  { id: '1', name: 'ทิพวรรณ ยิ้มเนียม', studentId: '1660903921', role: 'Data Cleaning & Preprocessing' },
  { id: '2', name: 'สิริกานต์ ปุริสังคหะ', studentId: '1660904101', role: 'Unsupervised & Clustering' },
  { id: '3', name: 'อรพินธ์ นาคุณ', studentId: '1660904689', role: 'Supervised Learning & Insights' },
];

const TeamPage = () => (
  <div className="space-y-8 max-w-5xl">
    <h1 className="text-3xl font-serif text-[#1A1A1A]">ทีมผู้จัดทำ</h1>
    <div className="grid grid-cols-1 gap-6">
      {teamMembers.map((m) => (
        <div key={m.id} className="bg-white p-6 rounded-[32px] border border-[#B08D57]/20 flex gap-6 items-center">
          <div className="w-16 h-16 bg-[#FAF9F6] rounded-full flex items-center justify-center text-[#8A9A5B]">
            <UserCircle size={40} />
          </div>
          <div>
            <h3 className="text-xl font-serif">{m.name}</h3>
            <p className="text-[#B08D57] text-sm">{m.studentId} • {m.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default TeamPage;