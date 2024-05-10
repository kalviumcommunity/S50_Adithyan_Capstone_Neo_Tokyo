import React, { useState, useEffect } from "react";
import banner from "../assets/banner.jpg";
import spidey from "../assets/spidey.jpg";
import Cookies from "js-cookie";
import axios from "axios";


const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [editedBio, setEditedBio] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const userDataString = Cookies.get("userData");
    if (userDataString) {
      const parsedUserData = JSON.parse(userDataString);
      const getUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/users/${parsedUserData._id}`);
          console.log(response.data)
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      getUserData();
    }


  }, []);

  const handleEditSubmit = async () => {
    try {
      const id = userData._id;
      const response = await axios.patch(
        `http://localhost:3000/users/editbio/${id}`,
        { editedBio }
      );
      if (!response.data) {
        throw new Error("Failed to update user data");
      }
      console.log(response.data);
      setUserData(response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <>
      <div className="postpg">
        <div
          className="border border-black h-72 w-screen bg-no-repeat bg-cover flex justify-between items-center"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
          }}
        ></div>
        <div className="h-fit w-screen border border-black flex flex-col items-left pl-12 pb-6 profile2">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center w-fit">
              <div
                className="border border-black h-[200px] w-[200px] rounded-full"
                style={{
                  backgroundImage: `url(${spidey})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="pt-2">
                <p className="text-xl">{userData ? userData.username : ""}</p>
              </div>
            </div>
            {!editMode ? (
              <button className="bg-black text-white mr-20 text-xl w-16 rounded-md mt-5" onClick={() => setEditMode(true)}>✎Edit</button>
            ) : (
              <button className="bg-black text-white mr-20 text-xl w-16 rounded-md mt-5" onClick={handleEditSubmit}>Save</button>
            )}
          </div>
          <div>
            {editMode ? (
              <textarea
                name="bio"
                className="w-[1400px] h-fit border border-gray-300 text-xl pl-12 font-bold pb-8 mt-2 pt-5"
                placeholder="bio"
                value={editedBio}
                onChange={(e) => setEditedBio(e.target.value)}
              />
            ) : (
              <input
                className="w-[1000px] ml-10 h-10 border border-gray-300 text-xl pl-12 font-bold pb-8 mt-2 pt-5"
                placeholder="bio"
                value={userData ? userData.bio : ""} 
                disabled
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
