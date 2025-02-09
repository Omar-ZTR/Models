
import { ModelProps } from '../MenuBar'

function RhytmeAlertInf({closeModal }: ModelProps){
    return (
        <div className="add-patient-form-modal" style={{ alignItems: "center" }}>
            <div className="add-patient-form" >
                <h2 className="add-new-patient-form-title">Epinephrine Dose</h2>
             
<div className="form-column">
    <div className="form-group">
    <div> Click "Proceed" to record additional dose of epinephrine. </div>
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

                

            </div>
        </div>
    )
}
export default RhytmeAlertInf