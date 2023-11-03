import React, { useState } from "react";
import { Form, useLoaderData, useNavigate } from "react-router-dom";

import { PROFILE } from "../../assets";
import { fetchMedicalRecord } from '../../api';

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
          className="border rounded p-1 w-full bg-primary-dark"
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
  const {medicalRecordData: initialMedicalRecordData, username} = useLoaderData();
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
    // Implement your logout logic here
    navigate("/auth");
  };

  const personalInformationFields = {
    dob: "Date of Birth",
    age: "Age",
    weight: "Weight",
    height: "Height",
    bloodGroup: "Blood Group",
  };

  const medicalRecordFields = {
    allergies: "Allergies",
    medications: "Medications",
    medicalConditions: "Medical Conditions",
    surgeries: "Surgeries",
    immunizations: "Immunizations",
    familyMedicalHistory: "Family Medical History",
    diagnosis: "Diagnosis",
    treatments: "Treatments",
    additionalNotes: "Additional Notes",
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <section className="bg-secondary-light dark:bg-secondary-dark min-h-screen flex flex-col md:flex-row items-center  justify-between gap-20 w-full rounded-lg p-8">
      <div className="relative p-12 text-center z-0">
        <img
          src={PROFILE}
          alt="Profile Photo"
          className="w-32 h-32 rounded-full mx-auto border-4 border-accent"
        />
        <h2 className="text-3xl font-semibold text-accent mt-4">{username}</h2>
        <p className="text-ascent-light dark:text-ascent-dark">
          demo@gmail.com
        </p>
        <button
          to="/logout"
          className="text-red-500 text-sm mt-4"
          onClick={handleLogout}
        >
          Logout
        </button>
        <div
          className={`absolute top-0 right-0 text-ascent-light dark:text-ascent-dark p-2 rounded-full`}
          onClick={handleEditClick}
        >
          <span>{isEditing ? "Cancel" : "Edit"}</span>
        </div>
      </div>

      <Form
        className="bg-accent flex flex-col lg:flex-row w-full relative pb-10"
        method="post"
        onSubmit={handleSave}
      >
        <div className="flex-1 space-y-4 p-4">
          <h3 className="text-2xl font-semibold text-ascent-light dark:text-ascent-dark mb-4">
            Personal Information
          </h3>
          <ul className="space-y-4 overflow-auto h-[360px]">
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
                autoFocus={key === "dob"} // Set autoFocus for the first field
              />
            ))}
            {isEditing && (
              <div className="text-center mt-4 flex gap-4 absolute bottom-0 sm:">
                <button
                  className="bg-ascent-light dark:bg-ascent-dark dark:text-white rounded-md p-2 w-20"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="bg-accent-light dark:text-ascent-dark dark:border-ascent-dark border rounded-md p-2 w-20"
                  type="button"
                  onClick={handleEditClick}
                >
                  Cancel
                </button>
              </div>
            )}
          </ul>
        </div>
        <div className="flex-1 space-y-4 p-4">
          <h3 className="text-2xl font-semibold text-ascent-light dark:text-ascent-dark mb-4">
            Medical Records
          </h3>
          <ul className="space-y-4 overflow-auto h-[360px]">
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
              />
            ))}
          </ul>
        </div>
      </Form>
    </section>
  );
};

export default Profile;
