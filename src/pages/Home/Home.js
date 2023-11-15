import React from "react";
import HeroSection from "./HeroSection";
import FindJobSection from "./FindJobSection";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <HeroSection />
      <FindJobSection />
    </div>
  );
}
