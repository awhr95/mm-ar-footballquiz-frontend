import "./LosePage.scss";

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";

const Lose = () => {
    const { selectedLeague, selectedYear } = useParams();
    const [topScorers, setTopScorers] = React.useState([]);
    const [topScorer, setTopScorer] = React.useState(null); 
    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchTopScorers = async () => {
          try {
            const response = await axios.get(`http://localhost:8100/topScorers?league=${selectedLeague}&season=${selectedYear}`);
            setTopScorers(response.data);
            setTopScorer(response.data[0]);
          } catch (error) {
            console.error('Error fetching top scorers:', error);
          }
        };
    
        fetchTopScorers();
      }, [selectedLeague, selectedYear]);
    

    
      const handleQuitButtonClick = () => {
        navigate('/results');
      };
    
      return (
        <div>
          <Header />
          <h1>WRONG!</h1>
          <h1>GAME OVER</h1>
          <h2>The Top Scorer Was</h2>
          <div className="top-scorer">
            {topScorer && (
              <div className="top-scorer__wrapper">
                <article className="top-scorer__playerarticle">
                  <img className="top-scorer__playerimg" src={topScorer.photo} alt={topScorer.name} />
                  <div className="top-scorer__titlecontainer">
                    <div>
                      <h2 className="top-scorer__playertitle">{topScorer.name}</h2>
                      <p className="top-scorer__playerteam">{topScorer.team}</p>
                    </div>
                    <img className="top-scorer__teamlogo" src={topScorer.teamLogo} alt={topScorer.team} />
                  </div>
                  <h2>Goals: {topScorer.goals}</h2>
                </article>
              </div>
            )}
          </div>
        
          <h2>Other Top Scorers</h2>
    <ul>
      {topScorers.slice(1, 10).map((scorer) => (
        <li key={scorer.playerId}>
          <div className="other-top-scorers__wrapper">
            <article className="other-top-scorers__playerarticle">
              <img className="other-top-scorers__playerimg" src={scorer.photo} alt={scorer.name} />
              <div className="other-top-scorers__titlecontainer">
                <div>
                  <h2 className="other-top-scorers__playertitle">{scorer.name}</h2>
                  <p className="other-top-scorers__playerteam">{scorer.team}</p>
                </div>
                <img className="other-top-scorers__teamlogo" src={scorer.teamLogo} alt={scorer.team} />
              </div>
            </article>
            <p>Goals: {scorer.goals}</p>
          </div>
        </li>
      ))}
    </ul>
    <button onClick={handleQuitButtonClick}>QUIT</button>
    <Nav />
  </div>
);
    }
    
export default Lose;