import React from "react";
import "./Slider.scss";
import Coin from "./assets/Coin.svg";
import Growth from "./assets/Growth.svg";
import Icons from "./assets/Icons.svg";
import Icons2 from "./assets/Icons2.svg";

function Slider() {
  return (
    <div className="container-slider">
        <h1>Your supply market</h1>
      <div className="cards">
        {[...Array(7)].map(() => {
          return (
            <div className="card">
              <div className="card__content">
                <img src={Coin} className="coin" />
                <div className="card__content-prize">
                  <div className="card__content-prize-in">
                    <h4>BTC</h4>
                    <img src={Icons2} />
                    <h4>USD</h4>
                  </div>
                  <h2>9784.79</h2>
                </div>
                <div className="card__content-percentage">
                  <img src={Icons} />
                  <h6>7.2%</h6>
                </div>
              </div>
              <img src={Growth} className="growth" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;