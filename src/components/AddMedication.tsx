import { useState } from "react";
import { ModelProps } from "./MenuBar";
import "./VbgAbg.css";

function AddMedication({ closeModal }: ModelProps) {
    const [formData, setFormData] = useState({
        PatientStatus: "",
        medicationName: "",
        Dose: "",
        Route: "",
        Date: "",
        Time: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        console.log("Form Data:", formData);
        setFormData({
            PatientStatus: "",
            medicationName: "",
            Dose: "",
            Route: "",
            Date: "",
            Time: ""
        });
    };

    return (
        <div className="form-modal">
            <div className="centent-modal">
                <h2 className="modal-form-title">Add Medication</h2>
                <form className="form-grid">
                    <div className="form-column">
                        <div className="form-group">
                            <div>Please select preferred method:</div>

                            <label htmlFor="PatientStatus"><i className="fa-solid fa-heart-pulse"></i> Patient Status</label>
                            <select id="PatientStatus" name="PatientStatus" required value={formData.PatientStatus} onChange={handleChange}>
                                <option value="">Select Status</option>
                                <option value="During CPR">During CPR</option>
                                <option value="POST ROSC">POST ROSC</option>
                            </select>

                            <label htmlFor="medicationName"><i className="fa-solid fa-notes-medical"></i> Name of medication</label>
                            <select id="medicationName" name="medicationName" required value={formData.medicationName} onChange={handleChange}>
                                <option value="">Select Medication</option>
                            </select>

                            <label htmlFor="Dose"><i className="fa-solid fa-vial-circle-check"></i> Dose</label>
                            <input type="number" id="Dose" name="Dose" placeholder="Enter Dose" required value={formData.Dose} onChange={handleChange} />

                            <label htmlFor="Route"><i className="fa-solid fa-pills"></i> Route</label>
                            <select id="Route" name="Route" required value={formData.Route} onChange={handleChange}>
                                <option value="">Select Route</option>
                            </select>

                            <label htmlFor="Date"><i className="fa-solid fa-calendar-days"></i> Date</label>
                            <input type="date" id="Date" name="Date" required value={formData.Date} onChange={handleChange} />

                            <label htmlFor="Time"><i className="fa-solid fa-clock"></i> Time</label>
                            <input type="time" id="Time" name="Time" required value={formData.Time} onChange={handleChange} />
                        </div>
                    </div>
                </form>

                <div className="button-container">
                    <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
                    <button type="button" className="submit-button" onClick={handleSubmit}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default AddMedication;
