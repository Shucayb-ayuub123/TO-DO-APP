import React, { useEffect, useState } from "react";
import { API } from "../api";
import type { user_info } from "../user_info";

const VEIW = () => {
  const [Data, setData] = useState<user_info[]>([]);

  const Data1 = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("No token found, please login");

    try {
      const res = await API.get("/user/Post/Veiw", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(res.data);
    } catch (error: any) {
       if (error == Response) {
        alert(error.data);
      } else {
        alert(error);
      }
    }
  };

  useEffect(() => {
    Data1();
  }, []);
  return (
    <div>
      <h1 className="text-center font-Nav mt-7 text-2xl font-bold">
        All Tasks You created
      </h1>

      <br /> <br />
      <div className="grid grid-cols-3 space-y-5">
        {Data.map((Da , ) => (
          <div className="w-md shadow-md border-1 border-purple-200 rounded-sm   " key={Da.id}>
            <div className="p-5 flex justify-start flex-col gap-2 space-y-2" >
              <div className="flex justify-between">
                <h2 className="font-semibold font-Nav">
                  Title :{" "}
                  <span className="font-normal font-Nav"> {Da.title} </span>{" "}
                </h2>
                <h1 className="font-semibold">
                  Created at :{" "}
                  <span className="text-gray-500 text-md">{Da.Date && new Date(Da.Date).toLocaleDateString()}</span>
                </h1>
              </div>
              <p className="font-semibold font-Nav">
                description :{" "}
                <span className="font-normal  font-Nav">{Da.Description}</span>
              </p>

              <p className="font-semibold font-Nav">
                status : <span className="font-Nav font-normal">Pending</span>
              </p>

              <div className="flex space-x-4">
                <button className="bg-green-600 text-white px-3 py-2 text-md rounded-sm">
                  UPDATE
                </button>
                <button className="bg-blue-600 text-white px-3 py-2 text-md rounded-sm">
                  Complete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VEIW;
