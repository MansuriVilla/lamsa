import "./Cta.css";
import { Link } from "react-router-dom";

export default function Cta(props) {
  return (
    <div className="theme_cta">
      <Link to={props.ctalink} className="cta">
        {props.ctatext}
      </Link>
    </div>
  );
}
