import inctance from "./axios.config";

export const getTodosByPage = (page: number) => {
  return inctance.get(`?_page=${page}`);
};
