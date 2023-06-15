import { useEffect, useState } from "react";
import { getAllWarehouses } from "./warehouse-service";

// SIMULAÇÃO DE COMPONENTE REACT

function Warehouses() {
  const [armazens, setArmazens] = useState();

  useEffect(() => {
    getAllWarehouses().then((dados) => setArmazens(dados));
  }, []);

  return (
    <div>
      <ul>
        {armazens.map((armazem) => {
          return <li>{armazem.nome}</li>;
        })}
      </ul>
    </div>
  );
}

export default Warehous;
