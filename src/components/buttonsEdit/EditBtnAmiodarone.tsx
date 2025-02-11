import { ModelProps } from "../MenuBar";

function EditBtnAmiodarone({ closeModal }: ModelProps) {
  return (
    <div className="add-patient-form-modal" style={{ alignItems: "center" }}>
      <div
        className="add-patient-form"
        style={{ padding: "10px 20px", minWidth: "30%" }}
      >
        <h2 className="add-new-patient-form-title">Edit</h2>

        <div className="yes-proceed">
          <label htmlFor="time"> Time</label>
          <select id="time" name="time" style={{ width: "50%" }}>
            <option value=" "></option>
          </select>
          <label htmlFor="dose">Dose</label>
          <input type="number" id="dose" name="dose" style={{ width: "43%" }} />
       
          <label htmlFor="route">Route</label>
        <input
          type="number"
          id="route"
          name="route"
          style={{ width: "43%" }}
         
        />
       
        </div>
        <div className="button-container">
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

export default EditBtnAmiodarone;
