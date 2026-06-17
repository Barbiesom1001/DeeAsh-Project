// src/data/mockData.js

export const supervisedResults = [
  { name: 'Random Forest', f1: 0.92, accuracy: 0.94, recall: 0.90, precision: 0.91 },
  { name: 'Gradient Boosting', f1: 0.89, accuracy: 0.91, recall: 0.88, precision: 0.90 },
  { name: 'Logistic Reg', f1: 0.85, accuracy: 0.87, recall: 0.84, precision: 0.86 },
  { name: 'Decision Tree', f1: 0.82, accuracy: 0.85, recall: 0.81, precision: 0.83 },
  { name: 'KNN', f1: 0.78, accuracy: 0.80, recall: 0.75, precision: 0.77 },
];

export const featureImportance = [
  { feature: 'ต้องการความอ่อนโยน', importance: 0.35 },
  { feature: 'ต้องการสีติดทน', importance: 0.28 },
  { feature: 'อายุ (35-54 ปี)', importance: 0.15 },
  { feature: 'ช่องทางออนไลน์', importance: 0.12 },
  { feature: 'ความคุ้มค่า', importance: 0.10 },
];

export const profileGender = [
  { name: 'หญิง', value: 85, desc: 'กลุ่มหลักที่ให้ความสำคัญกับการดูแลตัวเองและสุขภาพผม' },
  { name: 'ชาย', value: 10, desc: 'มีสัดส่วนน้อย แต่มักซื้อตามคำแนะนำหรือเน้นความรวดเร็ว' },
  { name: 'LGBTQ+', value: 5, desc: 'เปิดรับแบรนด์ใหม่ที่ตอบโจทย์ความงามที่ปลอดภัย' }
];

export const profileAge = [
  { name: '<30', value: 5, desc: 'กลุ่มเริ่มมีผมขาวก่อนวัย เล็กน้อย' },
  { name: '30-34', value: 10, desc: 'เริ่มตระหนักเรื่องผมขาว มองหาสินค้าป้องกัน' },
  { name: '35-44', value: 35, desc: 'กลุ่มศักยภาพสูง มีผมขาวชัดเจน มีกำลังซื้อสินค้าพรีเมียม' },
  { name: '45-54', value: 40, desc: 'Winning Zone หลัก มีความภักดีต่อแบรนด์สูงถ้าตอบโจทย์' },
  { name: '>55', value: 10, desc: 'เน้นความง่าย ปลอดภัย และไม่แพ้เป็นหลัก' }
];

export const profileRegion = [
  { name: 'กทม. & ปริมณฑล', value: 55, desc: 'กระจุกตัวสูงสุด เปิดรับเทรนด์ออร์แกนิคได้ไว' },
  { name: 'ภาคกลาง/ตะวันออก', value: 15, desc: 'กลุ่มหัวเมืองที่มีกำลังซื้อใกล้เคียงเมืองหลวง' },
  { name: 'ภาคเหนือ', value: 10, desc: 'ใส่ใจสุขภาพและความเป็นธรรมชาติ' },
  { name: 'ภาคอีสาน', value: 10, desc: 'เริ่มให้ความสนใจสินค้าลดสารเคมี' },
  { name: 'ภาคใต้', value: 10, desc: 'มีกำลังซื้อเฉพาะกลุ่ม' }
];

export const profileProducts = [
  { name: 'แชมพูซอง', value: 45, desc: 'เทรนด์มาแรงสุด เพราะใช้งานง่าย ประหยัดเวลา' },
  { name: 'ครีมแบบผสม', value: 35, desc: 'กลุ่มดั้งเดิมที่ชินกับรูปแบบเดิม แต่เบื่อสารเคมี' },
  { name: 'ขวดปั๊ม', value: 10, desc: 'ชอบความคุ้มค่า ใช้ได้หลายครั้ง' },
  { name: 'โฟม/มูส', value: 5, desc: 'เน้นสีแฟชั่นและการปกปิดเบาๆ' },
  { name: 'อื่นๆ', value: 5, desc: 'สินค้าชั่วคราว เช่น มาสคาร่าปิดผมขาว' }
];

export const profileChannel = [
  { name: 'ซูเปอร์/ห้าง', value: 40, desc: 'ช่องทางหลัก ซื้อพร้อมของใช้เข้าบ้าน' },
  { name: 'ออนไลน์', value: 30, desc: 'เติบโตสูง ซื้อซ้ำบ่อย อ่านรีวิวก่อนตัดสินใจ' },
  { name: 'ร้านขายยา/บิวตี้', value: 15, desc: 'มองหาความน่าเชื่อถือ คำแนะนำจากเภสัชฯ' },
  { name: 'ร้านสะดวกซื้อ', value: 10, desc: 'ซื้อฉุกเฉิน ต้องการความรวดเร็ว' },
  { name: 'ร้านใกล้บ้าน', value: 5, desc: 'กลุ่มผู้สูงวัยที่เดินทางไม่ไกล' }
];

export const profileReason = [
  { name: 'อ่อนโยน/ไม่แพ้', value: 50, desc: 'ปัจจัยอันดับ 1 ของกลุ่ม Winning Zone (สุขภาพหนังศีรษะ)' },
  { name: 'สีติดทน', value: 30, desc: 'ความคาดหวังพื้นฐานที่ขาดไม่ได้' },
  { name: 'ใช้ง่าย', value: 10, desc: 'ไม่ต้องพึ่งร้านทำผม ทำเองได้' },
  { name: 'ราคา/คุ้มค่า', value: 5, desc: 'มีผลต่อการตัดสินใจน้อยลงหากสินค้าดีจริง' },
  { name: 'หาซื้อง่าย', value: 5, desc: 'ปัจจัยเสริมความสะดวก' }
];

export const profilePainPoint = [
  { name: 'แพ้และสีไม่ติด', value: 40, desc: 'Pain Point สูงสุดที่ทำให้เปลี่ยนแบรนด์' },
  { name: 'กลิ่นฉุน/ผมเสีย', value: 30, desc: 'ทนไม่ได้กับเคมีรุนแรง ต้องการฟื้นฟู' },
  { name: 'สีไม่ติด/หลุดไว', value: 15, desc: 'ปัญหาเดิมๆ ของแบรนด์ออร์แกนิคในตลาด' },
  { name: 'ปัญหาอื่นๆ', value: 10, desc: 'เช่น เลอะเทอะ ใช้งานยุ่งยาก' },
  { name: 'ไม่มีปัญหา', value: 5, desc: 'กลุ่มที่เพิ่งเริ่มใช้เป็นครั้งแรก' }
];

export const teamMembers = [
  { 
    id: '1', 
    name: 'ทิพวรรณ ยิ้มเนียม', 
    studentId: '1660903921', 
    role: 'Frontend / Dashboard Developer', 
    responsibility: 'พัฒนาและออกแบบหน้าจอ Dashboard (Frontend) สร้าง Data Visualization ที่โต้ตอบได้ รวมถึงพัฒนาระบบหลังบ้าน (Backend) เพื่อจัดการและเชื่อมต่อข้อมูลผลลัพธ์จากโมเดล AI มาแสดงผลอย่างมีประสิทธิภาพ' 
  },
  { 
    id: '2', 
    name: 'สิริกานต์ ปุริสังคหะ', 
    studentId: '1660904101', 
    role: 'Machine Learning Engineer', 
    responsibility: 'ออกแบบและพัฒนาโมเดล Machine Learning ทั้ง Unsupervised (K-Means, PCA) และ Supervised (Random Forest) เพื่อจำแนกกลุ่มลูกค้า ทำนาย Winning Zone และปรับจูนประสิทธิภาพของโมเดล' 
  },
  { 
    id: '3', 
    name: 'อรพินธ์ นาคุณ', 
    studentId: '1660904689', 
    role: 'Business Analyst, Data Engineer', 
    responsibility: 'รับผิดชอบการจัดการและเตรียมข้อมูล (Data Engineering) ตลอดจนนำผลลัพธ์จาก Data Science มาวิเคราะห์เชิงธุรกิจ (Business Analyst) เพื่อสกัด Insights และวางกลยุทธ์การสื่อสารการตลาด' 
  },
];

export const generatePCA = () => {
  let data = [];
  for(let i=0; i<25; i++) data.push({ x: Math.random()*30+10, y: Math.random()*40+20, cluster: 'The Gentle Perfectionists', color: '#8A9A5B' });
  for(let i=0; i<22; i++) data.push({ x: Math.random()*30+50, y: Math.random()*30+50, cluster: 'The Speed & Ease', color: '#B08D57' });
  for(let i=0; i<16; i++) data.push({ x: Math.random()*30+40, y: Math.random()*20+10, cluster: 'The Price Sensitive', color: '#B39D73' });
  for(let i=0; i<3; i++) data.push({ x: Math.random()*90, y: Math.random()*90, cluster: 'Anomaly', color: '#8b7355' });
  return data;
};
export const pcaMockData = generatePCA();