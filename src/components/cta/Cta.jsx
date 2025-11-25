import "./Cta.css";

export default function Cta(props) {
  return (
    <div className="theme_cta">
      <a href={props.ctalink} className="cta">
        {props.ctatext}
      </a>
    </div>
  );
}
