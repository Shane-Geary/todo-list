import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const LOCAL_STORAGE_KEY = "tasks";

  const addTaskHandler = (task) => {
    setTasks([...tasks, task]);
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getTasks) setTasks(getTasks);
  },[]);

  return (
    <div>
      <Header />
      <AddTask addTaskHandler={addTaskHandler} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
