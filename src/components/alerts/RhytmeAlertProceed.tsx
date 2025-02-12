import { useState } from "react";
// import { ModelProps } from "../MenuBar";
import "./Alerts.css";

function RhytmeAlertProceed() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<string>("");
  return (
    <div className="form-alert" >
      <div
        className="centent-alert"
        style={{ padding: "10px 20px", minWidth: "30%" }}
      >
        {!showForm && (
          <div>
            <h3> Does Patient Has Puise? </h3>

            <div className="buttonContainer">
              <button
                className="yes-button boxC"
                onClick={() => setShowForm("yes")}
              >
                <i className="fa-solid fa-heart-pulse  icon"></i>
                <span
                  style={{ fontSize: "16px", lineHeight: "24px" }}
                  className="font-semibold text-black"
                >
                  Yes
                </span>
              </button>
              <button
                className="no-button boxC"
                onClick={() => setShowForm("no")}
              >
                <i className="fa-solid fa-heart-circle-xmark icon"></i>
                <span
                  style={{ fontSize: "16px", lineHeight: "24px" }}
                  className="font-semibold text-black"
                >
                  No
                </span>
              </button>
            </div>
          </div>
        )}
        {showForm && (
          <div className="pulse">
            <h3> What is the Rhythm displayed in the monitor? </h3>
            {showForm == "no" && (
              <div className="buttonContainer">
                {["Asystole", "PEA", "V Tach", "VF"].map((label) => (
                  <label key={label} className="boxC boxs">
                    <input
                      type="radio"
                      name="rhythm"
                      value={label}
                      checked={selected === label}
                      onChange={() => setSelected(label)}
                      className="btn-radio"
                    />
                    <div className="boxC">
                      <i className="fa-solid fa-grip-vertical fa-rotate-90 icon"></i>
                      <span
                        className="font-semibold text-black"
                        style={{ fontSize: "16px", lineHeight: "24px" }}
                      >
                        {label}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            )}

            {showForm == "yes" && (
              <div className="yes-proceed">
                <label htmlFor="procedure"> Rhythm</label>
                <select id="procedure" name="procedure" required style={{width:"50%"}}>
                  <option value=" "></option>
                </select>
              </div>
            )}
            <div className="button-container">
              <button
                type="button"
                className="cancel-button"
                onClick={() => setShowForm("")}
              >
                Cancel
              </button>
              <button type="button" className="submit-button">
              Proceed
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default RhytmeAlertProceed;
