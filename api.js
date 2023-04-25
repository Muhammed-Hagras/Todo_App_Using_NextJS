import axios from "axios";

const baseURL = "http://localhost:4000/todos";

export const getAllTodos = async () => {
  const res = await axios.get(`${baseURL}`);
  const todos = await res.data;
  return todos;
};

export const addTodo = async (todo) => {
  const res = await axios.post(`${baseURL}`, todo);
  const newTodo = await res.data;
  return newTodo;
};

export const editTodo = async (todo) => {
  const res = await axios.put(`${baseURL}/${todo.id}`, todo);
  const EditedTodo = await res.data;
  return EditedTodo;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${baseURL}/${id}`);
};
