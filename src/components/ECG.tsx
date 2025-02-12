import { useState } from "react";
import "./VbgAbg.css"
import { ModelProps } from "./MenuBar";

function ECG({ closeModal }: ModelProps) {


    const [fileName, setFileName] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName("No file chosen");
        }
    };
    return (
        <div className="form-modal" style={{alignItems:"center"}} >
            <div className="centent-modal" >
                <h2 className="modal-form-title">EGC</h2>
                <form className="form-grid">
                    <div className="form-column">






                        <div className="form-group">


                        <div> Please select preferred method:</div>


                            <div className="file-upload-container">

                                <div className="custom-file-upload">
                                    <button style={{ display: "flex", gap: "5px", alignItems: "center" }} type="button" onClick={() => document.getElementById("fileInput")?.click()}>
                                    <i className="fa-solid fa-image"></i>  
                                    {!fileName ? <label htmlFor="fileInput" >
                                            Attach </label> :
                                         <span className="file-name">{fileName}</span>}
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



                        </div>

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

export default ECG