import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="page not-found-page">
      <p className="mono not-found-page__code">404</p>
      <h1 className="not-found-page__headline">Page not found.</h1>
      <Link className="mono not-found-page__link" to="/">
        ← Back home
      </Link>
    </div>
  );
}

export default NotFound;
