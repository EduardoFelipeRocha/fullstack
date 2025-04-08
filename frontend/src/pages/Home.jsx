import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    api.get("/dados").then((response) => {
      setDados(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Dados</h1>
      <Link to="/cadastro">Cadastrar Novo</Link>
      <ul>
        {dados.map((item) => (
          <li key={item.id}>
            {item.nome} - {item.email}
            <Link to={`/editar/${item.id}`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
