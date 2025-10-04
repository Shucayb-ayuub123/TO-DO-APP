import React, { useState } from "react";
import logo from "../assets/todo-app-icon_1076610-59732.jpg";
import type { user_info } from "../user_info";
import { API } from "../api";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState<user_info>({ username: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await API.post("/user/Auth/LoginUser", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/Dashboard");
      }) // ✅ Show success message
      .catch((err) => {
        if (err.response) {
          alert(err.response.data); // "Invalid password" / "User not found"
        } else {
          alert("Something went wrong");
        }
      });
  };
  return (
    <div className="w-full bg-gray-200 h-screen flex justify-center items-center flex-col fixed">
        <div className="flex justify-center  items-center  rounded-3xl md:hidden bg-amber-100 w-md p-1 space-x-6">
          <img src={logo} alt="" className="w-17 rounded-4xl" />
          <h1 className="text-center font-Nav text-xl font-bold">TO-DO APP</h1>
        </div>
        <br /> <br />
      <div className=" bg-white  h-90 p-5 flex  justify-center items-center  rounded-md">
        <form
          action=""
          className="w-full  space-y-7 flex-1"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl text-start font-Nav font-bold ">Login</h1>

          <div>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              placeholder="username"
              className=" w-full border-1 border-gray-300 rounded-md focus:outline-0  p-2 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="password"
              className="  w-full border-1 border-gray-300 rounded-md focus:outline-0  p-2 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="w-full flex justify-center">
            <button
              className="bg-black px-7 py-1 text-white rounded-md w-sm text-lg font-Nav"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        <div className=" hidden w-full flex-1  md:block ">
          <img src={logo} alt="" className="w-50" />
          <h1 className="text-center font-Nav text-xl font-bold">TO-DO APP</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
