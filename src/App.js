import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Hompage";
import Quiz from "./pages/quiz/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/:scorerId" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
