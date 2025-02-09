import { useState } from "react";
import "./addpatientformmodal.css";
import Model1 from "./Model1"; // Import the modal components
import VbgAbg from "./VbgAbg";
import AddMedication from "./AddMedication";
import AddIntervention from "./AddIntervention";
import ECG from "./ECG";
import ReversibleCauses from "./ReversibleCauses";
import AddClinicalNotes from "./AddClinicalNotes";
import EpineAlertSup from "./alerts/EpineAlertSup";


export interface ModelProps {
    closeModal: () => void;
  }

function MenuBar() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };
  return (
    <div className="form-column" style={{padding:"50px"}}>
      <ul className="form-group">
        <div>Models</div>
        <li onClick={() => openModal("patientDetails")}>Patient Details</li>
        <li onClick={() => openModal("vbgAbg")}>VBG/ABG</li>
        <li onClick={() => openModal("addMedication")}>Add Medication</li>
        <li onClick={() => openModal("intervention")}>Intervention</li>
        <li onClick={() => openModal("ecg")}>ECG</li>
        <li onClick={() => openModal("reversibleCauses")}>Reversible causes</li>
        <li onClick={() => openModal("addClinicalNotes")}>Add Clinical Notes</li>
      </ul>
      <ul className="form-group">
        <div>Alerts</div>
        <li onClick={() => openModal("episup")}>epi Sup 3</li>
       
      </ul>
    
      {activeModal === "patientDetails" && <Model1 closeModal={closeModal} />}
      {activeModal === "vbgAbg" && <VbgAbg closeModal={closeModal} />}
      {activeModal === "addMedication" && <AddMedication closeModal={closeModal} />}
      {activeModal === "intervention" && <AddIntervention closeModal={closeModal} />}
      {activeModal === "ecg" && <ECG closeModal={closeModal}/>}
      {activeModal === "reversibleCauses" && <ReversibleCauses closeModal={closeModal} />}
      {activeModal === "addClinicalNotes" && <AddClinicalNotes closeModal={closeModal} />}
      
      {/* Alerts */}

      {activeModal === "episup" && <EpineAlertSup closeModal={closeModal} />}


    </div>
  );
}

export default MenuBar;
