
import { useState } from "react";
import "./VbgAbg.css"
import { ModelProps } from "./MenuBar";


function VbgAbg ({closeModal }: ModelProps){
    const [showForm, setShowForm] = useState<string>("");


    const [fileName, setFileName] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName("No file chosen");
        }
    };
    return (
        <div className="add-patient-form-modal" style={showForm !== "manually" ? { alignItems: "center" } : {}}>
            <div className="add-patient-form" style={showForm == "manually" ? { margin: "15% 0px 10px 0" } : {}}>
                <h2 className="add-new-patient-form-title">VBG/ABG</h2>
                <form className="form-grid">
                    <div className="form-column">
                        {!showForm && (<div>
                            <div> Please select preferred method:</div>
                            <div className="method-select ">
                                <button
                                    type="button"
                                    className="method-button" onClick={() => setShowForm("manually")}>
                                    <i className="fa-solid fa-keyboard"></i> type Manually
                                </button>
                                <button type="button"
                                    className="method-button" onClick={() => setShowForm("attach")}>
                                    <i className="fa-solid fa-paperclip"></i>  Attach
                                </button>
                            </div>
                        </div>)}


                        {showForm != "" && (
                            <div className="form-group">

                                <label htmlFor="hospitalName">ABG/VBG</label>
                                <select id="hospitalName" name="hospitalName" required>
                                    <option value="">Select ABG/VBG</option>
                                    <option value="ABG">ABG</option>
                                    <option value="VBG">VBG</option>
                                </select>

                                <label htmlFor="hospitalName">Patient Status</label>
                                <select id="hospitalName" name="hospitalName" required>
                                    <option value="">Select Patient Status</option>
                                    <option value="During CPR">During CPR</option>
                                    <option value="POST ROSC">Medical POST ROSC </option>
                                </select>

                                {showForm == "attach" && (
                                    <div className="file-upload-container">
                                        <label htmlFor="fileInput">Attach file:</label>
                                        <div className="custom-file-upload">
                                            <button type="button" onClick={() => document.getElementById("fileInput")?.click()}>
                                                {fileName && <span className="file-name">{fileName}</span>}
                                            </button>

                                        </div>
                                        <input
                                            type="file"
                                            id="fileInput"
                                            name="file"
                                            accept="image/png, image/jpeg"
                                            onChange={handleFileChange}
                                            style={{ display: "none" }}
                                        />
                                    </div>
                                )}
                                {showForm == "manually" && (<>   <label htmlFor="pH">pH</label>
                                    <input
                                        type="number"
                                        id="pH"
                                        name="pH"
                                        placeholder="Enter ph"
                                        required
                                    />

                                    <label htmlFor="Pao2">Pao2</label>
                                    <input
                                        type="number"
                                        id="Pao2"
                                        name="Pao2"
                                        placeholder="Enter Pao2"
                                        required
                                    />

                                    <label htmlFor="PaCo2">PaCo2</label>
                                    <input
                                        type="number"
                                        id="PaCo2"
                                        name="PaCo2"
                                        placeholder="Enter PaCo2"
                                        required
                                    />

                                    <label htmlFor="HCO3">HCO3</label>
                                    <input
                                        type="number"
                                        id="HCO3"
                                        name="HCO3"
                                        placeholder="Enter HCO3"
                                        required
                                    />

                                    <label htmlFor="SaO2">SaO2</label>
                                    <input
                                        type="number"
                                        id="SaO2"
                                        name="SaO2"
                                        placeholder="Enter SaO2"
                                        required
                                    />

                                    <label htmlFor="Glucose">Glucose</label>
                                    <input
                                        type="number"
                                        id="Glucose"
                                        name="Glucose"
                                        placeholder="Enter Glucose"
                                        required
                                    />

                                    <label htmlFor="Lac">Lac</label>
                                    <input
                                        type="number"
                                        id="Lac"
                                        name="Lac"
                                        placeholder="Enter Lac"
                                        required
                                    />
                                </>
                                )}
                            </div>
                        )}
                    </div>
                </form>

                {showForm != "" && (
                    <div className="button-container">
                        <button
                            type="button"
                            className="cancel-button"
                           
                            onClick={() => setShowForm("")}
                        >
                            Cancel
                        </button>
                        <button type="button" className="submit-button" >
                            Save
                        </button>
                    </div>
                )}
                  {showForm == "" && (
                    <div className="button-container">
                        <button
                            type="button"
                            className="cancel-button"
                            onClick={closeModal}
                            
                        >
                            Cancel
                        </button>
                       
                    </div>
                )}
            </div>
        </div>
    )
}

export default VbgAbg