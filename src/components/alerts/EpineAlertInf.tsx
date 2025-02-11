import { ModelProps } from "../MenuBar";

function EpineAlertInf({ closeModal }: ModelProps) {
  return (
    <div className="add-patient-form-modal" style={{ alignItems: "center" }}>
      <div
        className="add-patient-form"
        style={{ padding: "10px 20px", minWidth: "30%" }}
      >
        <h2 className="add-new-patient-form-title">Epinephrine Dose</h2>
<div style={{textAlign:"start",fontSize:"16px", fontWeight:"600",marginBottom:"40px"}}>

  <div> Last Epinephrine dose has been given less than 3 minutes ago. </div>
        
        <div> Do you still want to proceed? </div>
</div>
        
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

export default EpineAlertInf;
