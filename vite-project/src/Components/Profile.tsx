import React, { useEffect, useState } from "react";
import profile from "../assets/generic-male-avatar-icon-piiktqtfffyzulft.png";
import { API } from "../api";
import type { veiw } from "../Veiw";

const Profile = () => {
  const [User_data, setUser_data] = useState<veiw>({Email: "" , username : ""});
  
  const info = async () => {
    const token = localStorage.getItem("token")
    const res =  await API.get("/user/Post/User_profile" , {
      headers : {
        Authorization : `Bearer ${token}`
      }
     })

     setUser_data(res.data)
  }

  useEffect(() => {
    info()
  } , [])
   return (
    <div>
      <div className="  flex justify-center items-center flex-col h-screen ">
        <div className="w-lg bg-amber-100 p-10 space-y-7 rounded-lg">

        <div className="w-full flex justify-center">
          <img src={profile} alt="" className="w-28"/>
        </div>

        <div className="w-full flex flex-col text-start">
          <h1 className="font-Nav font-bold">Name :  <span className="font-Nav font-medium">{User_data.username}</span>  </h1>
          <h1 className="font-Nav font-bold">Email : <span className="font-Nav font-medium">{User_data.Email}</span></h1>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
