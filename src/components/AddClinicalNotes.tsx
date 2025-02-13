import { useState } from "react";
import { ModelProps } from "./MenuBar";
import "./VbgAbg.css";

function AddClinicalNotes({ closeModal }: ModelProps) {
  const [formData, setFormData] = useState({
    clinicianName: "",
    title: "",
    template: "",
    clinicalNote: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Clinical Note Data:", formData);

    // Reset form fields after submission
    setFormData({
      clinicianName: "",
      title: "",
      template: "",
      clinicalNote: "",
    });
  };

  return (
    <div className="form-modal">
      <div className="centent-modal" style={{ width: "90%" }}>
        <h2 className="modal-form-title">Add Clinical Notes</h2>

        <form className="form-grid" style={{ gap: "10px" }}>
          <div className="form-column" style={{ padding: "0" }}>
            <div className="form-group" style={{ width: "100%" }}>
              <label htmlFor="clinicianName">Clinician Name</label>
              <input
                type="text"
                id="clinicianName"
                name="clinicianName"
                placeholder=""
                required
                value={formData.clinicianName}
                onChange={handleChange}
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <div className="form-column" style={{ padding: "0" }}>
            <div className="form-group" style={{ width: "100%" }}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder=""
                required
                value={formData.title}
                onChange={handleChange}
                style={{ borderRadius: "30px" }}
              />
            </div>

            <div className="form-group" style={{ width: "100%" }}>
              <label htmlFor="template">Select Template</label>
              <input
                type="text"
                id="template"
                name="template"
                placeholder=""
                required
                value={formData.template}
                onChange={handleChange}
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>

          <label htmlFor="clinicalNote">Clinical Note</label>
          <textarea
            id="clinicalNote"
            name="clinicalNote"
            rows={6}
            style={{ minHeight: "300px", maxWidth: "100%", resize: "vertical" }}
            value={formData.clinicalNote}
            onChange={handleChange}
          ></textarea>
        </form>

        <div className="button-container">
          <button type="button" className="cancel-button" onClick={closeModal}>
            Cancel
          </button>
          <button
            type="button"
            className="submit-button"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddClinicalNotes;
