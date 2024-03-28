import "./Nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link>
        <button>LEADER BOARD</button>
      </Link>
      <Link to="/">
        <button>NEW GAME</button>
      </Link>
    </div>
  );
}
