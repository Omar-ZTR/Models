
import { ModelProps } from '../MenuBar'

function EditRhythm({ closeModal }: ModelProps) {
  return (
    <div className="add-patient-form-modal" style={{ alignItems: "center" }}>
    <div
      className="add-patient-form"
      style={{ padding: "10px 20px", minWidth: "30%" }}
    >
      <h2 className="add-new-patient-form-title">Edit</h2>

      <div className="yes-proceed">
       
        <label htmlFor="time">Time</label>
        <input type="time" id="time" name="time" style={{ width: "43%" }} />
     
        <label htmlFor="pulse"> Pulse</label>
        <select id="pulse" name="pulse" style={{ width: "50%" }}>
          <option value=" "></option>
        </select>
        <label htmlFor="rhythm"> Rhythm</label>
        <select id="rhythm" name="rhythm" >
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
  )
}

export default EditRhythm