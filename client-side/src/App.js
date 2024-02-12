import "./App.css";
import { Routes, Route } from "react-router-dom";

import AddFood from "./components/addfood";
import Login from "./pages/Login.js";
import Signup from "./pages/signUp.js";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import UpdateFood from "./components/updateFood.js";
import FoodList from "./components/FoodList.js";
import FoodDetail from "./components/FoodDetails.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/add-food" element={<AddFood />} />
      <Route path="/edit-food/:id" element={<UpdateFood />} />
      <Route path="/dashboard" element={<Dashboard/> }/>
      <Route path="/food-list" element={<FoodList/> }/>
      <Route path="/food-detail/:id" element={<FoodDetail/> }/>
    </Routes>
  );
}

export default App;
