import "./WinPage.scss";

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import { GamePlayerContext } from "../../context/GamePlayerContext";

const Win = () => {

  const { selectedLeague, selectedYear } = useParams();
  const [topScorers, setTopScorers] = useState([]);
  const [topScorer, setTopScorer] = useState(null); 
  const { gamePlayer } = useContext(GamePlayerContext);
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentPlayerScore, setCurrentPlayerScore] = useState(0);
  const navigate = useNavigate();
  


 useEffect(() => {
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

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('http://localhost:8100/players');
        const leaderboardData = response.data;
        const sortedLeaderboard = leaderboardData.sort((a, b) => b.score - a.score);
        
        let position = 1;
        for (let i = 0; i < sortedLeaderboard.length; i++) {
          if (i > 0 && sortedLeaderboard[i].score === sortedLeaderboard[i - 1].score) {
            sortedLeaderboard[i].position = sortedLeaderboard[i - 1].position;
          } else {
            sortedLeaderboard[i].position = position;
          }
          position++;
        }
        setLeaderboard(sortedLeaderboard);
    
        const currentPlayerScore = leaderboardData.find(player => player.id === gamePlayer.id)?.score;
        
        if (currentPlayerScore !== undefined) {
        
          setCurrentPlayerScore(currentPlayerScore);
        } else {
          console.error('Current game player not found in the leaderboard data.');
        }
        

      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      }
    };
      fetchLeaderboard();
    }, [gamePlayer.id]);

    useEffect(() => {
      if (gamePlayer && leaderboard.length > 0) {
      const currentPlayer = leaderboard.find(player => player.id === gamePlayer.id);
      const adjustedPlayerPosition = currentPlayer ? currentPlayer.position : "Not Ranked";
      console.log("Current Player Position:", adjustedPlayerPosition);
      }
    }, [gamePlayer, leaderboard]);

  const handleContinueButtonClick = () => {
    navigate('/quiz');
  };


const currentPosition = leaderboard.find(player => player.id === gamePlayer?.id)?.position || "Not Ranked";

  return (
    <div>
      <Header />
      <h1>CORRECT!</h1>
      <h1>You are a genius</h1>
      <h2>The Top Scorer Was Indeed</h2>
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
      <h1>Your current score is {currentPlayerScore}</h1>
      <h1>and your position on the leaderboard is {currentPosition}</h1>
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
      <button onClick={handleContinueButtonClick}>CONTINUE</button>

      <Nav />
    </div>
  );
};

export default Win;

