import { ModelProps } from "../MenuBar";
import "../alerts/Alerts.css";

function EditRhythm({ closeModal }: ModelProps) {
  return (
    <div className="form-alert" >
      <div
        className="centent-alert"
       
      >
        <h2 className="alert-form-title">Edit Rhythm</h2>

        <div className="yes-proceed">
         
        
          <label htmlFor="time">Time</label>
        <input
          type="number"
          id="time"
          name="time"
          style={{ width: "50%" }}
         
        />
       
       <label htmlFor="pulse"> Pulse</label>
          <select id="pulse" name="pulse" style={{ width: "62%" }}>
            <option value=" "></option>
          </select>

          <label htmlFor="rhythm"> Rhythm</label>
          <select id="rhythm" name="rhythm"style={{ width: "100%" }}  >
            <option value=" "></option>
          </select>



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

export default EditRhythm;
