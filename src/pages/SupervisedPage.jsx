import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Leaf, Loader2, Sparkles, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

const SupervisedPage = () => {
  const [formData, setFormData] = useState({ gender: '', age: '', region: '', usedProducts: '', purchaseChannel: '', reason: '', painPoint: '' });
  const [isPredicting, setIsPredicting] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);

  const handlePredict = async () => {
    setIsPredicting(true);
    try {
      // เรียก API ไปที่ Backend Python
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPredictionResult(data);
    } catch (error) {
      console.error("Error predicting:", error);
    } finally {
      setIsPredicting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-[32px] border border-[#B08D57]/20 shadow-sm">
        <h2 className="text-2xl font-serif mb-6 flex items-center gap-3">
            <Target className="text-[#8A9A5B]" /> Prediction Simulator
        </h2>
        {/* ใส่ Form 7 ข้อของคุณที่นี่ */}
        <button onClick={handlePredict} className="w-full bg-[#8A9A5B] text-white p-4 rounded-2xl">
            {isPredicting ? <Loader2 className="animate-spin mx-auto" /> : "Analyze Persona"}
        </button>
      </div>
    </div>
  );
};
export default SupervisedPage;