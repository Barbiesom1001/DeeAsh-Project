from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("best_supervised_model.pkl")
scaler = joblib.load("minmax_scaler.pkl")

class PredictRequest(BaseModel):
    gender: str
    age: str
    region: str
    usedProducts: str
    purchaseChannel: str
    reason: str
    painPoint: str

@app.post("/predict")
async def predict(request: PredictRequest):
    try:
        # จำลองการ Mapping ข้อมูล (ต้องปรับให้ตรงกับ LabelEncoder ตอน Train)
        # ตัวอย่าง: 
        input_data = {
            'gender_encoded': [1 if request.gender == 'หญิง' else 0],
            'age_encoded': [2], # ใส่ค่าตามการ Mapping ของคุณ
            'region_encoded': [1],
            'pain_points_std_encoded': [1],
            'brand_reason_std_encoded': [1]
        }
        # เพิ่ม One-hot encoding สำหรับ channels ตามชื่อใน scaler.feature_names_in_
        
        df = pd.DataFrame(input_data)
        # ตรวจสอบว่า columns ครบตามที่ scaler ต้องการ
        prediction = model.predict(df)[0]
        prob = model.predict_proba(df)[0]
        
        return {
            "isWinningZone": bool(prediction == 1),
            "confidence": round(float(np.max(prob)) * 100, 2)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))