import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

export const getAllTasks = async (params = {}) => {
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.log("Get all tasks error : ", error);
    throw new Error(error.message);
  }
};

export const getTaskById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Get Task by id: ", error);
    throw new Error(error.message);
  }
};

export const createTask = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}`, data);
    return response.data;
  } catch (error) {
    console.log("Post task error : ", error);
    throw new Error(error.message);
  }
};

export const updateTask = async (data, id) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.log("update task error : ", error);
    throw new Error(error.message);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log("Task delete error : ", error);
    throw new Error(error.message);
  }
};
