import "./Login.scss";
import React, { useState, useContext } from 'react';
import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GamePlayerContext } from "../../context/GamePlayerContext";

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { handleLogin } = useContext(GamePlayerContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const playerName = formData.get("newGamePlayer");

        if (!playerName.trim()) {
            setError('Please enter your name');
            return;
        }

        try { 
           const response = await axios.post("http://localhost:8100/players", { name: playerName, score: 0 });
          
           if(response.data && response.data.name) {
           
           handleLogin(response.data.name);
           navigate("/quiz");

           } else {
            setError('Unexpected response from server. Please try again.');
           }

        } catch (error) {
            console.error("Error submitting user's name:", error);
            setError('An error occurred while logging you in. Please try again.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newGamePlayer">WHAT IS YOUR NAME</label>
                <input 
                id="newGamePlayer" 
                name="newGamePlayer" 
                placeholder="ENTER YOUR NAME" />
                <button type="submit">LOG IN</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>} 
        </div>
    );
};

export default Login;
