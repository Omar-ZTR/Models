import { ModelProps } from "./MenuBar"
import "./VbgAbg.css"

function AddIntervention({ closeModal }: ModelProps) {
  return (
    <div className="add-patient-form-modal" style={{ alignItems: "center" }} >
    <div className="add-patient-form" >
        <h2 className="add-new-patient-form-title">Add Interventin</h2>
        <form className="form-grid">
            <div className="form-column">

               





                <div className="form-group">

                <div> Please select preferred method:</div>
                    <label htmlFor="procedure"> <i className="fa-solid fa-suitcase-medical"></i> Procedure</label>
                    <select id="procedure" name="procedure" required>

                    <option value="IV Line ">IV Line</option>
                    <option value="Urine Catheter">Urine Catheter</option>
                    <option value="Endotracheal Intubation">Endotracheal Intubation</option>
                    <option value="Oral airway">Oral airway</option>
                    <option value="I-gel">I-gel</option>
                    <option value="Nasopharyngeal Airway">Nasopharyngeal Airway</option>
                    <option value="NGT">NGT</option>
                    <option value="Arterial Line">Arterial Line</option>
                    <option value="Central Line">Central Line</option>
                    <option value="Tracheostomy">Tracheostomy</option>
                    <option value="Other">Other</option>
                    </select>






                    <label htmlFor="Size"><i className="fa-solid fa-vials"></i> Size</label>
                    <input
                        type="number"
                        id="Size"
                        name="Size"
                        placeholder="Enter Size"
                        required
                    />

                 

                    <label htmlFor="Location"> <i className="fa-solid fa-house-medical-flag"></i> Location</label>
                    <input
                        type="text"
                        id="Location"
                        name="Location"
                        placeholder="Enter Location"
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

export default AddIntervention