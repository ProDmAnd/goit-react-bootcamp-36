import axios from 'axios';

const TasksAPI = axios.create({
  baseURL: 'https://63bb3a8432d17a50908aa204.mockapi.io/',
});

export const getTasks = async () => {
  try {
    const response = await TasksAPI.get('tasks-list');
    return response.data;
  } catch (error) {
    throw error;
  }
};