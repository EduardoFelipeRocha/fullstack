import { useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export default function Editar() {
  const [form, setForm] = useState({ nome: "", email: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/dados/${id}`).then((res) => {
      setForm(res.data);
    });
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    api.put(`/dados/${id}`, form).then(() => {
      navigate("/");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar</h1>
      <input name="nome" value={form.nome} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  );
}
