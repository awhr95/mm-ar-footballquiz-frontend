import "./app.scss";
// import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Hompage";

function App() {
  return (
    <BrowserRouter>
      <Homepage />
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
