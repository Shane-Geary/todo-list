import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

  const sortTaskHandler = tasks.sort(function(a, b) {
    let task1 = a.description.toUpperCase();
    let task2 = b.description.toUpperCase();
    if (task1 < task2) {
      return -1;
    }
    if (task1 > task2) {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getTasks) setTasks(getTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Router>
        <Header />
        <AddTask addTaskHandler={addTaskHandler} />
        <TaskList tasks={tasks} deleteTaskHandler={deleteTaskHandler} sortTaskHandler={sortTaskHandler} />
      </Router>
    </div>
  );
}

export default App;
