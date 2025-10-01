import { useEffect, useRef, useState } from "react";
import { API } from "../api";
import type { veiw } from "../Veiw";
import { Navigate, useNavigate } from "react-router-dom";

const VEIW = () => {
  const [Data, setData] = useState<veiw[]>([]);
  const [searchData, setsearch] = useState<string>("");

  const navigate = useNavigate();
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

  const filteredTasks = Data.filter(
    (item) =>
      item.title?.toLowerCase().includes(searchData.toLowerCase()) ||
      item.Description?.toLowerCase().includes(searchData.toLowerCase())
  );

  useEffect(() => {
    Data1();
  }, []);

  const Complete_task = (id: number | undefined) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: item.status === "Complete" ?  "Pending" : "Complete" } : item
      )
    );
  };
  const getRelativeTime = (dateString: string | undefined) => {
    if (!dateString) return "unknown";
    const now = new Date();
    const isoString = dateString.replace(" ", "T");
    const date = new Date(isoString);
    const diff = now.getTime() - date.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years}y ago`;
    if (months > 0) return `${months}mon ago `;
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    if (seconds > 0) return `${seconds}s ago`;
    return "just now";
  };

  return (
    <div>
      <h1 className="text-center font-Nav mt-7 text-2xl font-bold">
        All Tasks You created
      </h1>
      <br /> <br />
      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Search Task"
          value={searchData}
          onChange={(e) => setsearch(e.target.value)}
          className="h-9 px-2 border-1 border-purple-400 focus:outline-none focus:border-0 focus:ring-2 focus:ring-purple-500 rounded-md  w-lg"
        />
      </div>
      <br /> <br />
      <div className="grid grid-cols-3 space-y-5 space-x-4">
        {filteredTasks.map((Da) => (
          <div
            className={`inline-block shadow-md border-1 border-purple-200 rounded-sm  ${Da.status == "Complete" ? "bg-gray-300 text-gray-600" : "bg-white"}`}   
            key={Da.id}
          >
            <div className="p-3 flex justify-start flex-col gap-2 space-y-2">
              <div className="flex justify-between">
                <h2 className="font-semibold font-Nav text-wrap">
                  Title :{" "}
                  <span className="font-normal font-Nav"> {Da.title} </span>{" "}
                </h2>

                <h1 className="font-semibold">
                  Created at:{" "}
                  <span className="text-gray-500">
                    {getRelativeTime(Da.Date)}
                  </span>
                </h1>
              </div>
              <p className="font-semibold font-Nav">
                description :{" "}
                <span className="font-normal  font-Nav">{Da.Description}</span>
              </p>

              <p className="font-semibold font-Nav">
                status :{" "}
                <span
                  className={`font-Nav ${
                    Da.status === "Pending" ? "text-red-600" : "text-gray-600"
                  } font-semibold`}
                >
                  {Da.status}
                </span>
              </p>

              <div className="flex space-x-4">
                <button
                  className="bg-green-600 text-white px-3 py-2 text-md rounded-sm cursor-pointer"
                  onClick={() => navigate(`/VEIW/ADD-T/${Da.id}`)}
                >
                  UPDATE
                </button>

                <button
                  className={`bg-blue-600 text-white px-3 py-2 text-md rounded-sm cursor-pointer 
    ${Da.status === "Complete" ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => Complete_task(Da.id)}
                  
                >
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
