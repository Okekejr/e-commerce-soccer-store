import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Directory from "./routes/homeScreen/Directory";
import Navbar from "./routes/UI/Navbar";
import Authentication from "./routes/Authentication/Authentication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Directory />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
