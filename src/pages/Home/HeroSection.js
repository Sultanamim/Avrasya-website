import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="hero-sec">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="inner d-flex my-3 my-md-5">
          <h1>Our references</h1>
          <p>As strong Portfolio of employers across several sectors</p>
          <p>
            <Link to="references">Learn more</Link> {">"}
          </p>
        </div>
      </div>
    </div>
  );
}
