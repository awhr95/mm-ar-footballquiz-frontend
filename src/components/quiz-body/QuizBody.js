import "./QuizBody.scss";

import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";


const QuizBody = () => {
  const { selectedLeague, selectedYear } = useParams();
  const navigate = useNavigate();
  const [topScorer, setTopScorer] = useState(null);
  const [scorersRandomised, setScorersRandomised] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

    useEffect(() => {
        const fetchTopScorers = async () => {
            try {
              const response = await axios.get(`http://localhost:8100/topScorers?league=${selectedLeague}&season=${selectedYear}`);
          setTopScorer(response.data[[1]]);
          fetchRandomizedScorers();
        } catch (error) {
          console.error("Error fetching top scorers:", error);
        }
        };

        const fetchRandomizedScorers = async () => {
          try {
            const response = await axios.get(`http://localhost:8100/topScorers/randomizedTopFiveScorers`);
            setScorersRandomised(response.data);
          } catch (error) {
            console.error("Error fetching randomized scorers:", error);
          }
        };
          
        if (quizStarted) {
        fetchTopScorers();
    
    }   
    }, [quizStarted, selectedLeague, selectedYear]);

    

    const handleStartQuiz = () => {
      setQuizStarted(true);
    };

    const handlePlayerClick = (playerId) => {
      if (playerId === topScorer.playerId) {
        navigate('/win');
      } else {
        navigate('/lose');
      }
    };


      const getLeagueName = (leagueNumber) => {
        console.log("League Number:", leagueNumber);
        switch (leagueNumber) {
          case "39":
            return "Premier League";
          case "1":
            return "World Cup";
          case "2":
            return "Uefa Champions League";
          case "45":
            return "FA Cup";
          case "61":
            return "Ligue 1, France";
          case "78":
            return "Bundesliga, Germany";
          case "135":
            return "Serie A, Italy";
          case "140":
            return "La Liga, Spain";
          case "144":
            return "Pro League, Belgium";
          case "120":
            return "Division 1, Denmark";
          case "183":
            return "Scottish Premier League";
          case "40":
            return "Championship, England";
          case "41" :
            return "League 1, England"
            
          default:
            return "";
        }
      };

      QuizBody.propTypes = {
        selectedLeague: PropTypes.string.isRequired,
        selectedYear: PropTypes.string.isRequired
      };
      
      console.log("Selected League:", selectedLeague);
      console.log("Selected Year", selectedYear);
      
      return (
        <div className="quizbody">
          {!quizStarted ? (
            <button className="quizbody__start-button" onClick={handleStartQuiz}>
              Start Playing The Quiz
            </button>
          ) : (
            <>
              <h2 className="quizbody__subtitle">Click on the player you think is the top scorer</h2>
              <h1 className="quizbody__title">{getLeagueName(selectedLeague)} - {selectedYear}</h1>
              <section className="quizsection">
                {scorersRandomised.map((scorer) => (
                  <div
                    className="playerbutton"
                    key={scorer.playerId}
                    onClick={() => handlePlayerClick(scorer.playerId)}
                  >
                    <article className="playerarticle">
                      <img
                        className="playerimg"
                        src={scorer.photo}
                        alt={scorer.name}
                      />
                      <div className="titlecontainer">
                        <div>
                          <h2 className="playertitle">{scorer.name}</h2>
                          <p className="playerteam">{scorer.team}</p>
                        </div>
                        <img
                          className="teamlogo"
                          src={scorer.teamLogo}
                          alt={scorer.team}
                        />
                      </div>
                    </article>
                  </div>
                ))}
              </section>
            </>
          )}
        </div>
      );
      } 
export default QuizBody;
      
