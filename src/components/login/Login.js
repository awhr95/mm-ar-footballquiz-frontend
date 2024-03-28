import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const newPlayer = event.target.newPlayer.value;

      try { 
      await axios.post("http://localhost:8100/players", { name: newPlayer });
      navigate("/quiz");

     } catch (error) {
      console.error("Error submitting user's name:", error);
    }
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
};

export default Login;
