import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="hero-container flex-center inner-width paddings">
          {/* LIFT-SIDE */}
          <div className="flex-col-start hero--left">
            {/* hero-title */}
            <div className="heading-primary hero-title ">
              {/* otage-circle */}
              <div className="orange-circle" />
              <h1 className="heading-primary ">
                Discover <br />
                Most Suitable <br />
                Property
              </h1>
            </div>
            {/* hero-description */}
            <div className="flex-col-start hero-description">
              <span>
                Find a variety of properties that suit you very easilty
              </span>
              <span>
                Forget all difficulties in finding a residence for you
              </span>
            </div>
            {/* hero-search-bar */}
            <div className="flex-center hero-search-bar">
              <HiLocationMarker color="var(--blue)" size={30} />
              <input type="text" placeholder="Search For Reasult" />
              <button className="button">
                <a href="">Search</a>
              </button>
            </div>
          </div>
          {/* RIGHT-SIDE */}
          <div className="hero--right">
            <div className="flex-center image-container">
              <img src="./hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
