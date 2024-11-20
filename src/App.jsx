import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Registration/SignIn";
import SignUp from "./Registration/SignUp";
import HomePage from "./Main/HomePage";
import TodoPage from "./UserProfile/TodoPage";
import OtpAuth from "./Registration/OtpAuth";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo/*" element={<TodoPage />} />
        <Route path="/otp" element={<OtpAuth />} />
      </Routes>
    </div>
  );
};

export default App;
