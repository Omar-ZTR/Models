import { ModelProps } from "../MenuBar";
import "./Alerts.css";

function ShockAlert({ closeModal }: ModelProps) {
  return (
    <div className="form-alert" >
      <div
        className="centent-alert"
        style={{ padding: "10px 20px", minWidth: "30%" }}
      >
        <h2 className="alert-form-title">Defibrillation</h2>

        <h3> Click "Proceed" to record a shock has been delivered.</h3>
        <div
          className="button-container"
          style={{ gap: "20px", justifyContent: "center" }}
        >
          <button type="button" className="cancel-button" onClick={closeModal}>
            Cancel
          </button>
          <button type="button" className="submit-button">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShockAlert;
