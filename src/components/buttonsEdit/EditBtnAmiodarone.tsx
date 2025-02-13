import { useState } from "react";
import { ModelProps } from "../MenuBar";
import "../alerts/Alerts.css";

function EditBtnAmiodarone({ closeModal }: ModelProps) {
  const [formData, setFormData] = useState({
    time: "",
    dose: "",
    route: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.time || !formData.dose || !formData.route) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Updated Amiodarone Data:", formData);

    // Reset form after submission
    setFormData({ time: "", dose: "", route: "" });
  };

  return (
    <div className="form-alert">
      <div className="centent-alert">
        <h2 className="alert-form-title">Edit </h2>

        <div className="formInputs-proceed">
          <label htmlFor="time">Time</label>
          <select id="time" name="time" style={{ width: "55%" }} value={formData.time} onChange={handleChange}>
            <option value="">Select Time</option>
           
            <option value="After 5 min">After 5 min</option>
            <option value="After 10 min">After 10 min</option>
          </select>

          <label htmlFor="dose">Dose </label>
          <input
            type="number"
            id="dose"
            name="dose"
            style={{ width: "43%" }}
            value={formData.dose}
            onChange={handleChange}
          />

          <label htmlFor="route">Route</label>
          <input
            type="text"
            id="route"
            name="route"
           
            style={{ width: "43%" }}
            value={formData.route}
            onChange={handleChange}
          />
        </div>

        <div className="button-container">
          <button type="button" className="cancel-button" onClick={closeModal}>
            Cancel
          </button>
          <button type="button" className="submit-button" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBtnAmiodarone;
