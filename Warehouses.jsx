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
      <WarehouseForm />
      <WarehouseList list={armazens} />
    </div>
  );
}

export default Warehous;
