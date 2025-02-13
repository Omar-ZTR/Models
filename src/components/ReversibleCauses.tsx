import { useState } from "react";
import "./VbgAbg.css";
import { ModelProps } from "./MenuBar";

const causesList = [
  { id: "cause1", label: "Hypoxia" },
  { id: "cause2", label: "Hypovolaemia" },
  { id: "cause3", label: "Hypo/Hyperkalaemia" },
  { id: "cause4", label: "Hypothermia" },
  { id: "cause5", label: "Thrombosis" },
  { id: "cause6", label: "Tamponade" },
  { id: "cause7", label: "Toxins" },
  { id: "cause8", label: "Tension pneumothorax" },
];

const group1 = causesList.slice(0, 4);
const group2 = causesList.slice(4, 8);

const ReversibleCauses: React.FC<ModelProps> = ({ closeModal }) => {
  const [causes, setCauses] = useState<{ [key: string]: boolean }>(
    causesList.reduce((acc, cause) => ({ ...acc, [cause.id]: false }), {})
  );
  const [comment, setComment] = useState("");

  const allChecked = Object.values(causes).every(Boolean);

  const handleAllCauseChange = (checked: boolean) => {
    const updatedCauses = causesList.reduce((acc, cause) => ({ ...acc, [cause.id]: checked }), {});
    setCauses(updatedCauses);
  };

  const handleCauseChange = (id: string, checked: boolean) => {
    setCauses((prev) => ({ ...prev, [id]: checked }));
  };

  const handleSubmit = () => {
    console.log("Checked Causes:", causes);
    console.log("Comment:", comment);

    // Reset state
    setCauses(causesList.reduce((acc, cause) => ({ ...acc, [cause.id]: false }), {}));
    setComment("");
  };

  return (
    <div className="form-modal">
      <div className="centent-modal">
        <h2 className="modal-form-title">Reversible Causes</h2>

        <form className="form-grid">
          <div>Please ensure all reversible causes have been checked</div>

          <div className="form-column" style={{ padding: "0" }}>
            <div className="form-group">
              {group1.map((cause) => (
                <div className="Cause" key={cause.id}>
                  <input type="checkbox" id={cause.id} checked={causes[cause.id]} onChange={(e) => handleCauseChange(cause.id, e.target.checked)} />
                  <div>
                    <span>{cause.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="form-group">
              {group2.map((cause) => (
                <div className="Cause" key={cause.id}>
                  <input type="checkbox" id={cause.id} checked={causes[cause.id]} onChange={(e) => handleCauseChange(cause.id, e.target.checked)} />
                  <div>
                    <span>{cause.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <label className="custom-checkbox" style={{ fontWeight: 500 }}>
            <input type="checkbox" id="allcause" checked={allChecked} onChange={(e) => handleAllCauseChange(e.target.checked)} />
            <span className="checkmark"></span> All reversible causes have been checked
          </label>

          <label htmlFor="comment" style={{ fontSize: 16, fontWeight: 500, marginTop: 20 }}>Comment</label>
          <div className="form-column" style={{ padding: "0" }}>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              cols={50}
              style={{ resize: "vertical" }}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        </form>

        <div className="button-container">
          <button type="button" className="cancel-button" onClick={closeModal}>Cancel</button>
          <button type="button" className="submit-button" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default ReversibleCauses;
