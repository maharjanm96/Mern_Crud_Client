// CreateUser.jsx
import React, { useState } from "react";
import NavbarLayout from "../NavBar/Navbar";
import Button from "../buttons/Button";
import { toast } from "react-toastify";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/createuser",
        { fullName: name, age, gender }
      );
      console.log("User created:", response.data);
      // Reset form fields after successful submission
      setName("");
      setAge("");
      setGender("");
      // Optionally, show a success message to the user
      toast.success("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      // Optionally, show an error message to the user
      toast.error("Error creating user. Please try again.");
    }
  };

  return (
    <div>
      <NavbarLayout />
      <div className="max-w-md mx-auto mt-4 bg-white shadow-md rounded-md p-6">
        <h2 className="text-lg font-semibold mb-4">Create User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-gray-800"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-2 border-gray-300 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-semibold text-gray-800"
            >
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
              className="block text-sm font-semibold text-gray-800"
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
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <Button
            type="submit"
            buttonName="Submit"
            width="400px"
            height="40px"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
