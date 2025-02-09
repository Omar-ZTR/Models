import React from 'react';
import './addpatientformmodal.css';

// Define the props for the AddPatientFormModal component
interface AddPatientFormModalProps {
  isOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setSwitchModal: (value: boolean) => void;
  switchModal: boolean;
  isEditing?: boolean; // Add isEditing prop
}

const AddPatientFormModal: React.FC<AddPatientFormModalProps> = ({
  isOpen,
  setIsModalOpen,
  setSwitchModal,
  isEditing = false,
}) => {
  if (!isOpen) return null;

  const onClose = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    setSwitchModal(true);
  };

  return (
    <div className="add-patient-form-modal">
      <div className="add-patient-form">
        <h2 className="add-new-patient-form-title">Patient details</h2>
        <form className="form-grid">
          <div className="form-column">
            <div className="form-group design-1">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="medicalRecordNumber">Medical Record Number</label>
              <input
                type="text"
                id="medicalRecordNumber"
                name="medicalRecordNumber"
                placeholder="Enter MRN"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" required>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                required
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="hospitalName">Hospital Name</label>
              <select id="hospitalName" name="hospitalName" required>
                <option value="">Select hospital</option>
                <option value="Hospital A">Hospital A</option>
                <option value="Hospital B">Hospital B</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                placeholder="Enter department"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="patientLocation">Patient Location</label>
              <input
                type="text"
                id="patientLocation"
                name="patientLocation"
                placeholder="Enter location"
                required
              />
            </div>
          </div>
        </form>
        <div className="button-container">
          <button
            type="button"
            className="cancel-button"
            onClick={onClose}
            
          >
            Cancel
          </button>
          <button type="button" className="submit-button" onClick={handleNext}>
            {isEditing ? 'Update' : 'Next'} 
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPatientFormModal;
