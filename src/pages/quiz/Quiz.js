import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import QuizTitle from "../../components/quiz-title/QuizTitle";
import QuizBody from "../../components/quiz-body/QuizBody";
import axios from "axios";
import { useEffect } from "react";

import { useState } from "react";

export default function Quiz() {
  const [quizLeagueCorrectList, setQuizLeagueCorrectList] = useState(null);
  const [randomisedPlayers, setRandomisedPlayers] = useState(null);

  // const {leagueId} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8100/topScorers?season=2020&league=1"
        );
        setQuizLeagueCorrectList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const fetchRandomisedData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8100/topScorers/randomizedTopFiveScorers"
        );
        setRandomisedPlayers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRandomisedData();
  }, []);
  if (!randomisedPlayers || !quizLeagueCorrectList) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Header />
      <QuizTitle league={randomisedPlayers} />
      <QuizBody
        scorersRandomised={randomisedPlayers}
        correctList={quizLeagueCorrectList}
      />
      <Nav />
    </div>
  );
}
