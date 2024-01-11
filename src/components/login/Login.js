import "./Login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <form>
        <label>WHAT IS YOUR NAME</label>
        <input placeholder="USER NAME"></input>
        <Link>
          <button></button>
        </Link>
      </form>
    </div>
  );
}
