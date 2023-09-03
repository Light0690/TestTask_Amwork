import axios from "axios";

const inctance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos/",
});

export default inctance;
