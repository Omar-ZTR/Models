import { useState } from "react";
import { ModelProps } from "../MenuBar";
import "../alerts/Alerts.css";

function EditRhythm({ closeModal }: ModelProps) {
  const [formData, setFormData] = useState({
    time: "",
    pulse: "",
    rhythm: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.time || !formData.pulse || !formData.rhythm) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Updated Rhythm Data:", formData);

    // Reset form after submission
    setFormData({ time: "", pulse: "", rhythm: "" });
  };

  return (
    <div className="form-alert">
      <div className="centent-alert">
        <h2 className="alert-form-title">Edit Rhythm</h2>

        <div className="formInputs-proceed">
          <label htmlFor="time">Time</label>
          <input
            type="number"
            id="time"
            name="time"
            style={{ width: "50%" }}
            value={formData.time}
            onChange={handleChange}
          />

          <label htmlFor="pulse">Pulse</label>
          <select id="pulse" name="pulse" style={{ width: "62%" }} value={formData.pulse} onChange={handleChange}>
            <option value="">Select Pulse</option>
            <option value="Weak">Weak</option>
            <option value="Strong">Strong</option>
            <option value="Absent">Absent</option>
          </select>

          <label htmlFor="rhythm">Rhythm</label>
          <select id="rhythm" name="rhythm" style={{ width: "100%" }} value={formData.rhythm} onChange={handleChange}>
            <option value="">Select Rhythm</option>
            <option value="Regular">Regular</option>
            <option value="Irregular">Irregular</option>
            <option value="Arrhythmic">Arrhythmic</option>
          </select>
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

export default EditRhythm;
