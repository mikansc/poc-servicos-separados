const { useState } = require("react");
const { createWarehouse } = require("./warehouse-service");

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const Form = () => {
  const [armazemTipo, setArmazemTipo] = useState();
  const [nome, setNome] = useState();

  const criarArmazem = () => {
    createWarehouse({
      nome: nome,
      tipo: armazemTipo,
    });
  };

  return (
    <select
      name=""
      id=""
      value={armazemTipo}
      onChange={(e) => setArmazemTipo(e.target.value)}
    >
      <option value="cachorro">Cachorro</option>
      <option value="gato">Gato</option>
    </select>
  );
};
