import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-sky-300">
      <h1 className="text-3xl font-bold mb-8">
        Privacy Preserving Disease Prediction
      </h1>

      <button
        onClick={() => navigate("/heart")}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700"
      >
        Heart Disease Prediction
      </button>
    </div>
  );
}
