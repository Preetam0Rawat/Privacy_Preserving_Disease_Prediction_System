import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div>No result</div>;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-2xl font-bold mb-6">Prediction Results</h2>

      {Object.entries(state).map(([k, v]) => (
        <p key={k} className="mb-2">
          <b>{k.toUpperCase()}</b> → {v}
        </p>
      ))}

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded"
      >
        Home
      </button>
    </div>
  );
}
