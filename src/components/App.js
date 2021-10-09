import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Header />
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
