import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Directory from "./components/Directory";
import Navbar from "./components/UI/Navbar";
import SignIn from "./routes/sign-in/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Directory />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
