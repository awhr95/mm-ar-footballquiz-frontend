import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import { useState } from "react";

export default function leaderboard() {
  const [leaderboard, setLeaderboard] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8100/players");
        console.log(response.data);
        setLeaderboard(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  });

  function sortLeaderboard(leaderboard) {
    leaderboard.sort((a, b) => b.score - a.score);

    return leaderboard;
  }

  const sortedLeaderboard = sortLeaderboard(leaderboard);

  if (!leaderboard) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      {/* need to map through the users*/}
      <section>
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
      <Nav />
    </>
  );
}
