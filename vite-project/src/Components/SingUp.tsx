
import React, { useState } from "react";
import logo from "../assets/todo-app-icon_1076610-59732.jpg";
import type {user_info} from '../user_info'
import { API } from "../api";
import { useNavigate } from "react-router-dom";
const SingUp = () => {
  const [user , setUser] = useState<user_info>({username:"" , Email: "" , password : ""})
  const navigate = useNavigate()
  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    
    try{
        await API.post("/user/Auth/Register" , user).then( () => navigate("/Login") )
    } catch(err:any) {
       alert(err)
    }
  }
  return (
    <div className="w-full bg-gray-200 h-screen flex justify-center items-center ">
      <div className="w-xl bg-white  h-90 p-5 flex  justify-center items-center  rounded-md">
        <form
          action=""
          className=" w-full  space-y-7 flex-1"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl text-start font-Nav font-bold ">Sing up</h1>
          <div>
            <input
              type="email"
      
              value={user?.Email}
              onChange={(e) => setUser({...user , Email: e.target.value})}
              placeholder="Email"
              required
            
              className=" w-xs border-1 border-gray-300 rounded-md focus:outline-0 p-2 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
      
              value={user.username}
              onChange={(e) => setUser({...user , username : e.target.value})}
              placeholder="username"
              required
            
              className=" w-xs border-1 border-gray-300 rounded-md focus:outline-0 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div>
            <input
              type="password"
      
              value={user.password}
              onChange={(e) => setUser({...user , password : e.target.value})}
              placeholder="password"
              required
            
              className=" w-xs border-1 border-gray-300 rounded-md focus:outline-0 p-2 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="w-full flex justify-center">
            <button className="bg-black px-7 py-1 text-white rounded-md text-lg font-Nav">
              singUp
            </button>
          </div>
        </form>

        <div className="flex-1 ">
          <img src={logo} alt="" className="w-50"/>
          <h1 className="text-center font-Nav text-xl font-bold">TO-DO APP</h1>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
