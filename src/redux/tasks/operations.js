import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { selectTasksList } from './selectors';

const TasksAPI = axios.create({
  baseURL: 'https://63bb3a8432d17a50908aa204.mockapi.io/',
});

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkApi) => {
    try {
      await new Promise(res => setTimeout(() => res(), 10000));
      const response = await TasksAPI.get('tasks-list');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || 'Somethings went wrong');
    }
  }
);

export const createTask = createAsyncThunk(
  'tasks/create',
  async (text, thunkApi) => {
    try {
      const response = await TasksAPI.post('tasks-list', { text });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || 'Somethings went wrong');
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (id, thunkApi) => {
    try {
      await TasksAPI.delete(`tasks-list/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || 'Somethings went wrong');
    }
  }
);

export const toggleTask = createAsyncThunk(
  'tasks/toggle',
  async (id, thunkApi) => {
    try {
      const task = selectTasksList(thunkApi.getState()).find(
        task => task.id === id
      );
      const response = await TasksAPI.put(`tasks-list/${id}`, {
        completed: !task.completed,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || 'Somethings went wrong');
    }
  }
);
