import { ModelProps } from "./MenuBar"
import "./VbgAbg.css"

function AddClinicalNotes({ closeModal }: ModelProps) {

    return (
        <div className="add-patient-form-modal" style={{ alignItems: "center" }}>
            <div className="add-patient-form" style={{ width: "90%" }} >
                <h2 className="add-new-patient-form-title">Add Clinical Notes</h2>

                <form className="form-grid" style={{gap:"10px"}}>

                    <div className="form-column" style={{padding:"0"}} >
                        <div className="form-group" style={{ width: "100%" }} >
                            <label htmlFor="clinicianName"> Clinician Name</label>
                            <input
                                type="text"
                                id="clinicianName"
                                name="clinicianName"
                                placeholder=""
                                required
                                style={{
                                    width: "49%",

                                    border: "1px solid #37b7c3",
                                    borderRadius: "30px",
                                    padding: "0.8rem",
                                    fontSize: "1rem",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-column" style={{padding:"0"}}   >




                        <div className="form-group" style={{ width: "100%" }} >
                            <label htmlFor="title"> Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder=""
                                required
                                style={{
                                    width: "100%",

                                    border: "1px solid #37b7c3",
                                    borderRadius: "30px",
                                    padding: "0.8rem",
                                    fontSize: "1rem",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>

                        <div className="form-group" style={{ width: "100%" }} >
                            <label htmlFor="template">Select Template</label>
                            <input
                                type="text"
                                id="template"
                                name="template"
                                placeholder=""
                                required
                                style={{
                                    width: "100%",

                                    border: "1px solid #37b7c3",
                                    borderRadius: "30px",
                                    padding: "0.8rem",
                                    fontSize: "1rem",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>
                    </div>

                    
                        <label htmlFor="comment" >
                            Clinical Note</label>
                        <textarea
                            id="comment"
                            name="comment"

                            rows={4} 
                            cols={50}
                            style={{width:"100%",minHeight:"300px",maxWidth:"100%", resize: "vertical" }} 
                        ></textarea>
                        
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


export default AddClinicalNotes