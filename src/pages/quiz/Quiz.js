import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifySuccess, notifyInfo, notifyError } from "../../utils/utils";

import QuizBody from "../../components/quiz-body/QuizBody";

const Quiz = () => {
  const navigate = useNavigate();

  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  const handleLeagueChange = (event) => {
    setSelectedLeague(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedLeague && selectedYear) {
      setQuizStarted(true);

        navigate(`/quiz-body/${selectedLeague}/${selectedYear}`);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>Select League:</label>
        <select value={selectedLeague} onChange={handleLeagueChange}>
          <option value="">Select League</option>
          <option value="39">Premiere League</option>
          <option value="1">World Cup</option>
          <option value="2">Uefa Champions League</option>
          <option value="45">FA Cup</option>
          <option value="61">Ligue 1, France</option>
          <option value="78">Bundesliga, Germany</option>
          <option value="135">Serie A, Italy</option>
          <option value="140">La Liga, Spain</option>
          <option value="144">Pro League, Belgium</option>
          <option value="120">Division 1, Denmark</option>
          <option value="183">Scottish Premiere League</option>
          <option value="40">Championship, England</option>
          <option value="41">League 1, England</option>
        </select>

        <label>Select Year:</label>
        <select value={selectedYear} onChange={handleYearChange}>
        <option value="">Select Year</option>
  {selectedLeague === '1' ? (
    ['2010', '2014', '2018', '2022'].map(year => (
      <option key={year} value={year}>
        {year}
      </option>
    ))
  ) : (
    ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015','2014', '2013', '2012', '2011', '2010',].map(year => (
      <option key={year} value={year}>
        {year}
      </option>
    ))
  )}
</select>

        <button type="submit">START</button>
      </form>

      {quizStarted && (
        <QuizBody selectedLeague={selectedLeague} selectedYear={selectedYear} />
      )}
    </div>
  );
};

export default Quiz;
