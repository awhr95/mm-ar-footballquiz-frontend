import "./QuizBody.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuizBody = () => {
  const navigate = useNavigate();
  const [scorersRandomised, setScorersRandomised] = useState([]);
  const [topScorer, setTopScorer] = useState(null);


    useEffect(() => {
    const fetchRandomizedScorers = async () => {
      try {
        const response = await axios.get(`/api/topScorers?league=${selectedLeague}&season=${selectedYear}`);
        setScorersRandomised(response.data);
        setTopScorer(response.data[0]);
      } catch (error) {
        console.error("Error fetching randomized scorers:", error);
      }
    };
    fetchRandomizedScorers();
    }, [selectedLeague, selectedYear]);

    const handlePlayerClick = (playerId) => {
      if (playerId === topScorer.playerId) {
        navigate("/win");
      } else {
        navigate("/lose");
      } 
      };
      
  return (
    <div className="quizbody">
      <h1 className="quizbody__title">{league} - {year}</h1>
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
                  alt="player-photo"
                  src={scorer.photo}
                />
                <div className="titlecontainer">
                  <div>
                    <h2 className="playertitle">{scorer.name}</h2>
                    <p className="playerteam">{scorer.team}</p>
                  </div>

                  <img
                    className="teamlogo"
                    alt="team-logo"
                    src={scorer.teamLogo}
                    />
                </div>
              </article>
            </div>

        ))}
      </section>
    </div>
  );
  }
export default QuizBody;
