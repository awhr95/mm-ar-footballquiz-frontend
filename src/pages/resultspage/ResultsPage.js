import "./ResultsPage.scss";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Leaderboard from "../leaderboard/LeaderBoard";

const Results = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>YOU WERE RUBBISH</h1>
        <h2>Here's how you did</h2>
        </div>
      <Leaderboard />
      <Nav />
    </div>
  );
}

export default Results;