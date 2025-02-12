import { ModelProps } from "../MenuBar";
import "./Alerts.css";

function EpineAlertSup({ closeModal }: ModelProps) {
  return (
    <div className="form-alert" >
      <div
        className="centent-alert"
        style={{ padding: "10px 20px", minWidth: "30%" }}
      >
        <h2 className="alert-form-title">Epinephrine Dose</h2>
        <div
              style={{
                textAlign: "start",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "40px",
              }}
            >
             
                {" "}
                Click "Proceed" to record additional dose of epinephrine.</div>
            
        
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

export default EpineAlertSup;
