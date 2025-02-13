
import { useState } from 'react';
import './addpatientformmodal.css';
import { ModelProps } from './MenuBar';



export default function Model1({ closeModal }: ModelProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    medicalRecordNumber: '',
    gender: '',
    dateOfBirth: '',
    hospitalName: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    setFormData({
      fullName: '',
      medicalRecordNumber: '',
      gender: '',
      dateOfBirth: '',
      hospitalName: '',
    });
  };

  return (
    <div className="form-modal">
      <div className="centent-modal" style={{ width: '90%' }}>
        <h2 className="modal-form-title">Patient details</h2>
        <form className="form-grid" style={{ flexDirection: 'row' }}>
          <div className="form-column" style={{ flexDirection: 'column' }}>
            <div className="form-group design-1">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter full name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="medicalRecordNumber">Medical Record Number</label>
              <input
                type="number"
                id="medicalRecordNumber"
                name="medicalRecordNumber"
                placeholder="Enter MRN"
                required
                value={formData.medicalRecordNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                required
                style={{ width: '96%' }}
                value={formData.gender}
                onChange={handleChange}
              >
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
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-column" style={{ flexDirection: 'column' }}>
            <div className="form-group">
              <label htmlFor="hospitalName">Past Medical History</label>
              <select
                id="hospitalName"
                name="hospitalName"
                required
                style={{ width: '96%' }}
                value={formData.hospitalName}
                onChange={handleChange}
              >
                <option value="">Select hospital</option>
                <option value="Medical 1">Medical 1</option>
                <option value="Medical 2">Medical 2</option>
              </select>
            </div>
            <div className="form-group">
              <ul>
                <li>.</li>
              </ul>
            </div>
          </div>
        </form>
        <div className="button-container">
          <button type="button" className="cancel-button" onClick={closeModal}>
            Cancel
          </button>
          <button type="button" className="submit-button" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
