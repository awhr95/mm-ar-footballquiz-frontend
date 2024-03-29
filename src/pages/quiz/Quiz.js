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
      notifySuccess("Quiz Starting!");
      setTimeout(() => {
        navigate(`/quiz-body?leagueId=${selectedLeague}&year=${selectedYear}`);
      }, 5000);
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
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          {/* Add more year options as needed - maybe this should be user just inputs the year or it's randomized? */}
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
