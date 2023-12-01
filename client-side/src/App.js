import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import AddFood from "./components/addfood";
import UpdateFood from "./components/UpdateFood";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/addfood" element={<AddFood />} />
        <Route path="update/:id" element={<UpdateFood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
