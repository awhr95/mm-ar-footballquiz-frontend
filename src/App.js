import "./app.scss";

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Login from "./components/login/Login";
import Quiz from "./pages/quiz/Quiz";
import QuizBody from "./components/quiz-body/QuizBody";
import Leaderboard from "./pages/leaderboard/LeaderBoard";
import Win from "./pages/winpage/WinPage";
import Lose from "./pages/losepage/LosePage";
import Results from "./pages/resultspage/ResultsPage";
import GamePlayerProvider from "./context/GamePlayerContext";

const App = () => {
  return (
    <GamePlayerProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz-body/:selectedLeague/:selectedYear" element={<QuizBody />} />
          <Route path="/quiz/:scorerId" element={<Quiz />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/win/:selectedLeague/:selectedYear" element={<Win />} />
          <Route path="/lose/:selectedLeague/:selectedYear" element={<Lose />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </GamePlayerProvider>
  );
}

export default App;
