// Card.js
import axios from "axios";
import Button from "./buttons/Button";
import { useState, useEffect } from "react";
import profile from "../assets/image/profile2.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/users/getallusers"
        );
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async (userId) => {
    toast.success("Update button clicked");
    console.log("Update user with ID:", userId);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/users/deleteuser/${userId}`
      );
      toast.success("User Deleted Successfully");
      console.log("User deleted:", response.data);
      // Update the users state to remove the deleted user
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.log("Error deleting user", error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {users.map((user) => (
        <div
          key={user._id}
          className="bg-white-700 border-purple-500 border-2 shadow-md rounded-lg p-4 m-4 max-w-sm w-full sm:w-1/2 lg:w-1/4"
        >
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={profile}
            alt="User Profile"
          />
          <h3 className="text-xl font-semibold text-center mb-2 text-black">
            Fullname: {user.fullName}
          </h3>
          <h3 className="text-lg text-center mb-2 text-black">
            Age: {user.age}
          </h3>
          <p className="text-center mb-4 text-black">Gender: {user.gender}</p>
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleUpdate}
              buttonName="Update"
              width="100px"
              height="40px"
            />
            <Button
              onClick={() => handleDelete(user._id)}
              buttonName="Delete"
              width="100px"
              height="40px"
              backgroundColor="red"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
