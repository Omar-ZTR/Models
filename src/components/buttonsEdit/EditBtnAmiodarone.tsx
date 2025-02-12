import { ModelProps } from "../MenuBar";
import "../alerts/Alerts.css";

function EditBtnAmiodarone({ closeModal }: ModelProps) {
  return (
    <div className="form-alert" >
      <div
        className="centent-alert"
       
      >
        <h2 className="alert-form-title">Edit</h2>

        <div className="yes-proceed">
          <label htmlFor="time"> Time</label>
          <select id="time" name="time" style={{ width: "55%" }}>
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
