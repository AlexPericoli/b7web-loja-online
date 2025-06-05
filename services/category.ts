import { data } from "../data";
import { Category } from "../types/Category";

export const getCategories = (): Category[] | undefined => {
  return data.categories;
};

export const getCategoryById = (id: number): Category | undefined => {
  return data.categories.find((item) => item.id === id);
};
