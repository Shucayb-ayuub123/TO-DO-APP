import React, { useState } from "react";
import type { user_info } from "../user_info";
import { API } from "../api";
const ADD = () => {
  const [Data, setData] = useState<user_info>({
    title: "",
    Description: "",
    Date: new Date().toString()
  });

  const handleData = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await API.post("/user/Post/Addtask", Data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => alert(res.data));
    } catch (error: any) {
      if (error == Response) {
        alert(error.data);
      } else {
        alert(error);
      }
    }
  };
  return (
    <div className=" w-full flex justify-center items-center">
      <div className="w-10/12 bg-white shadow-lg p-4">
        <div className="w-full flex justify-center">
          <h1 className="text-center pt-6 font-Nav text-2xl font-semibold shadow-md shadow-purple-300 w-md p-4">
            Create Your task
          </h1>
        </div>
        <form
          onSubmit={handleData}
          className="flex justify-center items-center flex-col space-y-7 p-10"
        >
          <div className="w-full flex justify-center ">
            <input
              type="text"
              value={Data.title}
              onChange={(e) => setData({ ...Data, title: e.target.value })}
              className=" focus:outline-none focus:ring-1 focus:ring-purple-400  border-2 rounded-md border-gray-400 w-2xl py-2 px-2"
              placeholder="title"
              required
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              value={Data.Description}
              onChange={(e) =>
                setData({ ...Data, Description: e.target.value })
              }
              placeholder="Description"
              cols={80}
              rows={5}
              className=" focus:outline-none focus:ring-1 focus:ring-green-400  border-2 rounded-md border-gray-400 w-2xl px-2 p-4"
            ></textarea>
          </div>
          <div>
            <input
              type="date"
              name=""
          
              
              onChange={(e) => setData({ ...Data, Date: new Date().toISOString().split("T")[0] })}
              id=""
              placeholder="deadline"
              className=" focus:outline-none focus:ring-1 focus:ring-green-400  border-2 rounded-md border-gray-400 w-2xl py-2 px-2 "
            />
          </div>

          <div>
            <button
              className="bg-purple-500 px-4 py-2 rounded-md text-white font-Nav"
              type="submit"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ADD;
