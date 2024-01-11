import "./Nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <p>Hello</p>
      <Link>
        <button>HOME</button>
      </Link>
      <Link>
        <button>LEADER BOARD</button>
      </Link>
      <Link>
        <button>NEW GAME</button>
      </Link>
    </div>
  );
}
