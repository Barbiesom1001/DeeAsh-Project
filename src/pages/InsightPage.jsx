import React from 'react';
import { Award, User, History, MapPin, ShoppingBag, Store, Heart, Frown } from 'lucide-react';
import { Card, MiniPieChart, MiniBarChart } from '../components/Shared';
import { profileGender, profileAge, profileRegion, profileProducts, profileChannel, profileReason, profilePainPoint } from '../data/mockData';

export const InsightPage = () => (
  <div className="space-y-8 font-['Mitr']">
    <Card title="Target Profile Analytics" className="border-t-[6px] border-t-[#8A9A5B] rounded-[32px] p-8 col-span-full">
      <div className="flex items-center gap-5 mb-8">
        <div className="w-16 h-16 rounded-full bg-[#8A9A5B] shadow-lg flex items-center justify-center text-white">
          <Award size={32} strokeWidth={2} />
        </div>
        <div>
          <div className="text-2xl font-['Mitr'] font-normal text-[#1A1A1A]">เจาะลึก 7 ปัจจัยกลุ่มเป้าหมาย (Winning Zone)</div>
          <div className="text-[12px] text-[#8A9A5B] font-normal uppercase tracking-widest mt-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8A9A5B] animate-pulse"></span>
            Interactive Charts: ชี้หรือจิ้มที่กราฟเพื่อดู Insights เพิ่มเติม
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <MiniPieChart data={profileGender} title="1. เพศ (Gender)" icon={User} color="#8A9A5B" />
        <MiniBarChart data={profileAge} title="2. ช่วงอายุ" icon={History} color="#B08D57" />
        <MiniBarChart data={profileRegion} title="3. ภูมิภาค" icon={MapPin} color="#B39D73" />
        <MiniBarChart data={profileProducts} title="4. รูปแบบสินค้าที่ใช้" icon={ShoppingBag} color="#987642" />
        <MiniBarChart data={profileChannel} title="5. ช่องทางการซื้อ" icon={Store} color="#76854C" />
        <MiniBarChart data={profileReason} title="6. เหตุผลที่เลือกซื้อ" icon={Heart} color="#8A9A5B" />
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-2">
           <MiniBarChart data={profilePainPoint} title="7. ปัญหาจากสินค้าเดิม (Pain Point)" icon={Frown} color="#B08D57" />
        </div>
      </div>
    </Card>

    <Card title="Communication Strategy" className="rounded-[32px] p-8 border-[#B08D57]/30">
      <div className="space-y-8">
        <div className="flex gap-5">
          <div className="w-12 h-12 rounded-full bg-[#8A9A5B] text-white shadow-md flex items-center justify-center shrink-0 text-lg font-['Chakra_Petch'] font-normal">1</div>
          <div className="pt-1">
            <div className="font-normal text-[#1A1A1A] text-lg">Key Message</div>
            <p className="text-[15px] text-[#333333] mt-3 leading-relaxed bg-[#F5F5DC]/60 p-5 rounded-2xl border-l-4 border-[#8A9A5B] font-normal shadow-sm">
              "ปกปิดมั่นใจ อ่อนโยนเหมือนสปาผม ด้วยสารสกัดธรรมชาติระดับพรีเมียม"
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-12 h-12 rounded-full bg-[#B08D57] text-white shadow-md flex items-center justify-center shrink-0 text-lg font-['Chakra_Petch'] font-normal">2</div>
          <div className="pt-1">
            <div className="font-normal text-[#1A1A1A] text-lg">Visual Moodboard</div>
            <p className="text-[15px] text-[#333333] mt-3 leading-relaxed font-normal bg-[#FAF9F6] p-5 rounded-2xl border-2 border-[#B08D57]/20">
              เน้นโทนสี <span className="font-normal text-[#8A9A5B]">Sage Green</span> คู่กับ <span className="font-normal text-[#B08D57]">Warm Beige</span> แสงธรรมชาติ จัดพร็อพใบไม้ เพื่อกระตุ้นการรับรู้ถึงความออร์แกนิคและปลอดภัย
            </p>
          </div>
        </div>
      </div>
    </Card>
  </div>
);