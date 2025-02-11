import { ModelProps } from "../MenuBar";

function AmiodaroneAlert({ closeModal }: ModelProps) {
  return (
    <div className="add-patient-form-modal" style={{ alignItems: "center" }}>
      <div
        className="add-patient-form"
        style={{ padding: "10px 20px", minWidth: "30%" }}
      >
        <h2 className="add-new-patient-form-title">Amiodarone</h2>

        <div className="yes-proceed">
          <label htmlFor="procedure"> Route</label>
          <select
            id="procedure"
            name="procedure"
           
            style={{ width: "50%" }}
          >
            <option value=" "></option>
          </select>
          <label htmlFor="dose">Dose</label>
          <input
            type="number"
            id="dose"
            name="dose"
            style={{ width: "43%" }}
           
          />
        </div>
        <div
          className="button-container"
          
        >
          <button type="button" className="cancel-button" onClick={closeModal}>
            Cancel
          </button>
          <button type="button" className="submit-button">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AmiodaroneAlert;
