from fastapi import FastAPI
import logic

app = FastAPI()

MODEL = "Models/heart_model.pkl"
SCALER = "Models/heart_scaler.pkl"

@app.post("/predict")
def predict(data: list[float]):
    return {
        "svm": logic.predict_heart(MODEL, SCALER, data),
        "ckks": logic.predict_heart_fhe(MODEL, SCALER, data),
        "ckks_dp": logic.predict_heart_fhe_dp(MODEL, SCALER, data),
        "paillier": logic.predict_heart_phe(MODEL, SCALER, data),
        "dp": logic.predict_heart_dp(MODEL, SCALER, data)
    }
