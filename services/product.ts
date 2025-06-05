import { data } from "../data";
import { Product } from "../types/Product";

export const getProducts = (): Product[] | undefined => {
  return data.products;
};

export const getProductById = (id: number): Product | undefined => {
  return data.products.find((item) => item.id === id);
};

export const getProductsByCategoryId = (idCategory: number): Product[] => {
  return data.products.filter((item) => item.idCategory === idCategory);
};
