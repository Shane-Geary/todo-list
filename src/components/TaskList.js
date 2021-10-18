import React from 'react';
import { Link } from 'react-router-dom';
import Task from './Task';

const TaskList = (props) => {

    const removeTaskHandler = (id) => {
        props.deleteTaskHandler(id);
    }

    const tasks = [
        {
            id: 1,
            description: "Add Routes",
        }
    ]

    const renderTaskList = tasks.map((task) => {
        return (
            <Task task={task} removeTaskHandler={removeTaskHandler} key={task.id} />
        );
    })
    return (
        <div>
            <h2>Task List
                <Link to='/addTask'>
                    <button>Add Task</button>
                </Link> 
            </h2>
            <div>{renderTaskList}</div>
        </div>
    );
}

export default TaskList;