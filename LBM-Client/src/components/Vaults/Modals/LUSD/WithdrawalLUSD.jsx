import React from "react";
import "./WithdrawalLUSD.scss";
import LUSD from "../../assets/LUSD-icon.svg";
import close from "../../assets/Close-icon.svg";

function WithdrawalLUSD({ state, setStateModal }) {
  function changeState() {
    setStateModal(false);
  }

  return (
    <div className={state ? "modal-withdrawal-container" : "modals-off"}>
      <div className="modal">
        <div className="top-modal">
          <h4>Withdrawal LUSD</h4>
          <img src={close} alt="cross" onClick={changeState} />
        </div>
        <div className="mid-modal">
          <button className="withdrawal-button">Withdrawal</button>
          <button className="request-button">Request Withdrawal</button>
        </div>

        <div className="bottom-modal">
          <div className="container">
            <img src={LUSD} alt="LUSD incon" />
            <h4>Available LUSD</h4>
          </div>
          <h4 style={{ fontWeight: 700, color: "#000000" }}>100LUSD</h4>
        </div>
        <button onClick={changeState}>Confirm</button>
      </div>
    </div>
  );
}

export default WithdrawalLUSD;