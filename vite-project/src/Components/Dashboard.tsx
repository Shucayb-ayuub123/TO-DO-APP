import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import profil_ava from "../assets/generic-male-avatar-icon-piiktqtfffyzulft.png";
import { API } from "../api";
import Logout1 from '../assets/Logout.png'
import type { user_info } from "../user_info";

const Dashboard = () => {
  const [user, setUser] = useState<user_info>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    API.get("/user/Post/User_profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => setUser(res.data)) // res.data is now a single object
      .catch((err) => console.error(err));
  }, []);

  const Logout = () => {
    localStorage.clear()
  }

  return (
    <div>
      <div className="flex">
        <nav className="  -translate-x-70   sm:w-70     top-0 left-0 fixed h-screen bg-purple-500 rounded-tr-lg rounded-br-lg">
          <div className="text-center w-full pt-20 pb-5 flex justify-center ">
            <h1 className="text-2xl font-Nav font-bold bg-purple-400  px-4 py-2 rounded-2xl w-50">
              TO-DO APP
            </h1>
          </div>
          <ul className="flex justify-center flex-col p-5 space-y-5 ">
            <li className="bg-white px-7 py-2 text-center rounded-md font-Nav text-lg font-medium ">
              <Link to="AddTesk" className="text-center">
                {" "}
                <span className="text-2xl text-center">+</span> ADD TASK
              </Link>
            </li>
            <li className="bg-white px-3 text-center py-2 rounded-md font-Nav text-lg font-medium">
              <Link to="veiw">VEIW ALL TASKS</Link>
            </li>
           
            <li className="bg-white p-2 rounded-md text-center font-Nav text-lg mt-60 font-medium">
              <Link to="Pro">
                <div className="flex  justify-start items-center space-x-2  bg-white px-0 rounded-md cursor-pointer">
                  <img src={profil_ava} className="w-10" alt="" />
                  <div className="flex justify-start flex-col">
                    <h1 className="font-Nav font-bold text-start text-md">{user?.username}</h1>
                    <p className=" font-Nav text-xs">{user?.Email}</p>
                  </div>
                </div>{" "}
              </Link>
            </li>

            <li className="bg-white cursor-pointer flex justify-evenly items-center p-1 rounded-md">
              <button  className="text-xl font-Nav font-semibold " onClick={Logout}>Logout</button>
              <img src={Logout1} alt="" className="w-10 cursor-pointer" />
            </li>

          </ul>
        </nav>

        <div className="smflex-1 ml-75   justify-center items-center  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
