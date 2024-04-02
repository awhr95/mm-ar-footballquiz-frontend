import "./LeaderBoard.scss";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8100/players");
        setLeaderboard(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  if (!leaderboard) {
    return <p>Loading...</p>;
  }

  const sortedLeaderboard = leaderboard.sort((a, b) => b.score - a.score);

  console.log(sortedLeaderboard);

  return (
    <>
    
      <section>
     
        <h1>LEADER BOARD</h1>
        <ul>
          {sortedLeaderboard.map((user) => {
            return (
              <li key={user.id}>
                <p>{user.name}</p>
                <p>{user.score}</p>
              </li>
            );
          })}
        </ul>
     
      </section>
   
    </>
  );
}
