import axios from "axios";
import Button from "./buttons/Button";
import { useState } from "react";
import { useEffect } from "react";
import profile from"../assets/image/profile2.jpg";

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

  return (
    <>
      {users.map((user) => (
        <div key={user._id} className="card">
          <img
            className="card-img"
            src={profile}
            alt="User Profile"
          ></img>
          <h3>Fullname: {user.name}</h3>
          <h3>Age: {user.age}</h3>
          <p>Gender: {user.gender}</p>
          <div className="card-button">
            <Button buttonName="Update" />
            <Button buttonName="Delete" />
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
