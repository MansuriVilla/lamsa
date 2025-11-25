import Cta from "../cta/Cta.jsx";
import "./GetinTouch.css";
import { useLocation } from "react-router-dom";
export default function GetinTouch() {
  // hide this section for support page
  const location = useLocation();
  if (location.pathname === "/support") {
    return null;
  }

  return (
    <div className="getintouch__section">
      <div className="getintouch__inner">
        <h2>Get in Touch</h2>
        <p>
          We are here to help you with any questions or concerns you may have.
          Please feel free to contact us using the form below or by phone or
          email.
        </p>
        <Cta ctatext="Start A Project" ctalink="/support" />
      </div>
    </div>
  );
}
