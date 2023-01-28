import React from "react";
import style from "./ProductPage.module.scss";
import { NavLink } from "react-router-dom";

function ProductPage() {
  return (
    <div className={style.launchpad}>
      <div className={style.mainPort}>
        <div className={style.header}>
          <div className={style.title}>
            <h1>Launchpad</h1>
          </div>
          <div className={style.interact}>
            <NavLink to={"/launchpad"} className={style.back}></NavLink>
            <button className={style.refresh}></button>
            <input
              className={style.search}
              placeholder="Search by NFT's"
            ></input>
          </div>
        </div>
        <div className={style.object}>
          <div className={style.LeftSide}>
            <img
              className={style.Image}
              src="https://adanimals.lovelace.world/static/media/hero-desktop-cover.706897dc.jpg"
              alt="image"
            />
            <div className={style.Info}>
              <h1> Adanimals</h1>
              <div className={style.Buttons}>
                <p>Pools</p>
                <p>Description</p>
                <p>Vesting</p>
                <p>Tokenomics</p>
              </div>
            </div>
          </div>
          <div className={style.RightSide}>
            <h1> Raise details</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;