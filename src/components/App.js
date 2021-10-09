import React, { useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const LOCAL_STORAGE_KEY = "tasks";

  const addTaskHandler = (task) => {
    setTasks([...tasks, { id: uuid(), ...task }]);
  }

  const deleteTaskHandler = (id) => {
    const newTaskList = tasks.filter((task => {
      return task.id !== id;
    }))
    setTasks(newTaskList);
  }

  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getTasks) setTasks(getTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header />
      <AddTask addTaskHandler={addTaskHandler} />
      <TaskList tasks={tasks} deleteTaskHandler={deleteTaskHandler} />
    </div>
  );
}

export default App;
