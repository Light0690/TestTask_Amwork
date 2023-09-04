import inctance from "./axios.config";

import { ITodo } from "../interfaces/ITodo";

export const getTodosByPage = async (page: number = 1) => {
  const response = await inctance.get<ITodo[]>(`?_page=${page}`);
  return response.data;
};
