import React from "react";

import SingUp from "./Components/SingUp";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import ADD from "./Components/ADD-T";
import VEIW from "./Components/VEIW-T";
import INCOM from "./Components/INCOMP";
import ProtectRout from "./Components/ProtectRout";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SingUp />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Dashboard"
          element={
            <ProtectRout>
              <Dashboard />
            </ProtectRout>
          }
        >
          <Route index element={<ADD />} />
          <Route path="AddTesk" element={<ADD />} />
          <Route path="veiw" element={<VEIW />} />
          <Route path="incomplete_task" element={<INCOM />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
