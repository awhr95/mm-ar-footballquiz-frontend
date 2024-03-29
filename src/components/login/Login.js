import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newPlayer = formData.get("newPlayer");

        try { 
            await axios.post("http://localhost:8100/players", { name: newPlayer, score: 0 });
            navigate("/quiz");
        } catch (error) {
            console.error("Error submitting user's name:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newPlayer">WHAT IS YOUR NAME</label>
                <input id="newPlayer" name="newPlayer" placeholder="ENTER YOUR NAME" />
                <button type="submit">LOG IN</button>
            </form>
        </div>
    );
};

export default Login;
