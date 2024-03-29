import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Hompage";
import Login from "./components/login/Login";
import Quiz from "./pages/quiz/Quiz";
import QuizBody from "./components/quiz-body/QuizBody";
import Leaderboard from "./pages/leaderboard/LeaderBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-body/:selectedLeague/:selectedYear" element={<QuizBody />} />
        <Route path="/quiz/:scorerId" element={<Quiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
