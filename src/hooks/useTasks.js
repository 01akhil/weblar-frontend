// src/hooks/useTasks.js

import { useState, useEffect } from 'react';
import { fetchTasks,createTask, updateTask, deleteTask} from '../api/tasks'
import { fetchWeather } from '../api/weather';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksData = await fetchTasks();
      setTasks(tasksData);
    };

    getTasks();
  }, []);

  const handleCreateTask = async () => {
    if (!title || !description || !weather) {
      alert('Please fill in all fields');
      return;
    }

    const newTask = { title, description, status, weather };
    const savedTask = await createTask(newTask);

    if (savedTask) {
      setTasks([...tasks, savedTask]);
      resetForm();
    }
  };

  const handleEditTask = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setWeather(task.weather);
    setEditingTask(task);
    setShowCreateForm(true);
  };

  const handleUpdateTask = async () => {
    if (!title || !description || !weather) {
      alert('Please fill in all fields');
      return;
    }

    const updatedTask = { ...editingTask, title, description, status, weather };
    await updateTask(editingTask._id, updatedTask);

    setTasks(tasks.map((task) => (task._id === editingTask._id ? updatedTask : task)));
    resetForm();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const fetchWeatherForCity = async (cityName) => {
    const weatherDescription = await fetchWeather(cityName);
    setWeather(weatherDescription);
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setStatus('pending');
    setWeather('');
    setCity('');
    setEditingTask(null);
    setShowCreateForm(false);
  };

  return {
    tasks,
    title,
    setTitle,
    description,
    setDescription,
    status,
    setStatus,
    weather,
    setWeather,
    city,
    setCity,
    editingTask,
    showCreateForm,
    setShowCreateForm,
    handleCreateTask,
    handleEditTask,
    handleUpdateTask,
    handleDeleteTask,
    fetchWeatherForCity,
    resetForm
  };
};

export default useTasks;
