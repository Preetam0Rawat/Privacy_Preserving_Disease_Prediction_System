import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeartForm from "./pages/HeartForm";
import Result from "./pages/Result";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heart" element={<HeartForm />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}
