import React, { createContext, useState } from 'react';
import axios from 'axios';

export const GamePlayerContext = createContext();

export const GamePlayerProvider = ({ children }) => {
  const [gamePlayer, setGamePlayer] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [playedGames, setPlayedGames] = useState([]);

  const handleLogin = async (playerName) => {
    try {
      
      const response = await axios.get('http://localhost:8100/players');
      const currentPlayer = response.data.find(player => player.name === playerName);
    
      
      setGamePlayer(currentPlayer);
      setIsLoggedIn(!!currentPlayer);
      setPlayedGames([]);
    } catch (error) {
      console.error('Error fetching game player:', error);
    }
  };

  const addPlayedGame = (league, year) => {
    const newPlayedGame = { league, year };
    setPlayedGames(prevPlayedGames => [newPlayedGame, ...prevPlayedGames]);
  };

  console.log('Played games:', playedGames);

  return (
    <GamePlayerContext.Provider value={{ gamePlayer, isLoggedIn, handleLogin, playedGames, addPlayedGame }}>
      {children}
    </GamePlayerContext.Provider>
  );
};

export default GamePlayerProvider;