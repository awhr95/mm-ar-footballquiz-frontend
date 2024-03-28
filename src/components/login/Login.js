import "./Login.scss";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // hard code first game

  // add funtion to save new user details to datafile on the backend - to do 28 03 24
// add that here

  const [quizLeague, setQuizLeague] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8100/topScorers?season=2023&league=39"
        );
        console.log(response.data);
        setQuizLeague(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPlayer = event.target.newPlayer.value;

    console.log(newPlayer);
    setTimeout(() => {
      navigate("/quiz");
    }, 500);

    // await axios.post( + "/leaderboard", newPlayer);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>WHAT IS YOUR NAME</label>
        <input name="newPlayer" placeholder="USER NAME"></input>
        <button type="submit">PLAY NOW</button>
      </form>
    </div>
  );
}
