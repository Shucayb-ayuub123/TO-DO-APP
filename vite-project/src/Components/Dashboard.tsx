import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import profil_ava from "../assets/generic-male-avatar-icon-piiktqtfffyzulft.png";
import { API } from "../api";
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

  return (
    <div>
      <div className="flex">
        <nav className="w-73   top-0 left-0 fixed h-screen bg-purple-500">
          <div className="text-center w-full pt-20 pb-5 flex justify-center rounded-md">
            <h1 className="text-2xl font-Nav font-bold bg-white  px-4 py-2 w-50">
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
            <li className="bg-white px-2 py-2 rounded-md text-center font-Nav text-lg font-medium">
              <Link to="incomplete_task">INCOMPLETE TASK</Link>
            </li>
          </ul>
          <div className="px-2">
            <div className="flex mt-30 justify-start items-center space-x-2 p-1 bg-white px-0 rounded-md cursor-pointer">
              <img src={profil_ava} className="w-10" alt="" />
              <div>
                <h1 className="font-Nav font-bold">{user?.username}</h1>
                <p className=" font-Nav">{user?.Email}</p>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex-1 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
