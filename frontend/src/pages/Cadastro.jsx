import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [form, setForm] = useState({ nome: "", email: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    api.post("/dados", form).then(() => {
      navigate("/");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Cadastrar</h1>
      <input name="nome" placeholder="Nome" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
}
