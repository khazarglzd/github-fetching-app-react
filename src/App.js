import React from "react";
import { Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Users from "./routes/Users";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container text-gray-200 py-3">
        <Logo />
        <Routes>
          <Route path="/" element={<Users />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
