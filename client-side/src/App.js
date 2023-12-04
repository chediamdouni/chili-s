import "./App.css";
import { Routes, Route } from "react-router-dom";

import AddFood from "./components/addfood";
import Login from "./pages/Login.js";
import Signup from "./pages/signUp.js";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addfood" element={<AddFood />} />
      <Route path="/dashboard" element={<Dashboard/> }/>
    </Routes>
  );
}

export default App;
