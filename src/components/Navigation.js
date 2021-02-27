import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigationContainer">
      <Link to="/" className="navigationItem">
        Home
      </Link>
      <Link to="/about" className="navigationItem">
        About
      </Link>
    </div>
  );
} //Link는 반드시 Router안에서 사용해주세요.

export default Navigation;
