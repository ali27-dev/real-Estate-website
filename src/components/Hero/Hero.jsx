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
              <span className="secondary-text">
                Find a variety of properties that suit you very easilty
              </span>
              <span className="secondary-text">
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

            {/* hero-state */}
            <div className="states flex-center">
              {/* hero-state-1 */}
              <div className="state flex-col-center ">
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondary-text">Premium Product</span>
              </div>
              {/* hero-state-2 */}
              <div className="state flex-col-center">
                <span>
                  <CountUp start={1950} end={2000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondary-text">Happy Customer</span>
              </div>
              {/* hero-state-3 */}
              <div className="state flex-col-center ">
                <span>
                  <CountUp end={28} />
                  <span>+</span>
                </span>
                <span className="secondary-text">Awards Winning</span>
              </div>
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
