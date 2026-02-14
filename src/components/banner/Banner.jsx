import Background from "../../assets/images/who-we-are-hero.webp";

export default function Banner(props) {
  const backgroundImage = props.image || Background;

  return (
    <div
      className="inner_banner"
      style={{
        background: `url(${backgroundImage}) center center / cover`,
      }}
    >
      <h1 className="banner__title">{props.title}</h1>
      {props.subtitle && <p className="banner__subtitle">{props.subtitle}</p>}
    </div>
  );
}
