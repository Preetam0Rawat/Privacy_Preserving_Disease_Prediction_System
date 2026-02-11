import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { predictHeart } from "../services/api";

const fields = [
  "age","sex","cp","trestbps","chol","fbs",
  "restecg","thalach","exang","oldpeak","slope","ca","thal"
];

export default function HeartForm() {
  const navigate = useNavigate();

  const [values, setValues] = useState(Array(13).fill(0));
  const [loading, setLoading] = useState(false);

  const handleChange = (i, val) => {
    const newVals = [...values];
    newVals[i] = Number(val);
    setValues(newVals);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const result = await predictHeart(values);
    setLoading(false);

    navigate("/result", { state: result });
  };

  return (
    <div className="p-10 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Enter Patient Data</h2>

      <div className="grid grid-cols-2 gap-4">
        {fields.map((f, i) => (
          <input
            key={i}
            type="number"
            step="0.01"
            placeholder={f}
            className="p-2 border rounded"
            onChange={(e) => handleChange(i, e.target.value)}
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded"
      >
        {loading ? "Predicting..." : "Submit"}
      </button>
    </div>
  );
}
