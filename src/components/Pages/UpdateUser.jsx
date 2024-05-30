// UpdateForm.jsx
import React, { useState } from "react";
import Button from "../buttons/Button";

const UpdateForm = ({ user, onUpdate, onClose }) => {
  const [fullName, setFullName] = useState(user.fullName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(user._id, { fullName, age, gender });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500"
        >
          X Close
        </button>
        <h2 className="text-lg font-semibold mb-4">Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block font-semibold text-gray-800"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 p-2 border-gray-300 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block font-semibold text-gray-800">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full mt-1 p-2 border-gray-300 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block font-semibold text-gray-800"
            >
              Gender
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full mt-1 p-2 border-gray-300 border rounded-md"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <Button
            onClick={handleSubmit}
            type="submit"
            buttonName="Update"
            width="400px"
            height="40px"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
