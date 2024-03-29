import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import QuizBody from "./QuizBody";

const Quiz = () => {
  const navigate = useNavigate();

  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleLeagueChange = (event) => {
    setSelectedLeague(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedLeague && selectedYear) {
      navigate(`/quiz-body?leagueId=${selectedLeague}&year=${selectedYear}`);
  }
};

return (
  <div>
    <Header />
    <form onSubmit={handleSubmit}>
      <label>Select League:</label>
      <select value={selectedLeague} onChange={handleLeagueChange}>
        <option value="">Select League</option>
        <option value="39">Premiere League 1</option>
        <option value="1">World Cup</option>
        <option value="2">Uefa Champions League</option>
        <option value="45">FA Cup</option>
        <option value="61">Ligue 1, France</option>
        <option value="78">Bundesliga, Germany</option>
        <option value="135">Serie A, Italy</option>
        <option value="140">La Liga, Spain</option>
        <option value="78">Pro League, Belgium</option>
        <option value="120">Division 1, Denmark</option>
        <option value="183">Scotish Premiere League</option>
      </select>

      <label>Select Year:</label>
      <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Select Year</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        {/* Add more year options as needed - maybe this should be user just inputs the year or it's randomised? */}
      </select>

      <button type="submit">Start Quiz</button>
    </form>
    {/* <QuizBody selectedLeague={selectedLeague} selectedYear={selectedYear} /> */}
  </div>
);
}

export default Quiz;