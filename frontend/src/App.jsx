import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Editar from "./pages/Editar";
import Login from "./pages/Login";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/cadastro" element={<PrivateRoute><Cadastro /></PrivateRoute>} />
        <Route path="/editar/:id" element={<PrivateRoute><Editar /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}
