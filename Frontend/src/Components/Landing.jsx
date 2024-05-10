import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import landing from "../assets/Landing.png";
import menu from "../assets/menu.png";
import closeIcon from "../assets/close.png";
import spidey from "../assets/spidey.jpg";

function DropdownMenu({ isOpen, toggle, userData }) {
  useEffect(() => {
    console.log(userData);
  }, [userData]); 

  if (!userData) return null;

  return (
    <div
      className={`dropdown absolute mt-12 w-52 h-3/4 bg-red-950 text-white rounded-xl shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${isOpen ? "visible" : "invisible"}`}
      style={{ transitionDuration: "0.5s" }}
    >
      <div className=" rounded-xl h-40 shadow-lg pt-10">
        <div className=" h-10 w-10 border border-white rounded-3xl ml-20 ">
          <Link to="/profile">
            <img src={spidey} className="bg-cover rounded-full" alt="" />
          </Link>
        </div>
        <p className="text-center mt-5">{userData.username}</p>
      </div>
      <ul>
        <Link to="/Blogpost">
          <li className="px-8 py-6 text-center hover:bg-red-700 cursor-pointer rounded-xl hover:text-black">
            Create post
          </li>
        </Link>
        <Link to="/Chat">
          <li className="px-8 py-6 text-center hover:bg-red-700 cursor-pointer rounded-xl hover:text-black">
            Chat
          </li>
        </Link>
        <li className="px-8 py-6 text-center hover:bg-red-700 cursor-pointer rounded-xl hover:text-black">
          Community
        </li>
        <Link to="/About">
          <li className="px-8 py-6 text-center hover:bg-red-700 cursor-pointer rounded-xl hover:text-black">
            About
          </li>
        </Link>
      </ul>
    </div>
  );
}


function Landing() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [userData, setUserData] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
  const userDataString = Cookies.get("userData");
  if (userDataString) {
    try {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    } catch (error) {
      console.error("Error parsing userData:", error);
    }
  }
}, []);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/blog");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    Cookies.remove("userData");
    setUserData(null);
    navigate("/Signup");
  };

  return (
    <div>
      <div
        className="bg-black h-screen w-screen bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${landing})` }}
      >
        <div className="text-white text-4xl pl-24 pt-6 h-24 bg-black bg-opacity-50 flex">
          {isDropdownOpen ? (
            <img
              src={closeIcon}
              className="h-6 w-6 mr-10 mt-2 cursor-pointer  transition duration-300"
              alt=""
              onClick={toggleDropdown}
            />
          ) : (
            <img
              src={menu}
              className="h-8 w-8 mr-6 mt-1 cursor-pointer  transition duration-300"
              alt=""
              onClick={toggleDropdown}
            />
          )}
          <h1 className="icon">Neo Tokyo</h1>
          <input
            type="text"
            placeholder="search"
            className="h-9 w-56 text-sm rounded-lg ml-80 mt-2"
            style={{ textIndent: "30px" }}
          />
          {userData ? (
            <>
              <p
                className=" text-2xl pl-72 mt-2 cursor-pointer hover:text-white"
                onClick={handleLogout}
              >
                Log out
              </p>
              <div className=" mt-2 h-10 w-10 border mb-10 border-white rounded-3xl ml-[150px] ">
                <Link to="/Profile">
                  <img src={spidey} className="bg-cover rounded-full" alt="" />
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-2xl mt-2 ml-60 cursor-pointer hover:text-white">
                <Link
                  to="/Loginpg"
                  className="hover:underline hover:text-white"
                >
                  Login
                </Link>
              </h2>
              <h2 className="text-2xl mt-2 ml-20 cursor-pointer hover:text-white">
                <Link to="/Signup" className="hover:underline hover:text-white">
                  Sign up
                </Link>
              </h2>
            </>
          )}
        </div>
        <div className="flex">
          <div className="overflow-auto blog grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4 w-2/4 mx-auto items-center justify-center">
            {Array.isArray(blogs) &&
              blogs.map((blog) => (
                <Link to={`/Blogs/${blog._id}`} key={blog._id}>
                  <div className="bg-red-950 p-5 rounded-lg">
                    <div className="w-full h-60 bg-blue-800">
                      <img
                        className="w-full h-full"
                        src={blog.image_link}
                        alt=""
                      />
                    </div>
                    <h2 className="text-xl font-extrabold text-white">
                      {blog.title}
                    </h2>
                    <p className="text-md line-clamp-3 text-white">
                      {blog.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
          <DropdownMenu isOpen={isDropdownOpen} toggle={toggleDropdown} userData={userData} />
        </div>
      </div>
    </div>
  );
}

export default Landing;