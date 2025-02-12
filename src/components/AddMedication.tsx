
import { ModelProps } from "./MenuBar"
import "./VbgAbg.css"

function AddMedication({ closeModal }: ModelProps) {
    return (
        <div className="form-modal"  >
            <div className="centent-modal" >
                <h2 className="modal-form-title">Add Medication</h2>
                <form className="form-grid">
                    <div className="form-column">






                        <div className="form-group">
                        <div> Please select preferred method:</div>

                            <label htmlFor="PatientStatus"><i className="fa-solid fa-heart-pulse"></i> Patient Status</label>
                            <select id="PatientStatus" name="PatientStatus" required>

                                <option value="During CPR">During CPR</option>
                                <option value="POST ROSC"> POST ROSC </option>
                            </select>

                            <label htmlFor="medicationName"> <i className="fa-solid fa-notes-medical"></i> Name of medication</label>
                            <select id="medicationName" name="medicationName" required>

                                <option value=""></option>
                            </select>






                            <label htmlFor="Dose"><i className="fa-solid fa-vial-circle-check"></i> Dose</label>
                            <input
                                type="number"
                                id="Dose"
                                name="Dose"
                                placeholder="Enter Dose"
                                required
                            />

                            <label htmlFor="Route"><i className="fa-solid fa-pills"></i> Route</label>
                            <select id="Route" name="Route" required>
                                <option value=""> </option>

                            </select>

                            <label htmlFor="Date"> <i className="fa-solid fa-calendar-days"></i> Date</label>
                            <input
                                type="date"
                                id="Date"
                                name="Date"
                                placeholder="Enter Date"
                                required
                            />

                            <label htmlFor="Time"><i className="fa-solid fa-clock"></i> Time</label>
                            <input
                                type="time"
                                id="Time"
                                name="Time"
                                placeholder="Enter Time"
                                required
                            />

                            

                        </div>

                    </div>
                </form>


                <div className="button-container">
                    <button
                        type="button"
                        className="cancel-button"

                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button type="button" className="submit-button" >
                        Save
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddMedication