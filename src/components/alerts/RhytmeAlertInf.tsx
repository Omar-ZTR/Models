import { useState } from "react";
import { ModelProps } from "../MenuBar";
import RhytmeAlertProceed from "./RhytmeAlertProceed";
import "./Alerts.css";

function RhytmeAlertInf({ closeModal }: ModelProps) {
  const [showProceedModal, setShowProceedModal] = useState(false);
  return (
    <>
      {!showProceedModal ? (
        <div
          className="form-alert"
          
        >
          <div
            className="centent-alert"
            style={{ padding: "10px 20px", minWidth: "30%" }}
          >
            <h2 className="alert-form-title">Rhythm Check</h2>
            <div
              style={{
                textAlign: "start",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              <div style={{
                marginBottom: "5px",
              }} >
                {" "}
                Last Epinephrine dose has been given less than 2 minutes ago.{" "}
              </div>

              <div style={{
                marginBottom: "5px",
              }} > Do you still want to proceed? </div>
            </div>

            <div
              className="button-container"
              style={{ gap: "20px", justifyContent: "center" }}
            >
              <button
                type="button"
                className="cancel-button"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="submit-button"
                onClick={() => setShowProceedModal(true)}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      ) : (
        <RhytmeAlertProceed />
      )}
    </>
  );
}
export default RhytmeAlertInf;
