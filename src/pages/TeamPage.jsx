import React from 'react';
import { Users, UserCircle, Zap } from 'lucide-react';

const teamMembers = [
  { id: '1', name: 'ทิพวรรณ ยิ้มเนียม', studentId: '1660903921', role: 'Data Cleaning' },
  { id: '2', name: 'สิริกานต์ ปุริสังคหะ', studentId: '1660904101', role: 'Unsupervised Learning' },
  { id: '3', name: 'อรพินธ์ นาคุณ', studentId: '1660904689', role: 'Supervised Learning' },
];

const TeamPage = () => (
  <div className="space-y-8">
    <h1 className="text-3xl font-serif">ทีมผู้จัดทำ</h1>
    <div className="grid grid-cols-1 gap-6">
      {teamMembers.map(m => (
        <div key={m.id} className="p-6 bg-white rounded-[32px] border border-[#B08D57]/20 flex gap-6">
          <UserCircle size={48} className="text-[#8A9A5B]" />
          <div>
            <h3 className="text-xl font-medium">{m.name}</h3>
            <p className="text-sm text-[#B08D57]">{m.studentId} | {m.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TeamPage;