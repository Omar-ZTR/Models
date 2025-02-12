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
import EpineAlertInf from "./alerts/EpineAlertInf";
import RhytmeAlertSup from "./alerts/RhytmeAlertSup";
import RhytmeAlertInf from "./alerts/RhytmeAlertInf";
// import RhytmeAlertProceed from "./alerts/RhytmeAlertProceed";
import AmiodaroneAlert from "./alerts/AmiodaroneAlert";
import ShockAlert from "./alerts/ShockAlert";
import EditBtnAmiodarone from "./buttonsEdit/EditBtnAmiodarone";
import EditRhythm from "./buttonsEdit/EditRhythm";


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
    <div className="form-column" >
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
        <li onClick={() => openModal("epiinf")}>epi inf 3</li>
        <li onClick={() => openModal("rhytmesup")}>rhytme Sup 2</li>
        <li onClick={() => openModal("rhytmeinf")}>rhytme inf 2</li>
       
        <li onClick={() => openModal("amiodarone")}>Amiodarone</li>
        <li onClick={() => openModal("shock")}>shock</li>
 <li onClick={() => openModal("edit1")}>edit1</li>
 <li onClick={() => openModal("edit2")}>edit2</li>



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
      {activeModal === "epiinf" && <EpineAlertInf closeModal={closeModal} />}
      {activeModal === "rhytmesup" && <RhytmeAlertSup closeModal={closeModal} />}
      {activeModal === "rhytmeinf" && <RhytmeAlertInf closeModal={closeModal} />}
      {activeModal === "edit1" && <EditBtnAmiodarone closeModal={closeModal} />}
      {activeModal === "edit2" && <EditRhythm closeModal={closeModal} />}

      
      {activeModal === "amiodarone" && <AmiodaroneAlert closeModal={closeModal} />}
      {activeModal === "shock" && <ShockAlert closeModal={closeModal} />}


    </div>
  );
}

export default MenuBar;
