import React, { useState } from 'react';
import { Target, AlertTriangle, Loader2, Sparkles, Leaf, CheckCircle2, XCircle, X, Activity, History, Percent, Info, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, ModelKPICard } from '../components/Shared';
import { supervisedResults, featureImportance } from '../data/mockData';

// --- เอฟเฟคใบชาสำหรับ Winning Zone ---
const GreenTeaConfetti = () => {
  const leaves = Array.from({ length: 60 }).map((_, i) => {
    const angle = (Math.random() * Math.PI * 2);
    const distance = Math.random() * 400 + 50; 
    return { id: i, angle, tx: Math.cos(angle) * distance, ty: Math.sin(angle) * distance, size: Math.random() * 30 + 16, delay: Math.random() * 0.2, duration: Math.random() * 2 + 1.5, rotation: Math.random() * 720, scale: Math.random() * 0.8 + 0.5 };
  });
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[100]">
      {leaves.map((leaf) => (
        <motion.div key={leaf.id} initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }} animate={{ x: leaf.tx, y: leaf.ty, scale: [0, leaf.scale, leaf.scale * 0.5], opacity: [0, 1, 0], rotate: leaf.rotation + (Math.random() > 0.5 ? 180 : -180) }} transition={{ duration: leaf.duration, delay: leaf.delay, ease: "easeOut" }} className="absolute">
          <Leaf size={leaf.size} className="text-[#5b6b33]" fill="#8A9A5B" fillOpacity={0.9} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
};

// --- คำอธิบาย Tooltip ---
const getDetailDescription = (name) => {
  const descriptions = {
    'Random Forest': "โมเดลที่แม่นยำที่สุดในโปรเจกต์ ลดปัญหา Overfitting ได้ดีเยี่ยม โดยใช้การโหวตจาก Decision Trees หลายต้น",
    'Gradient Boosting': "เน้นแก้ไขข้อผิดพลาดทีละจุด ให้ผลลัพธ์ที่ละเอียดสูง เหมาะกับข้อมูลที่มีความซับซ้อน",
    'Logistic Reg': "วิเคราะห์ความสัมพันธ์เชิงเส้นเพื่อแยกแยะกลุ่มเป้าหมาย เหมาะสำหรับดูทิศทางผลกระทบของปัจจัย",
    'Decision Tree': "สร้างกฎการตัดสินใจแบบกิ่งก้านที่เข้าใจง่ายและนำไปปรับใช้ทางกลยุทธ์ธุรกิจได้รวดเร็ว",
    'KNN': "จำแนกกลุ่มลูกค้าโดยดูจากพฤติกรรมที่ใกล้เคียงกันที่สุดของข้อมูลเพื่อนบ้าน",
    'ต้องการความอ่อนโยน': "ปัจจัยสำคัญอันดับ 1: ลูกค้ากลุ่มคุณภาพกังวลเรื่องสารเคมีและการแพ้มากที่สุด",
    'ต้องการสีติดทน': "ประสิทธิภาพพื้นฐาน: แม้จะเป็นออร์แกนิคแต่สีต้องสม่ำเสมอและไม่หลุดลอกง่าย",
    'อายุ (35-54 ปี)': "Winning Zone: กลุ่มวัยทำงานที่มีกำลังซื้อสูงและเริ่มมีปัญหาผมขาวที่ต้องจัดการประจำ",
    'ช่องทางออนไลน์': "แหล่งข้อมูลหลัก: ลูกค้าชอบศึกษาข้อมูล เปรียบเทียบรีวิว และสั่งซื้อผ่านแอปเพื่อความสะดวก",
    'ความคุ้มค่า': "ปัจจัยเสริม: ลูกค้ายินดีจ่ายแพงกว่าเพื่อแลกกับความปลอดภัย แต่ราคาต้องสมเหตุสมผล"
  };
  return descriptions[name] || "วิเคราะห์ Insights จากพฤติกรรมลูกค้าผ่านโมเดล Machine Learning";
};

// --- Custom Tooltip สำหรับกราฟปรอท ---
const ThermometerTooltip = ({ label, value, color }) => (
  <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-2 border-[#B08D57]/20 max-w-[220px] pointer-events-none">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[13px] font-bold text-[#1A1A1A]">{label}</span>
      <span className="text-[14px] font-medium" style={{ color }}>{value.toFixed(1)}%</span>
    </div>
    <div className="h-px w-full bg-[#B08D57]/10 my-2"></div>
    <p className="text-[11px] text-[#666666] leading-relaxed font-light" style={{ fontFamily: "'Mitr', sans-serif" }}>
      {getDetailDescription(label)}
    </p>
  </div>
);

// --- คอมโพเนนต์กราฟแท่งแบบปรอท (Thermometer Bar) ---
const ThermometerBar = ({ label, value, color, delay }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="relative flex items-center gap-4 w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ชื่อ Label ด้านซ้าย */}
      <div className="w-[140px] text-right text-[13px] font-normal text-[#1A1A1A] shrink-0 leading-tight transition-colors group-hover:text-[#8A9A5B]" style={{ fontFamily: "'Mitr', sans-serif" }}>
        {label}
      </div>
      
      {/* รางปรอท (Track) */}
      <div className="flex-1 h-7 bg-[#FAF9F6] rounded-full shadow-inner border border-[#B08D57]/15 relative overflow-hidden group-hover:border-[#8A9A5B]/30 transition-all">
        {/* แถบสี (Fill) */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full rounded-full flex items-center justify-end px-4 shadow-[2px_0_8px_rgba(0,0,0,0.1)]"
          style={{ backgroundColor: color }}
        >
          {/* เปอร์เซ็นต์ข้างในปรอท */}
          <span className="text-white text-[12px] font-medium drop-shadow-sm" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>
            {value.toFixed(1)}%
          </span>
        </motion.div>
      </div>

      {/* Tooltip Popup ตอน Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: -5, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute z-[100] left-[140px] bottom-full mb-2"
          >
            <ThermometerTooltip label={label} value={value} color={color} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SupervisedPage = () => {
  const [formData, setFormData] = useState({ gender: '', age: '', region: '', usedProducts: '', purchaseChannel: '', reason: '', painPoint: '' });
  const [isPredicting, setIsPredicting] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [showPopup, setShowPopup] = useState(false); 
  const [selectedKPI, setSelectedKPI] = useState(null);

  const kpis = [
    { id: 1, title: "Accuracy", enTitle: "ความแม่นยำรวม", desc: "สัดส่วนรวมที่ทายถูกทั้งหมด", icon: Target, testScore: 94.3, trainScore: 98.5, color: "#8A9A5B", detail: "ค่า Accuracy สูงสะท้อนว่าโมเดลสามารถแยกแยะกลุ่มเป้าหมายและกลุ่มทั่วไปได้อย่างถูกต้องแม่นยำในระดับที่น่าเชื่อถือ" },
    { id: 2, title: "Precision", enTitle: "ความชัดเจน", desc: "ความถูกต้องเมื่อทว่าเป็นกลุ่มเป้าหมาย", icon: Activity, testScore: 91.0, trainScore: 95.2, color: "#B08D57", detail: "ช่วยประหยัดงบประมาณการตลาดโดยเน้นไปที่ลูกค้าที่เป็น Winning Zone จริงๆ ลดโอกาสการทายผิดกลุ่ม (False Positive)" },
    { id: 3, title: "Recall", enTitle: "การครอบคลุม", desc: "การค้นพบกลุ่มเป้าหมายที่มีอยู่จริง", icon: History, testScore: 90.0, trainScore: 96.5, highlight: true, color: "#8A9A5B", detail: "ค่านี้สูงแปลว่าเราแทบไม่พลาดโอกาสในการเข้าถึงลูกค้า Winning Zone ที่มีอยู่ในฐานข้อมูลเลย" },
    { id: 4, title: "F1-Score", enTitle: "คะแนนสมดุล", desc: "ค่าเฉลี่ยประสิทธิภาพของโมเดล", icon: Percent, testScore: 92.0, trainScore: 97.1, color: "#B39D73", detail: "เป็นตัวชี้วัดที่สมดุลที่สุดระหว่างความชัดเจนและการครอบคลุม ยืนยันความเสถียรของโมเดล Random Forest" }
  ];

  const handlePredict = () => {
    if (!formData.gender || !formData.age || !formData.region || !formData.usedProducts || !formData.purchaseChannel || !formData.reason || !formData.painPoint) {
      setErrorMsg('กรุณากรอกข้อมูลให้ครบถ้วนทั้ง 7 ข้อ เพื่อความแม่นยำในการวิเคราะห์');
      return;
    }
    setErrorMsg('');
    setIsPredicting(true);
    setTimeout(() => {
      const isGentleColorLover = (formData.reason.includes('อ่อนโยน') || formData.reason.includes('สีติดทน')) && (formData.painPoint.includes('แพ้') || formData.painPoint.includes('สีไม่ติด'));
      setPredictionResult({ isWinningZone: isGentleColorLover, confidence: isGentleColorLover ? Math.floor(Math.random() * 10) + 88 : Math.floor(Math.random() * 20) + 45 });
      setIsPredicting(false);
      setShowPopup(true); 
    }, 1500);
  };

  return (
    <div className="space-y-8 relative">
      
      {/* Header AI Model Section */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[32px] p-8 lg:p-12 shadow-[0_4px_24px_rgb(176,141,87,0.08)] border border-[#B08D57]/20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="space-y-5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#FAF9F6] text-[#8A9A5B] rounded-full text-[11px] font-medium tracking-widest uppercase border border-[#8A9A5B]/30 shadow-sm" style={{ fontFamily: "'Mitr', sans-serif" }}>
            <div className="w-2 h-2 rounded-full bg-[#8A9A5B] animate-pulse"></div> Predictive AI Model
          </div>
          <h2 className="text-3xl lg:text-4xl font-normal text-[#1A1A1A] leading-tight" style={{ fontFamily: "'Mitr', sans-serif" }}>ทำนายโอกาสการเป็นลูกค้า <br className="hidden md:block"/><span className="text-[#8A9A5B]">Winning Zone 🌿</span></h2>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#FAF9F6] p-5 md:p-6 rounded-[24px] text-center border border-[#B08D57]/30 shadow-sm">
             <div className="text-[11px] font-medium text-[#B08D57] mb-2 tracking-widest uppercase">Train Data</div>
             <div className="text-3xl font-medium" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>50</div>
          </div>
          <div className="bg-[#8A9A5B]/10 p-5 md:p-6 rounded-[24px] text-center border border-[#8A9A5B]/30 shadow-sm">
             <div className="text-[11px] font-medium text-[#8A9A5B] mb-2 tracking-widest uppercase">Test Data</div>
             <div className="text-3xl font-medium text-[#8A9A5B]" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>13</div>
          </div>
        </div>
      </motion.div>

      {/* Simulator Card */}
      <Card className="border-t-[6px] border-t-[#8A9A5B] mt-10 p-8 lg:p-10 rounded-[32px]">
        <div className="mb-8 border-b border-[#B08D57]/20 pb-6 text-center md:text-left">
          <h2 className="text-2xl font-medium text-[#1A1A1A] flex items-center justify-center md:justify-start gap-3" style={{ fontFamily: "'Mitr', sans-serif" }}><Leaf className="text-[#8A9A5B]" size={28} /> Prediction Simulator</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { id: 'gender', label: 'เพศ (Gender)', opts: ['หญิง', 'ชาย', 'LGBTQ+'] },
                { id: 'age', label: 'ช่วงอายุ', opts: ['ต่ำกว่า 30 ปี', '30-34 ปี', '35-44 ปี', '45-54 ปี', '55 ปีขึ้นไป'] },
                { id: 'region', label: 'ภูมิภาค', opts: ['กทม. & ปริมณฑล', 'ภาคตะวันตก', 'ภาคตะวันออก', 'ภาคอีสาน', 'ภาคเหนือ', 'ภาคใต้'] },
                { id: 'usedProducts', label: 'รูปแบบผลิตภัณฑ์ที่ใช้', opts: ['แชมพูปิดผมขาว (ซอง)', 'ครีมแบบผสม', 'แบบขวดปั๊ม', 'โฟม/มูส', 'อื่นๆ'] },
                { id: 'purchaseChannel', label: 'ช่องทางการซื้อ', opts: ['ห้าง/ซูเปอร์', 'สะดวกซื้อ', 'ออนไลน์', 'ร้านขายยา', 'ร้านใกล้บ้าน'] },
                { id: 'reason', label: 'เหตุผลหลักที่เลือก', opts: ['อ่อนโยน/ไม่แพ้', 'สีติดทน', 'ราคาคุ้มค่า', 'ใช้ง่าย', 'หาซื้อง่าย'] },
                { id: 'painPoint', label: 'ปัญหาจากสินค้าเดิม', opts: ['แพ้และสีไม่ติด', 'กลิ่นฉุน/ผมเสีย', 'สีหลุดไว', 'ไม่มีปัญหา', 'อื่นๆ'] }
              ].map((f) => (
                <div key={f.id} className={`space-y-2 ${f.id === 'painPoint' ? 'md:col-span-2' : ''}`}>
                  <label className="text-[14px] font-normal text-[#B08D57]" style={{ fontFamily: "'Mitr', sans-serif" }}>{f.label}</label>
                  <select className="w-full p-3.5 bg-[#FAF9F6] border-2 border-[#B08D57]/30 rounded-2xl focus:ring-[#8A9A5B] outline-none font-light" style={{ fontFamily: "'Mitr', sans-serif" }} value={formData[f.id]} onChange={(e) => setFormData({...formData, [f.id]: e.target.value})}>
                    <option value="" disabled>เลือกข้อมูล...</option>
                    {f.opts.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>
            {errorMsg && <div className="mt-4 p-4 bg-[#F5F5DC] text-[#987642] border-2 border-[#B08D57]/40 rounded-[20px] text-sm flex items-center gap-3"><AlertTriangle size={20} />{errorMsg}</div>}
            <button onClick={handlePredict} disabled={isPredicting} className="w-full px-8 py-4 bg-[#8A9A5B] text-white font-medium text-[16px] rounded-[20px] hover:bg-[#78884c] transition-all disabled:opacity-70 flex justify-center gap-3" style={{ fontFamily: "'Mitr', sans-serif" }}>
              {isPredicting ? <Loader2 className="animate-spin" /> : <Sparkles />} {isPredicting ? 'กำลังวิเคราะห์...' : 'Analyze Persona'}
            </button>
          </div>
          <div className="lg:col-span-2 bg-[#FAF9F6] rounded-[32px] border-2 border-[#B08D57]/20 p-8 flex flex-col items-center justify-center relative min-h-[300px]">
            <AnimatePresence mode="wait">
              {!predictionResult && !isPredicting && <motion.div key="empty" className="text-center text-[#B08D57]/80"><Target size={40} className="mx-auto mb-4 opacity-30" /><p style={{ fontFamily: "'Mitr', sans-serif" }}>รอผลการวิเคราะห์</p></motion.div>}
              {isPredicting && <motion.div key="loading" className="text-center text-[#8A9A5B]"><div className="w-16 h-16 border-4 border-[#8A9A5B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div><p className="text-xs uppercase tracking-widest">Scanning...</p></motion.div>}
              {predictionResult && !isPredicting && (
                <motion.div key="result" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center w-full">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-xl mb-6 text-3xl text-white font-medium ${predictionResult.isWinningZone ? 'bg-[#8A9A5B]' : 'bg-[#B39D73]'}`} style={{ fontFamily: "'Chakra Petch', sans-serif" }}>{predictionResult.confidence}%</div>
                  <h4 className="text-xl font-medium mb-2" style={{ fontFamily: "'Mitr', sans-serif" }}>{predictionResult.isWinningZone ? 'Winning Zone' : 'General Segment'}</h4>
                  <button onClick={() => setShowPopup(true)} className="text-[#B08D57] underline text-xs">ดูรายละเอียด</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Card>

      {/* KPI Cards Section */}
      <div className="pt-10">
        <div className="flex items-center gap-3 mb-6">
          <Info size={20} className="text-[#B08D57]" />
          <p className="text-sm text-[#B08D57]" style={{ fontFamily: "'Mitr', sans-serif" }}>คลิกที่การ์ดเพื่อดูรายละเอียดความหมายของแต่ละค่า</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {kpis.map((kpi) => (
            <ModelKPICard key={kpi.id} title={kpi.title} enTitle={kpi.enTitle} desc={kpi.desc} icon={kpi.icon} testScore={kpi.testScore} trainScore={kpi.trainScore} highlight={kpi.highlight} onClick={() => setSelectedKPI(kpi)} />
          ))}
        </div>
      </div>

      {/* 4. Thermometer Bars Section (Infographic Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        
        {/* Algorithm Performance Card */}
        <Card title="Algorithm Performance" className="rounded-[32px] p-8 border-[#B08D57]/30">
          <div className="flex flex-col justify-center h-full space-y-6 mt-4">
            {supervisedResults.map((item, index) => (
              <ThermometerBar key={index} label={item.name} value={item.f1 * 100} color="#8A9A5B" delay={index * 0.1} />
            ))}
          </div>
          <p className="text-center text-[#B08D57]/60 text-[11px] mt-8 italic">* เลื่อนเมาส์ชี้เพื่อดูอินไซต์ของแต่ละอัลกอริทึม</p>
        </Card>

        {/* Feature Importance Card */}
        <Card title="Feature Importance" className="rounded-[32px] p-8 border-[#B08D57]/30">
          <div className="flex flex-col justify-center h-full space-y-6 mt-4">
            {featureImportance.map((item, index) => (
              <ThermometerBar key={index} label={item.feature} value={item.importance * 100} color="#B39D73" delay={index * 0.1} />
            ))}
          </div>
          <p className="text-center text-[#B08D57]/60 text-[11px] mt-8 italic">* เลื่อนเมาส์ชี้เพื่อดูว่าทำไมตัวแปรนี้ถึงสำคัญ</p>
        </Card>

      </div>

      {/* --- KPI Popup Modal --- */}
      <AnimatePresence>
        {selectedKPI && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm cursor-pointer" onClick={() => setSelectedKPI(null)} />
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }} className="relative bg-white w-full max-w-2xl rounded-[32px] p-8 md:p-12 shadow-2xl border-4 border-white z-[151]">
              <button onClick={() => setSelectedKPI(null)} className="absolute top-6 right-6 text-[#B08D57] p-2 hover:bg-gray-50 rounded-full transition-colors"><X size={24}/></button>
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: selectedKPI.color }}><selectedKPI.icon size={32}/></div>
                <div>
                  <h2 className="text-3xl font-medium text-[#1A1A1A]" style={{ fontFamily: "'Mitr', sans-serif" }}>{selectedKPI.title}</h2>
                  <p className="text-[#B08D57] text-xs font-bold uppercase tracking-widest">{selectedKPI.enTitle}</p>
                </div>
              </div>
              <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-[#B08D57]/20 mb-8">
                <h4 className="text-sm font-medium mb-2" style={{ fontFamily: "'Mitr', sans-serif" }}>ความหมายเชิงธุรกิจ:</h4>
                <p className="text-gray-600 font-light leading-relaxed" style={{ fontFamily: "'Mitr', sans-serif" }}>{selectedKPI.detail}</p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border-2 border-[#8A9A5B]/20 text-center">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Test Score</span>
                  <span className="text-4xl font-medium text-[#8A9A5B]" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>{selectedKPI.testScore}%</span>
                </div>
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 text-center">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Train Score</span>
                  <span className="text-4xl font-medium text-gray-300" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>{selectedKPI.trainScore}%</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Prediction Simulator Result Popup --- */}
      <AnimatePresence>
        {showPopup && predictionResult && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm" onClick={() => setShowPopup(false)} />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ type: "spring", damping: 25 }} className="relative bg-[#FAF9F6] w-full max-w-md rounded-[32px] px-6 pb-8 pt-12 shadow-2xl flex flex-col items-center text-center border-4 border-white z-50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[12px] font-medium text-[#B08D57] tracking-widest uppercase bg-white px-6 py-2 rounded-full shadow-md border border-[#B08D57]/20">ผลการวิเคราะห์ AI</div>
              <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-[#B08D57]"><X size={18} /></button>
              {predictionResult.isWinningZone && <GreenTeaConfetti />}
              <div className="relative z-10 w-full">
                <div className={`w-28 h-28 rounded-full flex items-center justify-center mx-auto shadow-xl mb-6 text-4xl text-white font-medium ring-4 ring-white ${predictionResult.isWinningZone ? 'bg-[#8A9A5B]' : 'bg-[#B39D73]'}`} style={{ fontFamily: "'Chakra Petch', sans-serif" }}>{predictionResult.confidence}%</div>
                <h4 className="text-2xl font-medium text-[#1A1A1A] mb-3" style={{ fontFamily: "'Mitr', sans-serif" }}>{predictionResult.isWinningZone ? 'Gentle Perfectionists' : 'General Segment'}</h4>
                <p className="text-sm text-gray-600 px-4 mb-8 font-light" style={{ fontFamily: "'Mitr', sans-serif" }}>{predictionResult.isWinningZone ? 'คุณคือกลุ่มเป้าหมายคุณภาพสูงที่มีแนวโน้มตอบรับแคมเปญออร์แกนิค!' : 'ลูกค้ากลุ่มนี้ให้ความสำคัญกับปัจจัยทั่วไป (ราคา/ใช้ง่าย) เป็นหลัก'}</p>
                <div className="w-full bg-white rounded-2xl py-4 border-2 border-[#B08D57]/20 flex justify-between px-6 shadow-sm items-center">
                  <span className="text-xs font-medium text-[#B08D57] tracking-widest uppercase">Confidence Score</span>
                  <span className="text-xl font-medium" style={{ fontFamily: "'Chakra Petch', sans-serif" }}>{predictionResult.confidence}%</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SupervisedPage;