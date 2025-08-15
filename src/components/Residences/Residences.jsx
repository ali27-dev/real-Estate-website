import React from "react";
import { Swiper, useSwiperSlide, useSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Residences.css";
import Data from "../../utils/slider.json";

export default function Residences() {
  return (
    <div>
      <section className="rwrapper">
        <div className="r-container  paddings inner-width">
          <div className="r-header flex-start">
            <h3>
              <span className="orange-text">Best Choices</span>
              <br />
              <span className="primary-text">Popular Residencies</span>
            </h3>
          </div>

          <Swiper>
            {Data.map((card, i) => (
              <SwiperSlide key={i}>
                <figcaption className="r-card">
                  <img src={card.image} alt="" />
                  {/* text */}
                  <caption className="secondary-text r-price">
                    <span className="" style={{ color: "orange" }}>
                      $
                    </span>
                    <span>{card.price}</span>
                  </caption>
                  {/* Names && Detailes*/}
                  <h4 className="primary-text">{card.name}</h4>
                  <p className="secondary-text">{card.detail}</p>
                </figcaption>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
