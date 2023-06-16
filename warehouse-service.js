import { get, post } from "./http-service";

export const getAllWarehouses = () => {
  return get("api/armazens");
};

export const getWarehouseById = (id) => {
  return get(`api/armazens/${id}`);
};

export const createWarehouse = (warehouse) => {
  return post("api/armazens", warehouse);
};
