import { useState } from "react";
import "./VbgAbg.css";
import { ModelProps } from "./MenuBar";

function VbgAbg({ closeModal }: ModelProps) {
    const [showForm, setShowForm] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");
    const [formData, setFormData] = useState({
        abgVbg: "",
        patientStatus: "",
        pH: "",
        Pao2: "",
        PaCo2: "",
        HCO3: "",
        SaO2: "",
        Glucose: "",
        Lac: ""
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName("No file chosen");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        console.log("Form Data:", formData);
        setFormData({
            abgVbg: "",
            patientStatus: "",
            pH: "",
            Pao2: "",
            PaCo2: "",
            HCO3: "",
            SaO2: "",
            Glucose: "",
            Lac: ""
        });
    };

    return (
        <div className="form-modal" style={showForm !== "manually" ? { alignItems: "center" } : {}}>
            <div className="centent-modal">
                <h2 className="modal-form-title">VBG/ABG</h2>
                <form className="form-grid">
                    <div className="form-column">
                        {!showForm && (
                            <div>
                                <div> Please select preferred method:</div>
                                <div className="method-select">
                                    <button type="button" className="method-button" onClick={() => setShowForm("manually")}>
                                        <i className="fa-solid fa-keyboard"></i> Type Manually
                                    </button>
                                    <button type="button" className="method-button" onClick={() => setShowForm("attach")}>
                                        <i className="fa-solid fa-paperclip"></i> Attach
                                    </button>
                                </div>
                            </div>
                        )}

                        {showForm !== "" && (
                            <div className="form-group">
                                <label htmlFor="abgVbg">ABG/VBG</label>
                                <select id="abgVbg" name="abgVbg" required value={formData.abgVbg} onChange={handleChange}>
                                    <option value="">Select ABG/VBG</option>
                                    <option value="ABG">ABG</option>
                                    <option value="VBG">VBG</option>
                                </select>

                                <label htmlFor="patientStatus">Patient Status</label>
                                <select id="patientStatus" name="patientStatus" required value={formData.patientStatus} onChange={handleChange}>
                                    <option value="">Select Patient Status</option>
                                    <option value="During CPR">During CPR</option>
                                    <option value="POST ROSC">Medical POST ROSC</option>
                                </select>

                                {showForm === "attach" && (
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

                                {showForm === "manually" && (
                                    <>
                                        {[
                                            "pH", "Pao2", "PaCo2", "HCO3", "SaO2", "Glucose", "Lac"
                                        ].map((field) => (
                                            <div key={field}>
                                                <label htmlFor={field}>{field}</label>
                                                <input
                                                    type="number"
                                                    id={field}
                                                    name={field}
                                                    placeholder={`Enter ${field}`}
                                                    required
                                                    value={formData[field]}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </form>

                {showForm !== "" && (
                    <div className="button-container">
                        <button type="button" className="cancel-button" onClick={() => setShowForm("")}>Cancel</button>
                        <button type="button" className="submit-button" onClick={handleSubmit}>Save</button>
                    </div>
                )}
                {showForm === "" && (
                    <div className="button-container">
                        <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default VbgAbg;
