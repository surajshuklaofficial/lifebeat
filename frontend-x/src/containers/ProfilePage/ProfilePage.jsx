import React, { useState } from 'react';
import { useLoaderData, Form, useNavigate } from 'react-router-dom';

import { PROFILE } from '../../assets';
import { fetchMedicalRecord, updateMedicalRecord } from '../../api';

export const loader = async ({ params }) => {
  const username = localStorage.getItem('username');
  const { id } = params;
  const { data } = await fetchMedicalRecord(id);
  return { medicalRecordData: data, username };
};

export const action = async ({ request, params }) => {
  const { id } = params;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await updateMedicalRecord(id, data);
  return { data: response.data };
};

function EditableField({ isEditing, label, value, onChange, autoFocus, name }) {
  if (isEditing) {
    return (
      <div className="mb-4">
        <label className="block text-gray-700">{label}:</label>
        <input
          type="text"
          className="border rounded p-1 w-full"
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          name={name}
        />
      </div>
    );
  } else {
    return (
      <li>
        <strong>{label}:</strong> {value}
      </li>
    );
  }
}

const Profile = () => {
  const userData = useLoaderData();
  const { medicalRecordData: initialMedicalRecordData, username } = useLoaderData();
  const [medicalRecordData, setMedicalRecordData] = useState({
    ...initialMedicalRecordData,
    date: initialMedicalRecordData?.date?.slice(0, 10),
    dob: initialMedicalRecordData?.dob?.slice(0, 10),
  });
  const [isEditing, setEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setEditing((prevState) => !prevState);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth');
  }

  const personalInformationFields = {
    dob: 'Date of Birth',
    age: 'Age',
    weight: 'Weight',
    height: 'Height',
    bloodGroup: 'Blood Group',
  };

  const medicalRecordFields = {
    allergies: 'Allergies',
    medications: 'Medications',
    medicalConditions: 'Medical Conditions',
    surgeries: 'Surgeries',
    immunizations: 'Immunizations',
    familyMedicalHistory: 'Family Medical History',
    diagnosis: 'Diagnosis',
    treatments: 'Treatments',
    additionalNotes: 'Additional Notes',
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-2">
      <div className="bg-white max-w-4xl p-6 rounded-lg shadow-lg">
        <div className="text-center relative">
          <div className="relative">
            <img
              src={PROFILE}
              alt="Profile Photo"
              className="w-32 h-32 rounded-full mx-auto border-4 border-green-500"
            />
            <h2 className="text-3xl font-semibold text-green-800 mt-4">
              {username}
            </h2>
            <p className="text-gray-600">{userData?.email || 'demo@gmail.com'}</p>
            <button to="/logout" className="text-red-500 text-sm" onClick={handleLogout}>Logout</button>
          </div>
          <div
            className={`absolute top-0 right-0 bg-green-500 text-white p-2 rounded-full ${
              isEditing ? 'hidden' : ''
            }`}
            onClick={handleEditClick}
          >
            <span>Edit</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form className="bg-green-200 rounded-md p-4" method="post">
            <div className="flex justify-between">
              <h3 className="text-2xl font-semibold text-green-800">Personal Information</h3>
              {isEditing && (
                <div className="flex gap-4">
                  <button className="bg-green-500 rounded-md p-2 text-white" type="submit">
                    Save
                  </button>
                  <button
                    className="border border-green-500 rounded-md p-2 text-green-500 font-semibold"
                    onClick={() => setEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
            <ul className="space-y-4">
              {Object.keys(personalInformationFields).map((key) => (
                <EditableField
                  key={key}
                  isEditing={isEditing}
                  label={personalInformationFields[key]}
                  value={medicalRecordData[key]}
                  name={key}
                  onChange={(e) =>
                    setMedicalRecordData({
                      ...medicalRecordData,
                      [key]: e.target.value,
                    })
                  }
                  autoFocus={key === 'dob'} // Set autoFocus for the first field
                />
              ))}
            </ul>
          </Form>

          <Form className="bg-green-200 rounded-md p-4" method="post">
            <div className="flex justify-between">
              <h3 className="text-2xl font-semibold text-green-800">Medical Record</h3>
              {isEditing && (
                <div className="flex gap-4">
                  <button className="bg-green-500 rounded-md p-2 text-white" type="submit">
                    Save
                  </button>
                  <button
                    className="border border-green-500 rounded-md p-2 text-green-500 font-semibold"
                    onClick={() => setEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
            <ul className="space-y-4">
              {Object.keys(medicalRecordFields).map((key) => (
                <EditableField
                  key={key}
                  isEditing={isEditing}
                  label={medicalRecordFields[key]}
                  value={medicalRecordData[key]}
                  name={key}
                  onChange={(e) =>
                    setMedicalRecordData({
                      ...medicalRecordData,
                      [key]: e.target.value,
                    })
                  }
                  autoFocus={key === 'dob'} // Set autoFocus for the first field
                />
              ))}
            </ul>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
