import React from 'react';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {
  const tasks = [
    {
      description: "clean the house"
    },
    {
      description: "get milk and eggs"
    }
  ]

  return (
    <div>
      <Header />
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
