import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Directory from "./routes/homeScreen/Directory";
import Navbar from "./routes/UI/Navbar";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/shop/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Directory />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
