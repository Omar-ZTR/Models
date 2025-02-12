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

const ReversibleCauses: React.FC<ModelProps> = ({ closeModal })=> {
    const [causes, setCauses] = useState<{ [key: string]: boolean }>(
        causesList.reduce((acc, cause) => ({ ...acc, [cause.id]: false }), {})
    );

    const allChecked = Object.values(causes).every(Boolean);

    const handleAllCauseChange = (checked: boolean) => {
        const updatedCauses = causesList.reduce((acc, cause) => ({ ...acc, [cause.id]: checked }), {});
        setCauses(updatedCauses);
    };

    const handleCauseChange = (id: string, checked: boolean) => {
        const updatedCauses = { ...causes, [id]: checked };
        setCauses(updatedCauses);
    };

    return (
        <div className="form-modal" >
            <div className="centent-modal">
                <h2 className="modal-form-title">Reversible causes</h2>

                <form className="form-grid">
                    <div> Please ensure all reversible causes has been checked</div>

                    <div className="form-column" style={{padding:"0"}} >

                        <div className="form-group">
                            {group1.map((cause) => (
                                <div className="Cause" key={cause.id}>
                                    <input
                                        type="checkbox"
                                        id={cause.id}
                                        checked={causes[cause.id]}
                                        onChange={(e) => handleCauseChange(cause.id, e.target.checked)}
                                    />
                                    <div>
                                        <span>{cause.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="form-group">
                            {group2.map((cause) => (
                                <div className="Cause" key={cause.id}>
                                    <input
                                        type="checkbox"
                                        id={cause.id}
                                        checked={causes[cause.id]}
                                        onChange={(e) => handleCauseChange(cause.id, e.target.checked)}
                                    />
                                    <div>
                                        <span>{cause.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                     <label className="custom-checkbox" style={{

                        fontWeight: 500,

                    }}>
                        <input
                            type="checkbox"
                            id="allcause"
                            checked={allChecked}
                            onChange={(e) => handleAllCauseChange(e.target.checked)}
                        />
                        <span className="checkmark"></span>
                        All reversible causes have been checked
                    </label>
                   <label htmlFor="comment" style={{
                        fontSize: 16,
                        fontWeight: 500,
                        lineHeight: "0px",
                        marginTop:20,
                        textAlign: "left",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none"
                    }}>
                        Comment</label>
                    <div className="form-column" style={{padding:"0"}} >
                        <textarea
                            id="comment"
                            name="comment"
                           
                            rows={4} // Adjust rows for desired height
                            cols={50} // Adjust cols for desired width
                            style={{  resize: "vertical" }} // Optional styling
                        ></textarea>
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

export default ReversibleCauses