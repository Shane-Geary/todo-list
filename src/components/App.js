import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks([...tasks, task]);
  }

  return (
    <div>
      <Header />
      <AddTask addTaskHandler={addTaskHandler} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
